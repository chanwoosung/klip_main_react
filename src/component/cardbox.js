import { useEffect } from 'react';
import css from '../styles/cardbox.module.css'
import axios from 'axios';

export default function CardBox({props,profile}) {
    // useEffect(()=>{
    //    axiosCall();
    // })
    // const axiosCall = () => {
    //     axios({
    //         method:'GET',
    //         url:'https://cors-anywhere.herokuapp.com/'+profile,
    //         headers:{
    //             'Access-Control-Allow-Origin':'*',
    //             "X-Requested-With": "XMLHttpRequest"
    //         }
    //     })
    // }
    const handleImgError = (e) => {
        e.target.src = "assets/premium-icon-x-656756.png";
    }
    return(
        <div className={css.friendBox}>
            <div className={css.profileIcon}>
                <img src={profile} onError={handleImgError} alt="user"/>
                <div className={css.userName}>{props.name}</div>
            </div>
        </div>
    )
}