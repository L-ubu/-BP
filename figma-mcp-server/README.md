# Figma MCP Server

A Model Context Protocol (MCP) server that provides access to Figma designs through the Figma API.

## Features

- Get Figma file data by file key
- Retrieve specific nodes from Figma files
- Export images from Figma nodes
- Support for multiple image formats (PNG, JPG, SVG, PDF)
- Configurable image scale

## Prerequisites

- Node.js (version 16 or higher)
- A Figma Personal Access Token

## Setup

### 1. Get a Figma Personal Access Token

1. Go to [Figma Account Settings](https://www.figma.com/settings)
2. Navigate to the "Personal access tokens" section
3. Click "Create new token"
4. Give it a name (e.g., "MCP Server")
5. Copy the generated token

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variable

Set your Figma token as an environment variable:

**Windows (PowerShell):**
```powershell
$env:FIGMA_TOKEN="your-figma-token-here"
```

**Windows (Command Prompt):**
```cmd
set FIGMA_TOKEN=your-figma-token-here
```

**Linux/macOS:**
```bash
export FIGMA_TOKEN="your-figma-token-here"
```

### 4. Test the Server

```bash
npm start
```

## Usage

### Available Tools

1. **get_figma_file**
   - Gets complete Figma file data
   - Parameters: `fileKey` (required), `nodeId` (optional)

2. **get_figma_file_nodes**
   - Gets specific nodes from a Figma file
   - Parameters: `fileKey` (required), `nodeIds` (array, required)

3. **get_figma_file_images**
   - Gets image URLs for Figma nodes
   - Parameters: `fileKey` (required), `nodeIds` (array, required), `format` (optional), `scale` (optional)

### Example Usage

```javascript
// Get a complete Figma file
{
  "fileKey": "wXOYnW7BulM2DPjEq7u9EE"
}

// Get a specific node
{
  "fileKey": "wXOYnW7BulM2DPjEq7u9EE",
  "nodeId": "28-479"
}

// Get images for specific nodes
{
  "fileKey": "wXOYnW7BulM2DPjEq7u9EE",
  "nodeIds": ["28-479", "28-480"],
  "format": "png",
  "scale": 2
}
```

## File Key Extraction

To get the file key from a Figma URL:
- URL: `https://www.figma.com/design/wXOYnW7BulM2DPjEq7u9EE/BP-template?node-id=28-479`
- File Key: `wXOYnW7BulM2DPjEq7u9EE`
- Node ID: `28-479`

## Integration with MCP Clients

To use this server with MCP clients like Cursor:

1. Configure your MCP client to use this server
2. Set the `FIGMA_TOKEN` environment variable
3. Use the available tools to access Figma designs

## Error Handling

The server provides detailed error messages for:
- Missing Figma token
- Invalid file keys
- API rate limits
- Network errors

## Security Notes

- Never commit your Figma token to version control
- Use environment variables for sensitive data
- The token has access to your Figma files, so keep it secure

## Troubleshooting

### Common Issues

1. **"FIGMA_TOKEN environment variable is required"**
   - Make sure you've set the environment variable correctly
   - Restart your terminal after setting the variable

2. **"Figma API error: 403 Forbidden"**
   - Check if your token is valid
   - Ensure you have access to the Figma file

3. **"Figma API error: 404 Not Found"**
   - Verify the file key is correct
   - Check if the file exists and you have access

### Getting Help

If you encounter issues:
1. Check the Figma API documentation
2. Verify your token permissions
3. Test with a simple file first 