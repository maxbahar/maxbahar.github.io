import React from 'react';
import css from 'css/Links.module.css'

function Links(props) {
    return <div>{props.links.map(d => 
    d.path ?
    <div className={css.items} key={d.label}><a href={d.path}>{d.label}</a></div> :
    <div className={css.items} key={d.label}><a href={d.link}>{d.label}</a></div>
    )}</div>
}

export default Links;