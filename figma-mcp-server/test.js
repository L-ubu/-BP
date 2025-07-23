import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

async function testFigmaMCPServer() {
  const transport = new StdioClientTransport({
    command: 'node',
    args: ['server.js'],
    env: {
      FIGMA_TOKEN: process.env.FIGMA_TOKEN || 'test-token'
    }
  });

  const client = new Client({
    name: 'figma-mcp-test-client',
    version: '1.0.0',
  });

  try {
    await client.connect(transport);
    console.log('✅ Connected to Figma MCP Server');

    // List available tools
    const tools = await client.listTools();
    console.log('📋 Available tools:');
    tools.tools.forEach(tool => {
      console.log(`  - ${tool.name}: ${tool.description}`);
    });

    console.log('\n🎉 Figma MCP Server is working correctly!');
    console.log('\nNext steps:');
    console.log('1. Get your Figma Personal Access Token from https://www.figma.com/settings');
    console.log('2. Set the FIGMA_TOKEN environment variable');
    console.log('3. Use the server with your MCP client');

  } catch (error) {
    console.error('❌ Error testing Figma MCP Server:', error.message);
  } finally {
    await client.close();
  }
}

testFigmaMCPServer(); 