const packages = [
    {
        name: 'Mini Frośe',
        price: 400,
        details: [
            'The perfect package for a small event! Enjoy approximately 40, 10oz servings',
            'This package is perfect for a child’s birthday party or intimate gathering ',
            'Two Hours of serve time ',
            'One Flavor and Puree Option',
            'Includes 4 Garnish options, choose from candy, fruit or a combination ',
            '1 Bartender/ Attendant'
        ]
    },
    {
        name: 'But First, Frośe',
        price: 575,
        details: [
            'Perfect for smaller gatherings, enjoy approximately 80, 10oz servings.',
            'Two Flavor and Puree Options',
            'Includes 4 garnish options, choose from candy, fruit or a combination',
            '3 Hours of serve time.',
            '(Frose Refills are Extra)',
            '1 Bartender/ Attendant'
        ]
    },
    {
        name: 'Welcome Frośe!',
        price: 900,
        details: [
            'This package is dedicated for those looking for a refreshing drink for guests as they arrive for your wedding ceremony, and to help them celebrate during cocktail hour! Enjoy approximately 160, 10oz servings',
            'Two Hour of serve time (serve time will stop once the ceremony starts and will resume once cocktail hour begins) ',
            'Two Flavor and Puree Options',
            'Includes 4 garnish options, choose from candy fruit or a combination ',
            '(Frośe Refills are Extra) ',
            '2 Bartenders'
        ]
    },
    {
        name: 'Yes, Way Frośe',
        price: 1000,
        details: [
            'Elevate your event with an extra 80 servings of frose. Approximately 160, 10oz servings.',
            'Two Flavor and puree Option',
            'Includes 4 garnish options. Choose from candy, Fruit or a combination. We will make sure the garnishes stay filled!',
            '3 Hours of serve time.',
            '(Frose Refills are Extra)',
            '2 Bartenders'
        ]
    },
    {
        name: 'Frośe All Day',
        price: 1200,
        details: [
            'Perfect for Larger Events! Approximately 240, 10oz Servings',
            'Two Flavor and puree Option',
            'Includes 4 garnish options. Choose from candy, Fruit or a combination. We will make sure the garnishes stay filled!',
            '(Frose Refills are Extra)',
            '2 Bartenders, 3 hours of serve time '
        ]
    },
]

const addOns = [
    {
        name: 'Extra Bartender',
        price: ' $50/hour'
    },
    {
        name: 'Additional Wine, Beer, & Bubbly Bartending',
        price: '$50/hour'
    },
    {
        name: 'Tossware Drinking Glasses (Elegant and sturdy disposable glasses)',
        price: 'Price Varies'
    },
    {
        name: 'Edible Floral Garnishes ',
        price: 'Price Varies'
    },
    {
        name: 'Portable Generator',
        price: 'No power? No worries, we can provide a quiet portable generator for the time of the event. - $30 '
    },

    {
        name: 'Extra Hours of serve time with no extra servings',
        price: '$75/hour if added before the event'
    },
    {
        name: 'Extra Hour of Serve time with no extra servings',
        price: '$120/hour if added at the event'
    },
]

const cocktails = [
    'Aperol Spritz ',
    'Apple Cider ',
    'Blackberry Peach Sangria',
    'Daiquiri ',
    'Espresso Martini',
    'Frośe ',
    'Frozen Negroni',
    'Jack + Coke ',
    'Mai Tai',
    'Margarita',
    'Mojito ',
    'Moscow Mule',
    'Mudslide ',
    'Old Fashion ',
    'Orange Crush',
    'Paloma ',
    'Peach Bellini ',
    'Piña Colada ',
    'Spiked Lemonade ',
    'Whiskey Sour',
]

const mocktails = [
    'Apple Cider ',
    'Blackberry Peach ',
    'Blue Raspberry ',
    'Coca Cola',
    'Lemonade',
    'Mango ',
    'Orange Crush',
    'Piña Colada',
    'Strawberry',
    'Raspberry',
]

const puree = [
    'MANGO',
    'PEACH',
    'RASPBERRY',
    'BLACKBERRY',
    'STRAWBERRY',
    'BLOOD ORANGE'
]

const questions = [
    {
        question: 'Do you have a liquor license?',
        answer: "Due to WA State Laws we are unable to provide or purchase liquor on behalf of the customer. We are a for hire bartending service. This means we will provide everything you will need, except the alcohol. All cart attendants are licensed to serve alcohol. ",
        link: ""
    },
    {
        question: 'What payment methods do you accept for bookings?',
        answer: "All payments will be collected through a Square invoice that is sent directly to you. ",
        link: ""
    },
    {
        question: 'Do you provide any special garnishes or toppings for the frozen drinks?',
        answer: "Yes, we can provide a variety of garnishes and toppings to enhance the presentation and flavor of your frozen drinks. Let us know your preferences, and we'll do our best to accommodate them.",
        link: ""
    },
    {
        question: 'Can you accommodate dietary restrictions or preferences for our guests?',
        answer: "Absolutely! We understand the importance of catering to dietary restrictions and preferences. Please inform us in advance, and we'll ensure there are suitable options for your guests.",
        link: ""
    },
    {
        question: 'What space and power requirements do you need for the cart setup?',
        answer: "Our cart setup typically requires access to a standard power outlet. As for space, we will need an area that allows for the cart setup (2ft X 4ft) and easy access for our staff to serve your guests.",
        link: ""
    },
    {
        question: 'How long does it take to set up and dismantle the cart at the venue?',
        answer: "1 hour to set up, and one hour to take down- Set-up time may vary depending on the temperature of the space. If the cart is set up in direct sunlight or on a hot day, it may take more time for the drinks to become frozen.",
        link: ""
    },
    {
        question: 'How many frozen drink machines can you provide for our event?',
        answer: "Blush + Rover has one Double Barrel Frozen Drink Machine, You can choose up to two drinks for an event.",
        link: ""
    },
    {
        question: 'Do you provide cups and straws, or should we have them ready for our event?',
        answer: "We can provide cups and straws for your event. Just let us know your expected guest count, and we'll ensure we have an adequate supply of these essentials.",
        link: ""
    },
    {
        question: 'How many drink options can we select for our event, and can we taste them beforehand?',
        answer: "You can select a variety of drink options for your event.",
        link: ""
    },
]

export { packages, addOns, cocktails, mocktails, puree, questions }