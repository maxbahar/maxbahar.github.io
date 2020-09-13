import React, { forwardRef } from 'react';
import css from 'css/About.module.css';

const About = forwardRef(function (props, ref) {
    return(
        <div ref={ref} className={css.container}>
                <div className={css.header}><h1>About</h1></div>
            <p>{props.data.description}</p>
        </div>
    );
});

export default About;