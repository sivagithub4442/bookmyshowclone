import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Inner from './components/Inner';
import Mainc from './components/Mainc';




function App() {
  return (
    <div className="App">
     
        <div>
          <Header/>
         <Inner/>
         <Mainc/>
          <Footer/>
        </div>
        
    </div>
  );
}

export default App;
