import css from '../styles/tokenline.module.css'

export default function TokenLine({props}) {
    console.log(props);
    return (
        <div className={css.tokenLine}>
            <img src="assets/klay_klip.svg" alt="icon"/>
            <div>
                <h3>{props.amount} {props.symbol}</h3>
            </div>
        </div>
    )
}