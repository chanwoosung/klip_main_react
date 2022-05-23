import {useEffect, useState} from 'react';

import css from '../styles/friends.module.css'
import FriendBox from './friendbox';
export default function Friends() {
    const [tokenList,setTokenList] = useState([]);
    useEffect(()=>{
        (async()=>{
            const data = await (
                await fetch(`http://localhost:9000/friend`)
            ).json();
        console.log(data);
        setTokenList(data);
        })()
    },[]);
    console.log(tokenList);
    return (
        <div>
            <div className={css.tokenHeader}>
                <h3>최근 받은 카드</h3>
                <h4>전체보기 ></h4>
            </div>
            <div>
                <ul>
                    {/* {tokenList.map(item=>{
                        return (
                            <FriendBox key={item.token} props={item}/>
                        )
                    })} */}
                </ul>
            </div>
        </div>
    )
}