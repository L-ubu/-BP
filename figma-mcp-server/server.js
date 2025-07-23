#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import fetch from 'node-fetch';

class FigmaMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'figma-mcp-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.figmaToken = process.env.FIGMA_TOKEN;
    this.setupToolHandlers();
  }

  setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'get_figma_file',
            description: 'Get Figma file data by file key',
            inputSchema: {
              type: 'object',
              properties: {
                fileKey: {
                  type: 'string',
                  description: 'The Figma file key (from the URL)',
                },
                nodeId: {
                  type: 'string',
                  description: 'Optional node ID to get specific component',
                },
              },
              required: ['fileKey'],
            },
          },
          {
            name: 'get_figma_file_nodes',
            description: 'Get specific nodes from a Figma file',
            inputSchema: {
              type: 'object',
              properties: {
                fileKey: {
                  type: 'string',
                  description: 'The Figma file key',
                },
                nodeIds: {
                  type: 'array',
                  items: { type: 'string' },
                  description: 'Array of node IDs to retrieve',
                },
              },
              required: ['fileKey', 'nodeIds'],
            },
          },
          {
            name: 'get_figma_file_images',
            description: 'Get image URLs for Figma file nodes',
            inputSchema: {
              type: 'object',
              properties: {
                fileKey: {
                  type: 'string',
                  description: 'The Figma file key',
                },
                nodeIds: {
                  type: 'array',
                  items: { type: 'string' },
                  description: 'Array of node IDs to get images for',
                },
                format: {
                  type: 'string',
                  enum: ['jpg', 'png', 'svg', 'pdf'],
                  default: 'png',
                  description: 'Image format',
                },
                scale: {
                  type: 'number',
                  default: 1,
                  description: 'Image scale factor',
                },
              },
              required: ['fileKey', 'nodeIds'],
            },
          },
        ],
      };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'get_figma_file':
            return await this.getFigmaFile(args.fileKey, args.nodeId);
          case 'get_figma_file_nodes':
            return await this.getFigmaFileNodes(args.fileKey, args.nodeIds);
          case 'get_figma_file_images':
            return await this.getFigmaFileImages(args.fileKey, args.nodeIds, args.format, args.scale);
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  async getFigmaFile(fileKey, nodeId = null) {
    if (!this.figmaToken) {
      throw new Error('FIGMA_TOKEN environment variable is required');
    }

    const url = nodeId 
      ? `https://api.figma.com/v1/files/${fileKey}/nodes?ids=${nodeId}`
      : `https://api.figma.com/v1/files/${fileKey}`;

    const response = await fetch(url, {
      headers: {
        'X-Figma-Token': this.figmaToken,
      },
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(data, null, 2),
        },
      ],
    };
  }

  async getFigmaFileNodes(fileKey, nodeIds) {
    if (!this.figmaToken) {
      throw new Error('FIGMA_TOKEN environment variable is required');
    }

    const ids = nodeIds.join(',');
    const response = await fetch(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=${ids}`, {
      headers: {
        'X-Figma-Token': this.figmaToken,
      },
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(data, null, 2),
        },
      ],
    };
  }

  async getFigmaFileImages(fileKey, nodeIds, format = 'png', scale = 1) {
    if (!this.figmaToken) {
      throw new Error('FIGMA_TOKEN environment variable is required');
    }

    const ids = nodeIds.join(',');
    const response = await fetch(
      `https://api.figma.com/v1/images/${fileKey}?ids=${ids}&format=${format}&scale=${scale}`,
      {
        headers: {
          'X-Figma-Token': this.figmaToken,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(data, null, 2),
        },
      ],
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Figma MCP Server started');
  }
}

const server = new FigmaMCPServer();
server.run().catch(console.error); 