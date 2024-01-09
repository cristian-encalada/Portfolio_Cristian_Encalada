import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Education, Hero, Navbar, Tech, Projects, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='h-screen w-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#23486F] via-[#192532] to-[#161a1d] bg-no-repeat bg-center'>
        {/*<div className='bg-hero-pattern bg-no-repeat bg-center'></div> */}
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Education />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
