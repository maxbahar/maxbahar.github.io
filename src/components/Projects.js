import React from 'react';
import SingleProject from 'components/SingleProject';
import css from 'css/Projects.module.css';

function Projects(props) {
    return(
        <div>
        <div className={css.header}><h1>Projects</h1></div>
        {props.data.map(d =>
        <SingleProject
        key={d.id}
        data={d}
        />)}
        </div>
    );
}

export default Projects;