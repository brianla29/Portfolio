import React from 'react'
import './CSS/skills.css';

class Skills extends React.Component {
    render = () => {
        return(
            <div className="App">
                <div className="header">
                    <h1>
                        What I bring to the table
                    </h1>
                </div>
                <div className="containerColumn">
                    <div className="twoColumn">
                        <h1 id="title">Skills</h1>
                        <h2 id="subTitles">Programming Languages</h2>
                        <ul>
                            <li id="left">
                                Java, C, Javascript, HTML, CSS, Powershell, MIPS Assembly
                            </li>
                        </ul>
                        <h2 id="subTitles">Technologies</h2>
                        <ul>
                            <li id="left">
                                React Native, Redux, React, Firebase, FireStore, Android Studio, VirtualBox, Npm
                            </li>
                        </ul>
                        <h2 id="subTitles">Classes Taken</h2>
                        <ul>
                            <li id="left">
                                Algorithms and Abstract Data Types, Introduction to Analysis of Algorithms, Computational Models(Theory of Computation),
                                Comparative Programming Languages, Computer Systems & Assembly Language, Data Structures, Mobile Applications(Android), Discrete Mathematics,
                                Computer Archictecture, Operating Systems, Introduction to Software Engineering, Probability Theory
                            </li>
                        </ul>
                        
                    </div>
                    <div className="twoColumn">
                        <h1 id="title">Experience</h1>
                        <h2 id="subTitles">Professional</h2>
                        <ul>
                            <li>
                                <h3 id="leftnoSize">Santa Clara Valley Water District</h3>
                                <ul id="leftnoSize">
                                    <li>
                                        <h4>Information Technology Intern(Networks & Infrastructure)</h4>
                                    </li>
                                    <ul>
                                        <li>
                                            Used Powershell to update clear update list of in-use servers by pinging to see if they are in use.
                                    </li>
                                        <li>
                                            Set up servers and virtual machines.
                                    </li>
                                        <li>
                                            Installed security cameras.
                                    </li>
                                    </ul>
                                </ul>
                            </li>
                            <li>
                                <h3 id="leftnoSize">Mac to School</h3>
                                <ul>
                                    <li>
                                        <h4 id="leftnoSize">Mac Refurbishment</h4>
                                    </li>
                                    <ul id="leftnoSize">
                                        <li>
                                            Cleaned/Refurbished Apple products(Macs, Ipads,  Monitors).
                                        </li>
                                        <li>
                                            Prepared shipment orders to consumers by prepackaging products, cutting down on preparation time.
                                        </li>
                                        <li>
                                            Maintained and resupplied equipment needed for refurbishing and shipment, ensuring no time was lost to gathering needed supplies.
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li>
                                <h2 id="subTitles">Projects</h2>
                                <ul>
                                    <li>
                                        <h3 id="leftnoSize">SYA-Mobile</h3>
                                        <ul id="leftnoSize">
                                            <li>
                                                Android and iOS application modeled after the Share Yourself Artist web application(https://www.shareyourselfartists.com) that allows for artist and
                                                business blog interaction
                                            </li>
                                            <li>
                                                Artist can submit artwork to businesses who can accept/deny the art piece
                                            </li>
                                            <li>
                                                Chat system to allow discussion between two parties
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 id="leftnoSize">SUBEASY</h3>
                                        <ul id="leftnoSize">
                                            <li>
                                                Web platform for easy and safe connections between tenants and potential sub leasers.
                                            </li>
                                            <li>
                                                UCSC email verification to make an account.
                                            </li>
                                            <li>
                                                House listing page to browse and post property
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 id="leftnoSize">Tipsy Trials</h3>
                                        <ul id="leftnoSize">
                                            <li>
                                                Android application to test if user is sober or not
                                            </li>
                                            <li>
                                                User plays a series of timed mini-games to get a score
                                            </li>
                                            <li>
                                                Score is compared against average sober score and user is told if they are sober or not
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills