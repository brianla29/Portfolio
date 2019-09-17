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
                        <h1 id="underline">Skills</h1>
                    </div>
                    <div className="twoColumn">
                        <h1 id="underline">Experience</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills