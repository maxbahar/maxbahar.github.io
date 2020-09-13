import React, { forwardRef } from 'react';
import SingleExp from 'components/SingleExp';
import css from 'css/Experience.module.css';

const Experience = forwardRef(function (props, ref) {
    return(
        <div ref={ref}>
        <div className={css.header}><h1>Experience</h1></div>
        {props.data.map(d =>
        <SingleExp
        key={d.id}
        data={d}
        />)}
        </div>
    );
})

export default Experience;