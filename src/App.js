import './App.css';
import Header from './Components/Header';
import Meme from './Components/Meme';

/**
 * The main App component.
 * This component renders the Header and Meme components.
 */
function App() {
  return (
    <div className="App">
      {/* Render the Header component */}
      <Header />
      {/* Render the Meme component */}
      <Meme />
    </div>
  );
}

export default App;