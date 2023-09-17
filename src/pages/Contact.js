import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { cocktails, mocktails, puree } from '../data';
import emailjs from 'emailjs-com';

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
    const [selectedCocktails, setSelectedCocktails] = useState([]);
    const [selectedMocktails, setSelectedMocktails] = useState([]);
    const [selectedPuree, setSelectedPuree] = useState('');

    const handleCocktailSelect = (event) => {
        const selectedCocktail = event.target.value;
        if (selectedCocktails.includes(selectedCocktail)) {
            const updatedSelection = selectedCocktails.filter((item) => item !== selectedCocktail);
            setSelectedCocktails(updatedSelection);
        } else if (selectedCocktails.length + selectedMocktails.length < 4) {
            setSelectedCocktails([...selectedCocktails, selectedCocktail]);
        }
    };

    const handleMocktailSelect = (event) => {
        const selectedMocktail = event.target.value;
        if (selectedMocktails.includes(selectedMocktail)) {
            const updatedSelection = selectedMocktails.filter((item) => item !== selectedMocktail);
            setSelectedMocktails(updatedSelection);
        } else if (selectedCocktails.length + selectedMocktails.length < 4) {
            setSelectedMocktails([...selectedMocktails, selectedMocktail]);
        }
    };

    const handlePureeSelect = (event) => {
        const selected = event.target.value;
        setSelectedPuree(selected);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            fullName: fullName,
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
            selectedPuree: selectedPuree,
        };

        // emailjs.send(
        //     'service_oouc2ct', 
        //     'template_eidtmra',  
        //     data,
        //     ''
        // )
        //     .then((response) => {
        //         console.log('Email sent successfully:', response);
        //         // Optionally, reset the form fields or show a success message
        //     })
        //     .catch((error) => {
        //         console.error('Email send failed:', error);
        //         // Handle the error or show an error message
        //     });
        console.log(process.env, data)
    };

    return (
        <div id="contactPage">
            <div id="contactWelcomeSection">
                <div id="contactWelcomeMsgContainer">
                    <p className='title'>Contact Us!</p>
                    <p className='body'>Thank you for your intrest please fill out the contact sheet below!</p>
                </div>
                <div id='contactWelcomeImgContainer'>
                    <div id='contactWelcomeaccent'></div>
                    <div id='contactWelcomeImg'></div>
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
                                            type="text"
                                            name="fullName"
                                            id="fullName"
                                            placeholder="Full Name"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>{/* email */}
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>{/* phonenumber */}
                                    <FormGroup>
                                        <Label for="phoneNumber">Phone Number</Label>
                                        <Input
                                            type="tel"
                                            name="phoneNumber"
                                            id="phoneNumber"
                                            placeholder="Phone Number"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>{/* Eventdate */}
                                    <FormGroup>
                                        <Label for="dateOfEvent">Date of Event</Label>
                                        <Input
                                            type="date"
                                            name="dateOfEvent"
                                            id="dateOfEvent"
                                            placeholder="Date of Event"
                                            value={dateOfEvent}
                                            onChange={(e) => setDateOfEvent(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>{/* typeofevent */}
                                    <FormGroup>
                                        <Label for="eventType">Type of Event</Label>
                                        <Input
                                            type="text"
                                            name="eventType"
                                            id="eventType"
                                            placeholder="Type of Event"
                                            value={eventType}
                                            onChange={(e) => setEventType(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>{/* venuename */}
                                    <FormGroup>
                                        <Label for="venueName">Venue Name</Label>
                                        <Input
                                            type="text"
                                            name="venueName"
                                            id="venueName"
                                            placeholder="Venue Name"
                                            value={venueName}
                                            onChange={(e) => setVenueName(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>{/* eventstart */}
                                    <FormGroup>
                                        <Label for="eventStart">Event Start</Label>
                                        <Input
                                            type="time"
                                            name="eventStart"
                                            id="eventStart"
                                            placeholder="Event Start"
                                            value={eventStart}
                                            onChange={(e) => setEventStart(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>{/* eventend */}
                                    <FormGroup>
                                        <Label for="eventEnd">Event End</Label>
                                        <Input
                                            type="time"
                                            name="eventEnd"
                                            id="eventEnd"
                                            placeholder="Event End"
                                            value={eventEnd}
                                            onChange={(e) => setEventEnd(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>{/* numberofguests */}
                                    <FormGroup>
                                        <Label for="numOfGuests">Number of Guests</Label>
                                        <Input
                                            type="number"
                                            name="numOfGuests"
                                            id="numOfGuests"
                                            placeholder="Number of Guests"
                                            value={numOfGuests}
                                            onChange={(e) => setNumOfGuests(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Col>{/* packages */}
                                        <FormGroup>
                                            <Label for="package">Packages</Label>
                                            <div>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input
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
                                    <Col >{/* tellusmore */}
                                        <FormGroup>
                                            <Label for="moreInfo">Additional Comments</Label>
                                            <Input
                                                type="textarea"
                                                name="moreInfo"
                                                id="moreInfo"
                                                placeholder="Tell Us More"
                                                value={moreInfo}
                                                onChange={(e) => setMoreInfo(e.target.value)}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col >{/* hearaboutus */}
                                        <FormGroup>
                                            <Label for="howDidYouHear">How Did You Hear About Us</Label>
                                            <Input
                                                type="text"
                                                name="howDidYouHear"
                                                id="howDidYouHear"
                                                placeholder="How Did You Hear About Us"
                                                value={howDidYouHear}
                                                onChange={(e) => setHowDidYouHear(e.target.value)}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Col>
                                <Col md={6}>
                                    <Row>
                                        <Col md={6}>{/* coctails */}
                                            <FormGroup>
                                                <Label for="cocktails">Cocktails</Label>
                                                {cocktails.map((cocktail) => (
                                                    <FormGroup check key={cocktail}>
                                                        <Label check>
                                                            <Input
                                                                type="checkbox"
                                                                value={cocktail}
                                                                checked={selectedCocktails.includes(cocktail)}
                                                                onChange={handleCocktailSelect}
                                                            />
                                                            {cocktail}
                                                        </Label>
                                                    </FormGroup>
                                                ))}
                                            </FormGroup>

                                        </Col>
                                        <Col md={6}>{/* puree */}{/* macktails */}
                                            <FormGroup>
                                                <Label for="Mocktails">Mocktails</Label>
                                                {mocktails.map((mocktail) => (
                                                    <FormGroup check key={mocktail}>
                                                        <Label check>
                                                            <Input
                                                                type="checkbox"
                                                                value={mocktail}
                                                                checked={selectedMocktails.includes(mocktail)}
                                                                onChange={handleMocktailSelect}
                                                            />
                                                            {mocktail}
                                                        </Label>
                                                    </FormGroup>
                                                ))}
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="puree">Puree</Label>
                                                {puree.map((p) => (
                                                    <FormGroup check key={p}>
                                                        <Label check>
                                                            <Input
                                                                type="checkbox"
                                                                name="puree"
                                                                value={p}
                                                                checked={selectedPuree === p}
                                                                onChange={handlePureeSelect}
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
                            <Button color='light' size='lg' type='submit'>Submit</Button>
                        </Form>
                    </Container>
                </div>
            </div>
        </div >
    );
}

export default Contact;