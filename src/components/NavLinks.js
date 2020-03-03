import React from 'react';
import css from 'css/NavLinks.module.css';
import publicURL from 'utils/publicUrl';

function NavLinks(props) {

    return (
        <div className={css.container}>
            <div className={css.item}>
                <p>About</p>
            </div>
            <div className={css.item}>
                <p>Projects</p>
            </div>
            <div className={css.item}>
                <a href={publicURL(props.resume)}>Resume</a>
            </div>
        </div>
    )
    
}

export default NavLinks;