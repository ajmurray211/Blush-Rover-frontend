import { packages, addOns } from '../data.js'

const Packages = () => {

    const mappedPackages = packages.map((item) => {
        return (
            <div className='packageVarient'>
                <div className='varientTitle'>
                    <p className='title'>{item.name}</p>
                    <p className='title'>${item.price}</p>
                </div>
                <div className='body'>{item.details.map((detail, i) => { return <p>{detail}</p> })}</div>
            </div>
        )
    })

    const mappedAddOns = addOns.map((item) => {
        return (
            <div className='addOn body'>
                <p>{item.name}</p>
                <p>- {item.price} -</p>
            </div>
        )
    })

    return (
        <div id="pacakagePage">
            <div id="PackagesTitleSection">
                <div id="packageTitleImg" />
                <div id="packageDecContainer">
                    <div id="packageTitleDec">
                        <p className="title">We offer 5 different packages to best fit the needs of your event. All packages include:</p>
                        <ul className="body">
                            <li> Blush + Rover bar cart with double barrel frozen cocktail machine</li>
                            <li> MAST Certified Bartenders</li>
                            <li> Choice of 4 garnishes to pair with your frozen cocktails</li>
                            <li> 10oz plastic cups, Straws, and napkins - napkins to match your color scheme are available!</li>
                            <li> Bar Menu that fits the theme of your event</li>
                            <li> Setup/ Breakdown and Clean up</li>
                            <li> Travel within 20 miles of Lake Stevens, WA</li>
                            <li> General and Liquor Liability Insurance</li>
                        </ul>
                        <p className='body'>ALCOHOL IS NOT INCLIDED WITH ANY OF THE FOLLOWING PACKAGES</p>

                        <ul className='body'>
                            <li> Additional Bartender required for any event with  additional beer, wine & bubbly service added</li>
                            <li>
                                Mileage and Ferry fees may apply
                            </li>
                        </ul>

                        <p className='disclaimer'>Package pricing does not include gratuity or taxes. Events under 100 guests will have a 15% gratuity added.
                            For events over 100 guests, a 12% gratuity is added to all service items with a tip jar present (tip jar not required for events under 100 guest )
                            and 18% if you opt out of a tip jar.
                        </p>
                        <p className='disclaimer'>
                            For the best experience and to ensure compliance with our service standards, insurance and state laws, all alcoholic beverages,
                            including beer, wine and frozen cocktails must be served exclusively by our bartenders. We kindly ask that no additional bartenders
                            are onsite. We have additional bartending options below that can be added to any frozen cocktail package.
                        </p>
                    </div>
                </div>
            </div>

            <div id="packageVariationsContainer">
                {mappedPackages}
            </div>

            <div id="PackagesTravelContainer">
                <p className='title'>Travel Fee: </p>
                <p>We travel within 20 miles of zip code: 98258 for free $0.75 per mile for locations outside of the 15
                    mile radius. Please reach out to confirm If we travel your location.</p>
            </div>

            <div id="packageAddOnSection">
                <p className='title fee'>Add Ons:</p>
                <div id='packageAddOnContainer'>
                    {mappedAddOns}
                </div>
            </div>
        </div>
    );
}

export default Packages;