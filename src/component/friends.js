import {useEffect, useState} from 'react';
import Faker from 'Faker';
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
                <h3>최근 전송한 친구</h3>
            </div>
            <div className={css.friendsList}>
                <ul>
                    {friends.map(friend=>{
                        return (
                            <li key={friend.name}>
                                <FriendBox props={friend} profile={Faker.Image.avatar()}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}