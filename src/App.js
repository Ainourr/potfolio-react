
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//komponentler gelecek
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
// import Services from './components/Services'
import Experience from './components/Experience'
import Contactus from './components/Contactus'
import Error from './components/error'
import Footer from './components/Footer'
function App() { 
  return (
    
    <div className="container-fluid">

    <Navbar />
    <Header />
    <AboutMe />
    {/* <Services /> */}
    
    <Experience />
    <Contactus />
    <Error/>
    <Footer/>

    </div>
  );
}

export default App;
