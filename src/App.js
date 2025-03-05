// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import ServiceCard from './component/ServiceCard';
import Aboutus from './component/Aboutus';
import Slider2 from './component/Slider2';
import Testimoni from './component/Testimoni';
import BlogCard from './component/Blog_card';
import Footer from './component/Footer';
import AboutMenu from './component/AboutMenu';
import ServiceMenu from './ServiceMenu';
import TestimoniMenu from './component/TestimoniMenu';
import BlogMenu from './component/BlogMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <ServiceCard />
            <Aboutus />
            <Slider2 />
            <Testimoni />
            <BlogCard />
          </>
        } />
        <Route path="/about" element={<AboutMenu />} />
        <Route path="/services" element={<ServiceMenu />} />
        <Route path="/testimoni" element={<TestimoniMenu />} />
        <Route path="/blog" element={<BlogMenu />} />
      </Routes>
      <Footer />
      <a href="/" className="position-fixed bottom-0 end-0 translate-middle btn btn-success rounded-circle" >
        <i class="fa-solid fa-arrow-up-from-bracket fs-4 p-2"></i>
      </a>
    </BrowserRouter>
  );


  
  
     
}

export default App;
