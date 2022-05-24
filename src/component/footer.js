import css from '../styles/footer.module.css'
import AdvertiseSection from './advertise'

export default function Footer() {
    return (
        <div className={css.footerSection}>
            <AdvertiseSection />
            <div className={css.footerArea}>
                <ul>
                    <li style={{"color":"rgb(119,126,129)"}}>
                        고객센터
                    </li>
                    <li style={{"color":"rgb(119,126,129)"}}>
                        이용약관
                    </li>
                    <li className={css.boldText}>
                        개인정보처리방침
                    </li>
                </ul>
            </div>
            <div style={{"color":"rgb(119,126,129)"}}>
                <h4>ⓒ2020.GROUND1 Corp.All rights reserved.</h4>
            </div>
            <div>
                <h3>(주)그라운드원</h3>
            </div>
        </div>
    )
}