// import { useCallback, useState, useMemo, useEffect } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import Resume from './pages/resume'
import Skills from './pages/skills'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import NavBar from './component/navbar'
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from 'tsparticles'
// import { SpeedInsights } from "@vercel/speed-insights/react"
// import { Circles } from 'react-loader-spinner';

function App() {
//   const [init, setInit] = useState(false);
//   const location = useLocation();
 

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {

//       await loadFull(engine);

//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = (container) => {
//     console.log(container);
//   };

//   const renderParticleJsInHomePage = ['/', '/about' ].includes(location.pathname) 
//   const options = useMemo(
//     () => ({
//       background: {
//         color: {
//           value: "",
//         },
//       },
//       fpsLimit: 120,
//       interactivity: {
//         events: {
//           onClick: {
//             enable: true,
//             mode: "push",
//           },
//           onHover: {
//             enable: true,
//             mode: "repulse",
//           },
//         },
//         modes: {
//           push: {
//             quantity: 4,
//           },
//           repulse: {
//             distance: 200,
//             duration: 0.4,
//           },
//         },
//       },
//       particles: {
//         color: {
//           value: "#133a1b",
//         },
//         links: {
//           color: "#133a1b",
//           distance: 150,
//           enable: true,
//           opacity: 0.5,
//           width: 1,
//         },
//         move: {
//           direction: "none",
//           enable: true,
//           outModes: {
//             default: "bounce",
//           },
//           random: false,
//           speed: 6,
//           straight: false,
//         },
//         number: {
//           density: {
//             enable: true,
//           },
//           value: 80,
//         },
//         opacity: {
//           value: 0.5,
//         },
//         shape: {
//           type: "circle",
//         },
//         size: {
//           value: { min: 1, max: 7 },
//         },
//       },
//       detectRetina: true,
//     }),
//     [],
//   );

 
// if (init) {
  return (
    <div className='App'>
      {/* { renderParticleJsInHomePage && (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />  )  } */}
      <NavBar />
    <div className='app_main_page_content'>
        <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/resume' element={<Resume />} /> 
        <Route path='/skills' element={<Skills />} /> 
        <Route path='/portfolio' element={<Portfolio />} /> 
        <Route path='/contact' element={<Contact />} /> 
        <Route path='#' element={<Home />} /> 
  
      </Routes>
      {/* <SpeedInsights /> */}
    </div>
    </div>
  )
}
// else{
//   return (
//     <div className='APP'>
//       <NavBar />
//       <div className='loadind_div'>
//       <Circles color='blue' visible={true} height={150} width={150} />
//       </div>
//     </div>
//   )
// }
// }

export default App
