import './App.css';
import Browse from './component/browse';
import Crey from './component/crey';
import Footer from './component/footer';
import Help from './component/help';
import Home from './component/home';
import Navbar from './component/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Crey />
      <Browse />
      <Help />
      <Footer />
    </div>
  );
}

export default App;
