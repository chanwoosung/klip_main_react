import {useEffect, useState} from 'react';

import css from '../styles/friends.module.css'
import FriendBox from './friendbox';
export default function Friends() {
    const [friends,setFriends] = useState([]);
    useEffect(()=>{
        (async()=>{
            const data = await (
                await fetch(`http://localhost:9000/friend`)
            ).json();
        console.log(data);
        setFriends(data);
        })()
    },[]);
    return (
        <div>
            <div className={css.tokenHeader}>
                <h3>최근 받은 카드</h3>
                <h4>전체보기 ></h4>
            </div>
            <div className={css.friendsList}>
                <ul>
                    {friends.map(friend=>{
                        return (
                            <li>
                                <FriendBox key={friend.name} props={friend}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}