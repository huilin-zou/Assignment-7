import logo from './logo.svg';
import './App.css';
import SearchField from './components/SearchField';
import GifCard from './components/GifCard';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1 className="App-header">
         GIPHY API SEARCHER
        </h1>
      </header>

    <SearchField/>
    
    </div>
  );
}
export default App;
