import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { homeObjOne,homeObjTwo,homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { ServicesObjOne, ServicesObjTwo } from '../components/Services/Data';

const Home = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggle = () =>{
    setIsOpen(!isOpen)
 };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services {...ServicesObjOne}/>
      <Services {...ServicesObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <Footer/>
    </>
  );
};

export default Home

