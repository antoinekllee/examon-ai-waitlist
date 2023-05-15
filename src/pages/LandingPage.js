import React from 'react'; 
import { Link } from 'react-router-dom';

import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import Title from '../components/Title';
import classes from './LandingPage.module.css'

function LandingPage (props)
{
    const openForm = () => {
        window.open("https://forms.gle/E5qnq1aZUqZvcBzLA", "_blank");
    }

    const contact = () => {
        
    };

    return <div> 
        <div className={classes.mainContainer}>
            <Title />
            <p style={{fontSize: "26px"}}>Affordable, Immediate, Accurate.</p>
            <p>Examon AI is an innovative and powerful educational tool designed to help you excel in your IB exams. Using AI technology, Examon provides an unlimited bank of IB exam-style questions, mark schemes, model answers, and provides personalized feedback on your answers!</p>

            <br />
            <br />
            <div className={classes.buttons}>
                <button onClick={openForm}><FaIcons.FaUserPlus className={classes.buttonIcon} />Join the waitlist</button>
            </div>

            <button className={classes.moreInfoButton} onClick={contact}><AiIcons.AiOutlineMail className={classes.moreInfoIcon} /><br />Contact me at antoine@examon.ai</button>
        </div>
    </div> 
}

export default LandingPage; 