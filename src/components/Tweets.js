import "../styles/Tweet.css";
import verified from "../assets/verified-badge.png";
//to be imported into the tweet via redux
//[avatar,username,handle,date,tweet,replies,retweets,likes,hashtags]

const Tweets = () => {
    return ( 
        <div className="tweet">
            <div className="top-section">
                <div className="profilepicture"></div>
                <div className="username">
                    <h5>Elon Musk</h5>
                    <img src={verified} alt="verified"/>
                    <p> @elonmusk . March 9</p>
                </div>
            </div>
            <h2 className="tweet-text">I Love Me Some Dip With My Chips <span>#BuyTheDip #BTCBear</span></h2>
            <div className="tweet-stats"></div>
        </div>
     );
}
 
export default Tweets;