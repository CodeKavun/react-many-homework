import './App.css';
import FilmComponent from './FilmComponent';

function App() {
  return (
    <div className="App">
      <FilmComponent title="Rambo - First Blood" director="Ted Kotcheff"
        year="1982" studio="Orion Pictures" actors={["Silwester Stalone", "Richard Crenna",
        "Brian Dennehy", "David Caruso", "Michael Talbott"]} ></FilmComponent>
    </div>
  );
}

export default App;
