import React from 'react';
import './CSS/AboutMe.css';
class AboutMe extends React.Component {
    render = () => {
        return (
            <div className="App">
                <div className="header">
                    <h1>
                        About Me
                    </h1>
                </div>
                <div className="split">
                    <div className="left">
                        <img className="aboutMeImage" src="https://i.imgur.com/bSTsjKF.jpg" alt="water"></img>
                    </div>
                    <div className="right">
                        <h1 id="underline">Learn about me!</h1>
                        <ul id="aboutList">
                            <li id="listItem">
                                Brian La   
                            </li>
                            <li id="listItem">
                                Born and raised in San Jose
                            </li>
                            <li id="listItem">
                                Attended the University of California, Santa Cruz and graduated with a Bachelor's in Computer Science
                            </li>
                            <li id="listItem">
                                Interested in learning more about product management
                            </li>
                            <li id="listItem">
                                Enjoys staying fit by lifting weights and playing tennis/volleyball
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe