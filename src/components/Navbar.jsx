import "../styles/Navbar.css";

const Navbar = () => {
    return ( 
        <div className="Navbar">
            <h1 className="CompTitle">STONKS</h1>
            <ul className="NavItems">
                <li>BTC</li>
                <li>BNB</li>
                <li>ETH</li>
                <li>SOL</li>
                <li>ADA</li>
            </ul>
        </div>
     );
}
 
export default Navbar;