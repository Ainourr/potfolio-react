
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//komponentler gelecek
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
// import Services from './components/Services'
import Experience from './components/Experience'

function App() {
  return (
    <div className="container-fluid">

    <Navbar />
    <Header />
    <AboutMe />
    {/* <Services /> */}
    <Experience />

    </div>
  );
}

export default App;
