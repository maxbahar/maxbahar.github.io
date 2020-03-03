import React from 'react';
import css from 'css/SingleProject.module.css';
import Links from 'components/Links';

function SingleProject(props) {
    const current = props.data;
    return(
        <div className={css.container}>
            <div className={css.desc}>
                <h2>{current.title}</h2>
                <p className={css.source}>{current.source}</p>
                <p>{current.timeframe}</p>
                <Links links={current.materials}/>
                <p className={css.text}>{current.description}</p>
            </div>
            <img src={current.image} alt={current.title} className={css.image}/>
        </div>
    );
}

export default SingleProject;