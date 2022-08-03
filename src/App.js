import './App.css';
import HomeContainer from './Containers/HomeContainers';
import HeaderContainer from './Containers/HeaderContainer';
function App() {
  return (
    <div className="App">
        <h2> Hello Redux</h2>
        <HeaderContainer/>
        <HomeContainer/>
    </div>
  );
}

export default App;
