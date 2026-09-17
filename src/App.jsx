import React, { useState } from 'react';
import { ThemeProvider } from '@ui5/webcomponents-react/ThemeProvider';
import { ShellBar } from '@ui5/webcomponents-react/ShellBar';
import { FlexibleColumnLayout } from '@ui5/webcomponents-react/FlexibleColumnLayout';
import { List, ListItemStandard } from '@ui5/webcomponents-react';
import { Card, Text, Button, Title } from '@ui5/webcomponents-react';

function App() {

  // Manages which layout mode is active (e.g., "OneColumn", "TwoColumnsMidExpanded", "ThreeColumnsMidExpanded")
  const [layout, setLayout] = useState('OneColumn');
  const [selectedItem, setSelectedItem] = useState(null);

  // Handler when clicking an item in the Start column list
  const handleItemClick = (e) => {
    setSelectedItem(e.detail.item.textContent);
    setLayout('TwoColumnsMidExpanded'); // Expands the middle column dynamically
  };

  return (
    <ThemeProvider>
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Fiori Shell Bar */}
        <ShellBar primaryTitle="SAP Fiori Flexible Column App" />

        {/* Flexible Column Layout Container */}
        <FlexibleColumnLayout
          style={{ height: 'calc(100vh - 44px)' }}
          layout={layout}
          startColumn={
            <Card header={<Title level="H4" style={{ padding: '1rem' }}>Products List</Title>} style={{ height: '100%' }}>
              <List onSelectionChange={handleItemClick}>
                <ListItemStandard type="Navigation">Enterprise ERP Suite</ListItemStandard>
                <ListItemStandard type="Navigation">Cloud Analytics Platform</ListItemStandard>
                <ListItemStandard type="Navigation">Supply Chain Management</ListItemStandard>
              </List>
            </Card>
          }
          midColumn={
            <Card header={<Title level="H4" style={{ padding: '1rem' }}>Details: {selectedItem || 'Select an item'}</Title>} style={{ height: '100%', padding: '1rem' }}>
              <Text style={{ marginBottom: '1rem', display: 'block' }}>
                Displaying detailed breakdown for <strong>{selectedItem}</strong>. You can view metrics, logs, and properties here.
              </Text>
              <Button 
                design="Emphasized" 
                onClick={() => setLayout('ThreeColumnsMidExpanded')}
              >
                Open Analytics End-Column
              </Button>
              <Button 
                design="Transparent" 
                style={{ marginLeft: '0.5rem' }}
                onClick={() => {
                  setLayout('OneColumn');
                  setSelectedItem(null);
                }}
              >
                Close Column
              </Button>
            </Card>
          }
          endColumn={
            <Card header={<Title level="H4" style={{ padding: '1rem' }}>Analytics & Charts</Title>} style={{ height: '100%', padding: '1rem' }}>
              <Text style={{ marginBottom: '1rem', display: 'block' }}>
                Deep-dive diagnostic charts and metrics for {selectedItem}.
              </Text>
              <Button 
                onClick={() => setLayout('TwoColumnsMidExpanded')}
              >
                Hide End Column
              </Button>
            </Card>
          }
        />
      </div>
    </ThemeProvider>
  );
}

export default App;