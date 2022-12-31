import './App.css';
import { IgaretUI } from './IgaretUI';
import { IgaretProvider } from '../IgaretContext';

function App() {
  return (
    <IgaretProvider>
      <IgaretUI/>
    </IgaretProvider>
  );
}

export default App;
