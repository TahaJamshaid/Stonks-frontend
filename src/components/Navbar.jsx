import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CoinContext } from "../store/coin-context";
import "../styles/Navbar.css";

const Navbar = () => {
    const [active,Setactive] = useState("BTC");
    const activate = (e) => Setactive(e.target.innerText);
    const coincontext = useContext(CoinContext);
    useEffect(()=>coincontext.changeCoin(active),[active]);
    return ( 
        <div className="Navbar">
            <h1 className="CompTitle">STONKS</h1>
            <ul className="NavItems">
                <li onClick={(e)=>activate(e)} className={active === "BTC"?"active":""}>BTC</li>
                <li onClick={(e)=>activate(e)} className={active === "BNB"?"active":""}>BNB</li>
                <li onClick={(e)=>activate(e)} className={active === "ETH"?"active":""}>ETH</li>
                <li onClick={(e)=>activate(e)} className={active === "SOL"?"active":""}>SOL</li>
                <li onClick={(e)=>activate(e)} className={active === "ADA"?"active":""}>ADA</li>
            </ul>
        </div>
     );
}
 
export default Navbar;