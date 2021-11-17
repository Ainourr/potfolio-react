
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//komponentler gelecek
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="container-fluid">

    <Navbar />
    <Header />
    <AboutMe />

    </div>
  );
}

export default App;
