import './App.css';
import { Box } from '@chakra-ui/react'
import Context from './components/Context';

function App() {
  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Context />


      </Box>

    </div>
  );
}

export default App;
