import {useEffect, useState} from 'react';
import Faker from 'Faker';
import css from '../styles/cardlist.module.css'
import CardBox from './cardbox';
export default function ReceivedCard() {
    const [cards,setCards] = useState([]);
    useEffect(()=>{
        (async()=>{
            const data = await (
                await fetch(`http://localhost:9000/card`)
            ).json();
        console.log(data);
        setCards(...data);
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
                    {cards.map(card =>{
                        return (
                            <li key={card.tokenId}>
                                <CardBox props={card} profile={Faker.Image.avatar()}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}