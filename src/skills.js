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
                                <h3>Santa Clara Valley Water District</h3>
                                <h4>Information Technology Intern(Networks & Infrastructure)</h4>
                            </li>
                        </ul>
                        <h2 id="subTitles">Projects</h2>
                        <ul>
                            <li>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills