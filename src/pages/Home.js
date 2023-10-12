import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import cart from '../assets/cart.jpeg'
import decor from '../assets/decor.jpeg'

const Home = () => {
    return (
        <div>
            <div id="welcomeTitleContainer">
                <img id="welcomeImg" src={cart} />
                <div id="welcomeMsg">
                    <p className="homeTitle">WELCOME!</p>
                    <p className="homeDescription">
                        We have multiple packages that can fit any event, and are happy to work with you to create the perfect
                        package for your needs. Whether you’re hosting a birthday celebration, a corporate event, celebrating
                        a mother or Bride to be, or any other intimate occasion, our cart is the perfect companion to elevate
                        your event.
                    </p>
                    <p className="homeDescription">
                        Our team is passionate about ensuring your event runs smoothly, we take care of everything so you just
                        focus on enjoying your special day. From Setup, to serving and cleanup our friendly team handles every
                        detail with efficiency!
                    </p>
                </div>
            </div>

            <div id="homePackagesContainer">
                <div id="homePackagesMsg">
                    <p className="homeTitle">Packages</p>
                    <p className="homeDescription">
                        Looking for the perfect venue to celebrate life's most cherished moments? Look no
                        further! Blush and Rover welcomes you to turn your special occasions into unforgettable
                        memories. Our frozen drink stand provides a picturesque backdrop for events like
                        weddings, bridal showers, baby showers, and more.
                    </p>
                    <Link to="/packages">
                        <Button color="light" >Learn More</Button>
                    </Link>
                </div>
                <img id="homePackagesImg" src={decor} />
            </div>
        </div>
    );
}

export default Home;