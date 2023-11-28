// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Page/home/Home';
import About from './component/Page/about/About';
import Services from './component/Page/service/Services';
import Skill from './component/Page/skill/Skill';
import Portfolio from './component/Page/portfolio/Portfolio';
import Contact from './component/Page/contact/Contact';
import Testimonial from './component/Page/testiminial/Testimonial';
import Header from './component/layout/header/Header';
import Footer from './component/layout/footer/Footer';


function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/skill' element={<Skill />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/testimonial' element={<Testimonial />} />






                </Routes>
                <Footer />
            </BrowserRouter>
        </>

    );
}

export default App;
