import { Button } from "reactstrap";

const Home = () => {
    return (
        <div>
            <div id="welcomeTitleContainer">
                <div id="welcomeImg" />
                <div id="welcomeMsg">
                    <p className="homeTitle">WELCOME!</p>
                    <p className="homeDescription">
                        Nestled in the heart of Snohomish, Washington, Blush and Rover is your go-to
                        destination for frozen cocktails and mocktails that are as enchanting as the
                        Pacific Northwest itself. Whether you're seeking an escape from the everyday
                        hustle or a vibrant place to unwind with friends and family, we're here to
                        make your day a little brighter.
                    </p>
                    <p className="homeDescription">
                        At Blush and Rover, we blend the artistry of mixology with the pure joy of
                        frozen delights. Our frozen cocktails, kissed with the essence of local
                        ingredients, and our meticulously crafted mocktails, are designed to
                        tantalize your taste buds and transport you to a world of flavor and fun. So
                        , come join us at Blush and Rover, where every sip is a journey, every
                        moment is a celebration, and every guest is family. Cheers to endless
                        summer vibes in the heart of Snohomish! 🌞🍸
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
                    <Button color="light" href="/packages">Learn More</Button>
                </div>
                <div id="homePackagesImg" />
            </div>
        </div>
    );
}

export default Home;