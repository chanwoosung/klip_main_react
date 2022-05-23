import css from '../styles/header.module.css';
export default function Header() {
    return (
        <div className={css.header}>
            <div className={css.hamburger}>
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
    )
}