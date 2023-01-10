import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Banner from './components/banner/Banner';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Navbar/>
      <Main/>
      <Banner/>
     
    </div>
  );
}

export default App;
