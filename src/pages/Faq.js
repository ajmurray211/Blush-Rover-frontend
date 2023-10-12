import { Button } from "reactstrap";
import { questions } from "../data";
import logo from '../assets/Blush-rover-logo.png'
import { Link } from "react-router-dom";

const Faq = () => {

    const mappedQuesstions = questions.map((item) => {
        return (
            <div className="questionContainer body">
                <p className="question">{item.question}</p>
                <div className="accentLine"></div>
                <p className="answer">{item.answer}</p>
            </div>
        )
    })

    return (
        <div id="faqPage">
            <div id="faqWelcome">
                <div className="accentLine"></div>
                <div className="title">Frequently asked questions</div>
                <div className="accentLine"></div>
            </div>

            <div id="questionsSection">
                {mappedQuesstions}
            </div>

            <div id="faqFooter">
                <img src={logo} id="faqLogo" />
                <Link to='/contact'>
                    <Button color="light">Contact us here!</Button>
                </Link>
            </div>
        </div>
    );
}

export default Faq;