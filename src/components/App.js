import React from 'react';
import css from 'css/App.module.css';
import About from 'components/About';
import Projects from 'components/Projects';
import SideBar from 'components/SideBar';
import data from 'components/data.json';

function App() {

  return (
    <div className={css.container}>
    <SideBar data={data.about}/>
      <div className={css.main}>
        <About data={data.about}/>
        <Projects data={data.projects}/>
      </div>
    </div>
    );
}

export default App;
