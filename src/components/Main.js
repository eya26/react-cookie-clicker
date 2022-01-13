import { useState } from "react";
import './Main.css'

const Main = () => {
    const [clicks, setClicks] = useState(0)

    const handleClick = () => {
        setClicks(prevClicks => prevClicks+1)
    }
    return(
    <div className="Body">
        <p className='clicks'>{clicks}</p>
        <img
         className="cookie"
         src='https://thumbs.dreamstime.com/b/biscuit-aux-chips-au-chocolat-mordu-miettes-de-cass%C3%A9-en-dessin-anim%C3%A9-plat-isol%C3%A9-sur-fond-blanc-collation-boulangerie-216785429.jpg'
         onClick={handleClick}
         />
    </div>
    );
}

export default Main;