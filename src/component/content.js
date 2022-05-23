import css from '../styles/content.module.css'
import Friends from './friends'
import ReceivedCard from './receivecard'
import Wallet from './wallet'
export default function Content() {
    return (
        <div className={css.contentBlock}>
            <div className={css.welcome}>
                <div className={css.leftSection}>
                    <div className={css.boldText}>성찬우(Chanwoo) 님,<br /> 안녕하세요.</div>
                    <div className={css.roundBlueButton}>
                        내 주소 보기
                    </div>
                </div>
                <div className={css.rightSection}>
                    <img src="assets/back-visual.gif"/>
                </div>
            </div>
            <Wallet />
            <ReceivedCard />
            <Friends />
        </div>
    )
}