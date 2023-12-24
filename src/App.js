import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import { css } from '@mui/styled-engine';
import { Registerform } from './Component/Registerform';
import { Package } from './Component/Package';
import ServiceSection from './Component/ServiceSection';
import Gallery from './Component/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Aboutus from './Component/Aboutus';
import Footer from './Component/Footer';

function App() {
  return (
    <>
    <Header/>
    <Home/><br></br>
    {/* <Registerform/> */}
    <Package/>
    <ServiceSection/>
    <Gallery/>
    <Aboutus/>
    <Footer/>
    </>
  );
}

export default App;
