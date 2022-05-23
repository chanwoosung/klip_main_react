import {useEffect, useState} from 'react';
import TokenLine from './tokenline';
import css from '../styles/wallet.module.css'
export default function Wallet() {
    const [tokenList,setTokenList] = useState([]);
    useEffect(()=>{
        (async()=>{
            const data = await (
                await fetch(`http://localhost:9000/wallet`)
            ).json();
        console.log(data);
        setTokenList(...data);
        })()
    },[]);
    console.log(tokenList);
    return (
        <div>
            <div className={css.tokenHeader}>
                <h3>나의 토큰</h3>
                <h4>전체보기 ></h4>
            </div>
            <div>
                {tokenList.map(item=>{
                    return (
                        <TokenLine key={item.token} props={item}/>
                    )
                })}
            </div>
            <div className={css.blueButton}>
                <h4>토큰보내기</h4>
            </div>
        </div>
    )
}