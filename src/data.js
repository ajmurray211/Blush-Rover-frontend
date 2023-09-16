const packages = [
    {
        name: 'but first, frose',
        price: 600,
        details: [
            'Perfect for smaller gatherings, enjoy approximately 80, 100z servings.',
            'Two Flavor and Puree Options',
            'Includes 4 garnish options, choose from candy, fruit or a combination',
            '(Frose Refills are Extra)'
        ]
    },
    {
        name: 'yes, way frose',
        price: 800,
        details: [
            'Elevate your event with an extra 80 servings of frose. Approximately 160, 100Z servings.',
            'Two Flavor and puree Option',
            'Includes 4 garnish options. Choose from candy, Fruit or a combination. We will make sure the garnishes stay filled!',
            '(Frose Refills are Extra)'
        ]
    },
    {
        name: 'frose all day',
        price: 1000,
        details: [
            'Perfect for Weddings or larger events! Approximately 240, 100z servings.',
            'Two Flavor and puree Option',
            'Includes 4 garnish options. Choose from candy, Fruit or a combination. We will make sure the garnishes stay filled!',
            '(Frose Refills are Extra)'
        ]
    },
]

const addOns = [
    {
        name: 'Refills: Additional Hour + Additional 80 Servings',
        price: '$200'
    },
    {
        name: 'Additional Hour (No Extra Frośe Servings) ',
        price: '$75'
    },
    {
        name: 'Additional Wine, Beer, & Bubbly Bartending',
        price: '$50/hour'
    },
    {
        name: 'White Vintage Standing Cooler Rental ',
        price: '$50'
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
        name: 'Custom Stir Sticks ',
        price: 'Price Varies'
    },
    {
        name: 'Logo Stickers for Cups',
        price: 'Price Varies'
    },
]

const cocktails = [
    'FROSE',
    'MUDSLIDE',
    'MARGARITA',
    'RUM & COKE',
    'JACK & COKE',
    'OLD FASHION',
    'MOSCOW MULE',
    'PEACH BELLINI',
    'APEROL SPRITZ',
    'FROZEN APPLE CIDER',
    'BLACKBERRY PEACH SANGRIA',
]

const mocktails = [
    'FROSE',
    'COCA COLA',
    'DREAMSCILE',
    'BLUE RASPBERRY',
    'FROZEN APPLE CIDER',
    'STRAWBERRY LEMONADE',
    'BLACKBERRY PEACH SANGRIA',
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
        question: 'Are you licensed to serve alcohol, or do we need to provide all alcoholic beverages separately?',
        answer: "We do not have a license to serve alcohol. If you'd like alcoholic beverages at your event, you will need to provide them separately.",
        link: ""
    },
    {
        question: 'What are the serving hours for the frozen drinks at our wedding or bridal shower?',
        answer: "The serving hours can be customized to your event's schedule. We will work with you to determine the most suitable hours for serving frozen drinks.",
        link: ""
    },
    {
        question: 'What payment methods do you accept for bookings?',
        answer: " We accept various payment methods, including credit/debit cards and bank transfers. Please contact us for specific details on how to make a booking payment.",
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
        answer: "Our cart setup typically requires access to a standard power outlet. As for space, we will need an area that allows for the cart setup and easy access for our staff to serve your guests.",
        link: ""
    },
    {
        question: 'How long does it take to set up and dismantle the cart at the venue?',
        answer: "The setup and dismantling times can vary depending on the specific event and location. Generally, it takes approximately [insert estimated time] to set up and [insert estimated time] to dismantle the cart.",
        link: ""
    },

    {
        question: 'How far in advance should we book your services for our wedding or bridal shower?',
        answer: "We recommend booking our services as early as possible to secure your date. Typically, we advise booking at least 3 months in advance to ensure availability.",
        link: ""
    },
    {
        question: 'How many frozen drink machines can you provide for our event?',
        answer: "We can provide multiple frozen drink machines to meet the needs of your event. The exact number will depend on the size of your event and your preferences. We'll work with you to determine the right quantity.",
        link: ""
    },
    {
        question: 'Do you provide cups and straws, or should we have them ready for our event?',
        answer: "We can provide cups and straws for your event. Just let us know your expected guest count, and we'll ensure we have an adequate supply of these essentials.",
        link: ""
    },
    {
        question: 'How many drink options can we select for our event, and can we taste them beforehand?',
        answer: "You can select a variety of drink options for your event. We can arrange a tasting session in advance so you can sample the flavors and make your choices. Please contact us to arrange a tasting.",
        link: ""
    },
]

export { packages, addOns, cocktails, mocktails, puree, questions }