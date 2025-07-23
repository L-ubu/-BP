import fetch from 'node-fetch';

const FIGMA_TOKEN = 'figd_qew-RgZ6lyNOyMDaSOOCmk2LImv3LAlvfSTuJTVR';
const FILE_KEY = 'wXOYnW7BulM2DPjEq7u9EE';
const NODE_ID = '28-479';

async function fetchFigmaDesign() {
  try {
    console.log('🔍 Fetching Figma design data...');
    
    // First, get the complete file data
    const fileResponse = await fetch(`https://api.figma.com/v1/files/${FILE_KEY}`, {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN,
      },
    });

    if (!fileResponse.ok) {
      throw new Error(`File API error: ${fileResponse.status} ${fileResponse.statusText}`);
    }

    const fileData = await fileResponse.json();
    console.log('✅ File data fetched successfully');
    
    // Get the specific node data
    const nodeResponse = await fetch(`https://api.figma.com/v1/files/${FILE_KEY}/nodes?ids=${NODE_ID}`, {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN,
      },
    });

    if (!nodeResponse.ok) {
      throw new Error(`Node API error: ${nodeResponse.status} ${nodeResponse.statusText}`);
    }

    const nodeData = await nodeResponse.json();
    console.log('✅ Node data fetched successfully');

    // Save the data to files for analysis
    const fs = await import('fs');
    
    fs.writeFileSync('figma-file-data.json', JSON.stringify(fileData, null, 2));
    fs.writeFileSync('figma-node-data.json', JSON.stringify(nodeData, null, 2));
    
    console.log('💾 Data saved to figma-file-data.json and figma-node-data.json');
    
    // Extract key information
    const document = fileData.document;
    const node = nodeData.nodes[NODE_ID];
    
    console.log('\n📋 Design Information:');
    console.log(`File Name: ${fileData.name}`);
    console.log(`Last Modified: ${fileData.lastModified}`);
    console.log(`Version: ${fileData.version}`);
    
    if (node) {
      console.log(`Node Type: ${node.document.type}`);
      console.log(`Node Name: ${node.document.name}`);
    }
    
    return { fileData, nodeData };
    
  } catch (error) {
    console.error('❌ Error fetching Figma design:', error.message);
    throw error;
  }
}

fetchFigmaDesign(); 