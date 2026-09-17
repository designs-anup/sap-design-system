import { ThemeProvider } from '@ui5/webcomponents-react/ThemeProvider';
import { ShellBar } from '@ui5/webcomponents-react/ShellBar';
import { Card } from '@ui5/webcomponents-react/Card';
import { Text } from '@ui5/webcomponents-react/Text';
import { Button } from '@ui5/webcomponents-react/Button';

function App() {
  return (
    <ThemeProvider>
      {/* Official Fiori ShellBar */}
      <ShellBar
        primaryTitle="My SAP Fiori App"
        profile={
          <Button design="Transparent">Anup Sahoo</Button>
        }
      />

      {/* Main Content Container */}
      <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
        <Card 
          style={{ width: '400px', padding: '1.5rem', textAlign: 'center' }}
        >
          <Text style={{ marginBottom: '1.5rem', display: 'block' }}>
            Success! Your React app is now styled with the official SAP Horizon design system.
          </Text>
          <Button 
            design="Emphasized" 
            onClick={() => alert('SAP Fiori Design System is ready!')}
          >
            Explore Components
          </Button>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;