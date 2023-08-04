
import { ChakraBaseProvider } from '@chakra-ui/react';
import theme from './theme';
import './App.css';
import CurrentDay from './features/weeklyRecipes/components/currentDay';

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <div className="App">
        <CurrentDay />
      </div>
    </ChakraBaseProvider>

  );
}

export default App;
