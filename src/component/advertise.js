import { useEffect } from 'react';
import css from '../styles/footerad.module.css'
import axios from 'axios';

export default function AdvertiseSection() {
    return(
        <div className={css.advertiseSection}>
            <div className={css.advertiseArea}>
                <div className={css.adContent}>
                    <img src="assets/main_bottom_list_hyundaicard07_1440x810.png" alt="ad"/>
                </div>
                <div className={css.adContent}>
                    <img src="assets/main_carousel_klip_userguide_1440x810_revised.jpg" alt="ad"/>
                </div>
                <div className={css.adContent}>
                    <img src="assets/main_ad_snap_1440x411.jpg" alt="ad"/>
                </div>
            </div>
        </div>
    )
}