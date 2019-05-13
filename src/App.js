import React from 'react';
import './App.css';
import waterdistrict from './waterdistrict.jpg'

class App extends React.Component {

  render = () => {

    return (
      <div className="App">
        <header className="App-header" style={{
          backgroundImage: 'url(' + waterdistrict + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}>
          <h1 className='black'>
            Brian La
        </h1>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/brian-la-392150133/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect with me!
        </a>
        </header>
        <div className="tabs">
          <h1>
            About me
        </h1>
          <h1>
            What I bring to the table
        </h1>
          <h1>
            Contact
        </h1>
        </div>
      </div>
    );
  }
}


export default App;
