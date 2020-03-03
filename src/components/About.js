import React from 'react';
import css from 'css/About.module.css';

function About(props) {
    return(
        <div className={css.container}>
                <div className={css.header}><h1>About</h1></div>
            <p>{props.data.description}</p>
        </div>
    );
}

export default About;