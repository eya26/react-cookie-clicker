import { useState, useEffect } from "react";
import './Main.css'

const Main = () => {
    const [clicks, setClicks] = useState(0)
    const [step, setStep] = useState(1)
    const [shadowClickers, setShadowClickers] = useState(0)

    useEffect(() => {
        setInterval(()=>{
            setStep(step*2)
            setTimeout(()=>setStep(1), 5000);
        }, 20000);
    }, [step])

    const handleClick = () => {
        setClicks(clicks+step)
    }
    const handleBuyShadowClicker = () =>{
        if (clicks >= 100){
            setClicks(clicks-100)
            setShadowClickers(shadowClickers+1)
        }
    }
    return(
    <div className="Body">
        <p className='clicks'> clicks: {clicks}</p>
        <p className="clicks">step: {step}</p>
        <p className="clicks"> shadowClickers: {shadowClickers}</p>
        <img
         className="cookie"
         src='https://thumbs.dreamstime.com/b/biscuit-aux-chips-au-chocolat-mordu-miettes-de-cass%C3%A9-en-dessin-anim%C3%A9-plat-isol%C3%A9-sur-fond-blanc-collation-boulangerie-216785429.jpg'
         onClick={handleClick}
         />
         <button onClick={handleBuyShadowClicker}>Buy shadowClickers</button>
    </div>
    );
}

export default Main;