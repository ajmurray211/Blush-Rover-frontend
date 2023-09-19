import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { cocktails, mocktails, puree, addOns } from '../data';
import emailjs from 'emailjs-com';
import drink3 from '../assets/drink3.jpeg'

const Contact = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfEvent, setDateOfEvent] = useState('');
    const [eventType, setEventType] = useState('');
    const [venueName, setVenueName] = useState('');
    const [eventStart, setEventStart] = useState('');
    const [eventEnd, setEventEnd] = useState('');
    const [numOfGuests, setNumOfGuests] = useState('');
    const [moreInfo, setMoreInfo] = useState('');
    const [howDidYouHear, setHowDidYouHear] = useState('');
    const [selectedPackage, setSelectedPackage] = useState('');
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const [addOnArray, setaddOnArray] = useState([]);
    const [selectedCocktails, setSelectedCocktails] = useState([]);
    const [selectedMocktails, setSelectedMocktails] = useState([]);
    const [selectedPurees, setSelectedPselectedPurees] = useState([]);
    const [success, setSuccess] = useState(false)
    const [fail, setFail] = useState(false)
    const [formErrors, setFormErrors] = useState({});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const publicKey = process.env.REACT_APP_PUBLIC_KEY

    useEffect(() => {
        const addOnArray = addOns.map((addOn) => { return addOn.name })
        setaddOnArray(addOnArray)
    }, [])

    const handleCocktailSelect = (event) => {
        const selectedCocktail = event.target.value;
        if (selectedCocktails.includes(selectedCocktail)) {
            const updatedSelection = selectedCocktails.filter((item) => item !== selectedCocktail);
            setSelectedCocktails(updatedSelection);
        } else if (selectedCocktails.length + selectedMocktails.length < 2) {
            setSelectedCocktails([...selectedCocktails, selectedCocktail]);
        }
    };

    const handleMocktailSelect = (event) => {
        const selectedMocktail = event.target.value;
        if (selectedMocktails.includes(selectedMocktail)) {
            const updatedSelection = selectedMocktails.filter((item) => item !== selectedMocktail);
            setSelectedMocktails(updatedSelection);
        } else if (selectedCocktails.length + selectedMocktails.length < 2) {
            setSelectedMocktails([...selectedMocktails, selectedMocktail]);
        }
    };

    const handlePureeSelect = (event) => {
        const selectedPuree = event.target.value;
        if (selectedPurees.includes(selectedPuree)) {
            const updatedSelection = selectedPurees.filter((item) => item !== selectedPuree);
            setSelectedPselectedPurees(updatedSelection);
        } else if (selectedPurees.length < 2) {
            setSelectedPselectedPurees([...selectedPurees, selectedPuree]);
        }
    };

    const handleAddonSelection = (e) => {
        const additionalItem = e.target.value;
        if (selectedAddOns.includes(additionalItem)) {
            const updatedSelections = selectedAddOns.filter(item => item !== additionalItem);
            setSelectedAddOns(updatedSelections);
        } else {
            setSelectedAddOns([...selectedAddOns, additionalItem]);
        }
    }

    const checkValue = (data) => {
        const errors = {};

        if (!fullName.trim()) { errors.fullName = 'Full Name required'; }
        if (!email.trim()) { errors.email = 'Email required'; }
        if (!phoneNumber.trim()) { errors.phoneNumber = 'Phone Number required'; }
        if (!dateOfEvent.trim()) { errors.dateOfEvent = 'Event date required'; }
        if (!eventType.trim()) { errors.eventType = 'Event type required'; }
        if (!venueName.trim()) { errors.venueName = 'Venu name required'; }
        if (!eventStart.trim()) { errors.eventStart = 'Start time required'; }
        if (!eventEnd.trim()) { errors.eventEnd = 'End time required'; }
        if (!numOfGuests.trim()) { errors.numOfGuests = 'Number of guests required'; }
        if (selectedPackage.length == 0) { errors.selectedPackage = 'Package selection required'; }
        if (selectedCocktails.length + selectedMocktails.length < 2) { errors.selectedCocktails = 'selectedCocktail required'; }
        if (selectedMocktails.length + selectedCocktails.length < 2) { errors.selectedMocktails = 'selectedMocktail required'; }
        if (selectedPurees.length < 2) { errors.selectedPurees = 'selectedPurees required'; }

        if (Object.keys(errors).length === 0) {
            setIsFormSubmitted(true);
            return (true)
        } else {
            setFormErrors(errors);
            return (false)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            fullName: fullName,
            email: email,
            phoneNumber: phoneNumber,
            dateOfEvent: dateOfEvent,
            eventType: eventType,
            venueName: venueName,
            eventStart: eventStart,
            eventEnd: eventEnd,
            numOfGuests: numOfGuests,
            moreInfo: moreInfo,
            howDidYouHear: howDidYouHear,
            selectedPackage: selectedPackage,
            selectedCocktails: selectedCocktails,
            selectedMocktails: selectedMocktails,
            selectedPuree: selectedPurees,
            selectedAddOns: selectedAddOns,
        };

        // console.log(checkValue(data))

        if (checkValue(data)) {
            emailjs.send(
                'service_oouc2ct',
                'template_eidtmra',
                data,
                publicKey
            )
                .then((response) => {
                    console.log('Email sent successfully:', response);
                    setSuccess(true)
                })
                .catch((error) => {
                    console.error('Email send failed:', error);
                    setFail(true)
                });
        }
    };

    return (
        <div id="contactPage">
            <Alert isOpen={success} color="success" className='emailAlert'>Your email has been sent!</Alert>
            <Alert isOpen={fail} color="danger" className='emailAlert'>Oh no there was a problem please try again!</Alert>

            <div id="contactWelcomeSection">
                <div id="contactWelcomeMsgContainer">
                    <p className='title'>Contact Us!</p>
                    <p className='body'>Thank you for your intrest please fill out the contact sheet below!</p>
                </div>
                <div id='contactWelcomeImgContainer'>
                    <div id='contactWelcomeaccent'></div>
                    <img id='contactWelcomeImg' src={drink3} />
                </div>
            </div>

            <div id="contactSection">
                <div id="accentDiv"></div>
                <div id="contactContainer" className='body'>
                    <Container>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6}> {/* fullname */}
                                    <FormGroup>
                                        <Label for="fullName">Full Name</Label>
                                        <Input
                                            invalid={formErrors.fullName}
                                            type="text"
                                            name="fullName"
                                            id="fullName"
                                            placeholder="Full Name"
                                            value={fullName}
                                            onChange={(e) => {
                                                setFullName(e.target.value)
                                                // checkValue()
                                            }}
                                        />
                                        <span className="text-danger">{formErrors.fullName}</span>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>{/* email */}
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            invalid={formErrors.email}
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                                // checkValue()
                                            }}
                                        />
                                        <span className="text-danger">{formErrors.email}</span>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>{/* phonenumber */}
                                    <FormGroup>
                                        <Label for="phoneNumber">Phone Number</Label>
                                        <Input
                                            invalid={formErrors.phoneNumber}
                                            type="tel"
                                            name="phoneNumber"
                                            id="phoneNumber"
                                            placeholder="Phone Number"
                                            value={phoneNumber}
                                            onChange={(e) => {
                                                setPhoneNumber(e.target.value)
                                                // checkValue()
                                            }}
                                        />
                                        <span className="text-danger">{formErrors.phoneNumber}</span>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>{/* Eventdate */}
                                    <FormGroup>
                                        <Label for="dateOfEvent">Date of Event</Label>
                                        <Input
                                            invalid={formErrors.dateOfEvent}
                                            type="date"
                                            name="dateOfEvent"
                                            id="dateOfEvent"
                                            placeholder="Date of Event"
                                            value={dateOfEvent}
                                            onChange={(e) => {
                                                setDateOfEvent(e.target.value)
                                                // checkValue()
                                            }}
                                        />
                                        <span className="text-danger">{formErrors.dateOfEvent}</span>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>{/* typeofevent */}
                                    <FormGroup>
                                        <Label for="eventType">Type of Event</Label>
                                        <Input
                                            invalid={formErrors.eventType}
                                            type="text"
                                            name="eventType"
                                            id="eventType"
                                            placeholder="Type of Event"
                                            value={eventType}
                                            onChange={(e) => {
                                                setEventType(e.target.value)
                                                // checkValue()
                                            }}
                                        />
                                        <span className="text-danger">{formErrors.eventType}</span>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>{/* venuename */}
                                    <FormGroup>
                                        <Label for="venueName">Venue Name</Label>
                                        <Input
                                            invalid={formErrors.venueName}
                                            type="text"
                                            name="venueName"
                                            id="venueName"
                                            placeholder="Venue Name"
                                            value={venueName}
                                            onChange={(e) => {
                                                setVenueName(e.target.value)
                                                // checkValue()
                                            }}
                                        />
                                        <span className="text-danger">{formErrors.venueName}</span>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>{/* eventstart */}
                                    <FormGroup>
                                        <Label for="eventStart">Event Start</Label>
                                        <Input
                                            invalid={formErrors.eventStart}
                                            type="time"
                                            name="eventStart"
                                            id="eventStart"
                                            placeholder="Event Start"
                                            value={eventStart}
                                            onChange={(e) => {
                                                setEventStart(e.target.value)
                                                // checkValue()
                                            }}
                                        />
                                        <span className="text-danger">{formErrors.eventStart}</span>
                                    </FormGroup>
                                </Col>
                                <Col md={3}>{/* eventend */}
                                    <FormGroup>
                                        <Label for="eventEnd">Event End</Label>
                                        <Input
                                            invalid={formErrors.eventEnd}
                                            type="time"
                                            name="eventEnd"
                                            id="eventEnd"
                                            placeholder="Event End"
                                            value={eventEnd}
                                            onChange={(e) => {
                                                setEventEnd(e.target.value)
                                                // checkValue()
                                            }}
                                        />
                                        <span className="text-danger">{formErrors.eventEnd}</span>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>{/* numberofguests */}
                                    <FormGroup>
                                        <Label for="numOfGuests">Number of Guests</Label>
                                        <Input
                                            invalid={formErrors.numOfGuests}
                                            type="number"
                                            name="numOfGuests"
                                            id="numOfGuests"
                                            placeholder="Number of Guests"
                                            value={numOfGuests}
                                            onChange={(e) => {
                                                setNumOfGuests(e.target.value)
                                                // checkValue()
                                            }}
                                        />
                                        <span className="text-danger">{formErrors.numOfGuests}</span>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Row>
                                        <Col>{/* packages */}
                                            <FormGroup>
                                                <Label for="package">Packages</Label>
                                                <div>
                                                    <span className="text-danger">{formErrors.selectedPackage}</span>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input
                                                                invalid={formErrors.selectedPackage}
                                                                type="checkbox"
                                                                name="package"
                                                                id="package1"
                                                                value="But First, Frose"
                                                                checked={selectedPackage === 'But First, Frose'}
                                                                onChange={() => setSelectedPackage('But First, Frose')}
                                                            />
                                                            But First, Frose
                                                        </Label>
                                                    </FormGroup>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input
                                                                invalid={formErrors.selectedPackage}
                                                                type="checkbox"
                                                                name="package"
                                                                id="package2"
                                                                value="Yes, Way Frose"
                                                                checked={selectedPackage === 'Yes, Way Frose'}
                                                                onChange={() => setSelectedPackage('Yes, Way Frose')}
                                                            />
                                                            Yes, Way Frose
                                                        </Label>
                                                    </FormGroup>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input
                                                                invalid={formErrors.selectedPackage}
                                                                type="checkbox"
                                                                name="package"
                                                                id="package3"
                                                                value="Frose All Day"
                                                                checked={selectedPackage === 'Frose All Day'}
                                                                onChange={() => setSelectedPackage('Frose All Day')}
                                                            />
                                                            Frose All Day
                                                        </Label>
                                                    </FormGroup>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>{/* add ons */}
                                            <FormGroup>
                                                <Label for="cocktails">Add Ons</Label>
                                                {addOnArray.map((addOn) => (
                                                    <FormGroup check key={addOn}>
                                                        <Label check>
                                                            <Input
                                                                invalid={formErrors.addOns}
                                                                type="checkbox"
                                                                value={addOn}
                                                                checked={selectedAddOns.includes(addOn)}
                                                                onChange={(e) => {
                                                                    handleAddonSelection(e)
                                                                    // checkValue()
                                                                }
                                                                }
                                                            />
                                                            {addOn}
                                                        </Label>
                                                    </FormGroup>
                                                ))}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6}>
                                    <Row>
                                        <Col md={6}>{/* coctails */}
                                            <span className="text-danger">{formErrors.selectedCocktails}</span>
                                            <FormGroup>
                                                <Label for="cocktails">Cocktails</Label>
                                                {cocktails.map((cocktail) => (
                                                    <FormGroup check key={cocktail}>
                                                        <Label check>
                                                            <Input
                                                                invalid={formErrors.selectedCocktails}
                                                                type="checkbox"
                                                                value={cocktail}
                                                                checked={selectedCocktails.includes(cocktail)}
                                                                onChange={(e) => {
                                                                    handleCocktailSelect(e)
                                                                    // checkValue()
                                                                }
                                                                }
                                                            />
                                                            {cocktail}
                                                        </Label>
                                                    </FormGroup>
                                                ))}
                                            </FormGroup>

                                        </Col>
                                        <Col md={6}>{/* puree */}{/* macktails */}
                                            <span className="text-danger">{formErrors.selectedMocktails}</span>
                                            <FormGroup>
                                                <Label for="Mocktails">Mocktails</Label>
                                                {mocktails.map((mocktail) => (
                                                    <FormGroup check key={mocktail}>
                                                        <Label check>
                                                            <Input
                                                                invalid={formErrors.selectedMocktails}
                                                                type="checkbox"
                                                                value={mocktail}
                                                                checked={selectedMocktails.includes(mocktail)}
                                                                onChange={(e) => {
                                                                    handleMocktailSelect(e)
                                                                    // checkValue()
                                                                }
                                                                }
                                                            />
                                                            {mocktail}
                                                        </Label>
                                                    </FormGroup>
                                                ))}
                                            </FormGroup>
                                            <span className="text-danger">{formErrors.selectedPurees}</span>

                                            <FormGroup>
                                                <Label for="puree">Puree</Label>
                                                {puree.map((p) => (
                                                    <FormGroup check key={p}>
                                                        <Label check>
                                                            <Input
                                                                invalid={formErrors.selectedPurees}
                                                                type="checkbox"
                                                                name="puree"
                                                                value={p}
                                                                checked={selectedPurees.includes(p)}
                                                                onChange={(e) => {
                                                                    handlePureeSelect(e)
                                                                    // checkValue()
                                                                }
                                                                }
                                                            />
                                                            {p}
                                                        </Label>
                                                    </FormGroup>
                                                ))}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} >{/* tellusmore */}
                                    <FormGroup>
                                        <Label for="moreInfo">Additional Comments</Label>
                                        <Input
                                            // invalid={formErrors.}
                                            type="textarea"
                                            name="moreInfo"
                                            id="moreInfo"
                                            placeholder="Tell Us More"
                                            value={moreInfo}
                                            onChange={(e) => setMoreInfo(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6} >{/* hearaboutus */}
                                    <FormGroup>
                                        <Label for="howDidYouHear">How Did You Hear About Us</Label>
                                        <Input
                                            // invalid={formErrors.}
                                            type="textarea"
                                            name="howDidYouHear"
                                            id="howDidYouHear"
                                            placeholder="How Did You Hear About Us"
                                            value={howDidYouHear}
                                            onChange={(e) => setHowDidYouHear(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button disabled={isFormSubmitted && success} color='light' size='lg' type='submit'>
                                {isFormSubmitted && success ? 'Submitted' : 'Submit'}
                            </Button>
                        </Form>
                    </Container>
                </div>
            </div>
        </div >
    );
}

export default Contact;