import React from 'react';
import css from 'css/SingleExp.module.css';
import Links from 'components/Links';

function SingleProject(props) {
    const current = props.data;
    return(
        <div className={css.container}>
            <div className={css.desc}>
                <h2>{current.title}</h2>
                {current.people && 
                <p>{current.people}</p>
                }
                <p className={css.tag}>{current.tag}</p>
                <p className={css.source}>{current.source}, {current.timeframe}</p>
                <Links links={current.materials}/>
                <p className={css.text}>{current.description}</p>
            </div>
            <img src={current.image} alt={current.title} className={css.image}/>
        </div>
    );
}

export default SingleProject;