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
        console.log(item)
        return (
            <div className='addOn body'>
                <p>{item.name}</p>
                <p>- {item.price} -</p>
            </div>
        )
    })

    return (
        <div id="pacakagePage">
            <div id="PackagesTitleContainer">
                <div id="packageTitleImg" />
                <div id="packageDecContainer">
                    <div id="packageTitleDec">
                        <p className="title">All packages include:</p>
                        <ul className="body">
                            <li>Bar Cart with Double Barrel Frośe Machine</li>
                            <li>Choice of up to 2 Frozen Cocktails/Mocktail flavors</li>
                            <li>Alcohol Recommendation Guide</li>
                            <li>Frośe Garnishes- Can pick  4 options- Your choice of fresh fruit or candy toppings</li>
                            <li>10oz Plastic Cups, Straws and Napkins</li>
                            <li>Frośe Cart Attendant</li>
                            <li>Full Set up, serve and clean-up</li>
                            <li>Alcohol Guide</li>
                        </ul>
                        <p className='body'>We do not supply alcohol in any package.</p>
                    </div>
                </div>
            </div>

            <div id="packageVariationsContainer">
                {mappedPackages}
            </div>

            <div id="PackagesTravelContainer">
                <p className='title'>Travel Fee: </p>
                <p>We travel within 15 miles of zip code: 98258 for free $0.75 per mile for locations outside of the 15
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