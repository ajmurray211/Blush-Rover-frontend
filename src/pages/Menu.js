import { cocktails, mocktails, puree } from "../data";
import drink from '../assets/drink.jpeg'
import drink2 from '../assets/drink2.jpeg'

const Menu = () => {

    const mappedCocktails = cocktails.map((item) => { return <div className="menuOption">- {item} -</div> })
    const mappedMocktails = mocktails.map((item) => { return <div className="menuOption">- {item} -</div> })
    const mappedPuree = puree.map((item) => { return <div className="menuOption">- {item} -</div> })


    return (
        <div id="menuPage">
            <div id="menuWelcomeSection">
                <div className="menuWelcome1Grid">
                    <div id="menuFlex1">
                        <img id="menuTitleImg1" src={drink} />
                        <div className="title" id="menuWelcomMsg">
                            <p id="mm1">Cocktails</p>
                            <p id="mm2">&</p>
                            <p id="mm3">Mocktails</p>
                        </div>
                    </div>
                </div>
                <img id="menuTitleImg2" src={drink2} />
            </div>

            <div id="menuDisclaimerSection" className="body">
                <p>Choose from our wide veriety of cocktails, mocktails and puree options below!</p>
                <p>In accordance to Washington law we cannot supply any alcohol.</p>
            </div>

            <div id="menuCocktailsSection" className="botPad">
                <div className="title menuTitleSection">Cocktails</div>
                <div className="body menuOptions">{mappedCocktails}</div>
            </div>

            <div id="menuMocktailsSection" className="botPad">
                <div className="title menuTitleSection">Mocktails</div>
                <div className="body menuOptions">{mappedMocktails}</div>
            </div>

            <div id="menuPureeSection" className="botPad">
                <div className="title menuTitleSection">Purees</div>
                <div className="body menuOptions">{mappedPuree}</div>
            </div>
        </div>
    );
}

export default Menu;