import { useEffect, useState } from "react";
import css from "../styles/sidemenu.module.css"
export default function SideMenu({visible,onClick}) {
    let [flag,setFlag]=useState(visible);
    let [progress,setProgress]=useState(false);
    useEffect(()=>{
        animateSlide(visible);
    },[visible]);
    const animateSlide = (bool) => {
        if(bool==false) {
            if(flag==false) {return;}
            setTimeout(()=>{console.log(progress);setProgress(bool);},1000);
        } else {
            setProgress(bool);
        }
        setFlag(bool);
    }
    return(
        <div className={(flag? css.showMenu : css.hiddenMenu)}>
            <div className={css.background} onClick={()=>{onClick(false)}} style={{"display":(progress?"block":"none")}}>
                <div className={css.contentMenu} style={{"display":(progress?"block":"none")}}>

                </div>
            </div>
        </div>
    )
}