import React from 'react';
import css from 'css/SideBar.module.css';
import NavLinks from 'components/NavLinks';
import Links from 'components/Links';
import publicUrl from 'utils/publicUrl';

function SideBar(props) {
    const me = props.data;
    return (
        <div className={css.container}>
            <div className={css.header}><h1>{me.name}</h1></div>
            <img src={publicUrl(me.photo)} alt={me.name +" headshot"} className={css.image}/>
            <div className={css.details}>
                <p>{me.title}</p>
                <p>{me.address}</p>
                <a className={css.email} href={"mailto:" + me.email}>{me.email}</a>
            </div>
            <Links links={me.links}/>
            <a className={css.resume} href={me.resume}>Resume</a>
            {/* <NavLinks resume={me.resume}/> */}
        </div>
    );
}

export default SideBar;