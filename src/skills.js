import React from 'react';
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
                        <img class="skillsImage" src="https://i.imgur.com/3nh54tj.jpg" alt="sasePhoto"></img>
                    </div>
                    <div className="twoColumn">
                        <h1 id="title">Experience</h1>
                        <h2 id="subTitles">Professional</h2>
                        <ul>
                        <li>
                                <h3 id="leftnoSize">VeEx Inc</h3>
                                <ul id="leftnoSize">
                                    <li>
                                        <h4>Product Management/Marketing(February 2020 - Current)</h4>
                                    </li>
                                    <ul>
                                        <li>
                                        Maintain overall Roadmap or "vision" of product through their lifecycle. Currently maintaining five live products.
                                    </li>
                                        <li>
                                        Create product feature definitions and coordinate with engineering to make it happen.
                                    </li>
                                        <li>
                                        Provide testing for newly completely features to ensure smooth transition into live product.
                                    </li>
                                    <li>
                                        Sit in as support for technical problem solving during deployments or tackle said issues off the side
                                    </li>
                                    <li>
                                        Document existing and new features for the products
                                    </li>
                                    <li>
                                        Provide training to Sales/Support on use of said products
                                    </li>
                                    </ul>
                                </ul>
                            </li>
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
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills