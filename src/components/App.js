import React, { useRef } from 'react';
import css from 'css/App.module.css';
import About from 'components/About';
import Experience from 'components/Experience';
import SideBar from 'components/SideBar';
import data from 'components/data.json';

function App() {

  const aboutRef = useRef(null);
  const expRef = useRef(null);

  function scrollToRef(ref) {
    ref === "about" ? 
    window.scrollTo(0, aboutRef.current.offsetTop) : 
    window.scrollTo(0, expRef.current.offsetTop)
  }

  return (
    <div className={css.container}>
    <SideBar data={data.about} handleClick={scrollToRef}/>
      <div className={css.main}>
        <About ref={aboutRef} data={data.about}/>
        <Experience ref={expRef} data={data.experience}/>
      </div>
    </div>
    );
}

export default App;
