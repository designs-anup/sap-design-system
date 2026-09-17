import { ThemeProvider } from '@ui5/webcomponents-react/ThemeProvider';
import { Button } from '@ui5/webcomponents-react/Button';
import { Card } from '@ui5/webcomponents-react/Card';
import { Text } from '@ui5/webcomponents-react/Text';
import { Bar } from '@ui5/webcomponents-react/Bar';
import { Title } from '@ui5/webcomponents-react/Title';

function App() {
  return (
    <ThemeProvider>
      {/* Fiori Shell Bar Header */}
      <Bar 
        design="Header" 
        endContent={
          <Button design="Transparent" icon="settings" />
        }
      >
        <Title level="H3">My SAP Fiori App</Title>
      </Bar>

      {/* Main Content Area */}
      <div style={{ padding: '2rem' }}>
        <Card style={{ width: '350px', padding: '1rem' }}>
          <Text style={{ marginBottom: '1rem', display: 'block' }}>
            Welcome! Your React + Vite environment is now wired up with the SAP Design System.
          </Text>
          <Button 
            design="Emphasized" 
            onClick={() => alert('SAP Fiori theme active!')}
          >
            Click Me
          </Button>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;