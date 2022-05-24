import { useState } from 'react';
import css from '../styles/header.module.css';
import SideMenu from './sidemenu';
export default function Header() {
    let [visible,setVisble] = useState(false);
    const onClick = () => {
        console.log(visible);
        setVisble(!visible);
    }
    return (
        <div>
            <div className={css.header}>
                <div className={css.hamburger} onClick={onClick}>
                    <div className={css.line}></div>
                    <div className={css.line}></div>
                    <div className={css.line}></div>
                </div>
                <div className={css.mainlogo}>
                    <img src="assets/klip.svg" alt="logo"/>
                </div>
                <div className={css.xbutton}>
                    <img src="assets/premium-icon-x-656756.png" alt="xbtn"/>
                </div>
            </div>
            <SideMenu visible={visible} onClick={onClick}/>
        </div>
    )
}