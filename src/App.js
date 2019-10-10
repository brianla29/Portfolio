import React from 'react';
import './CSS/App.css';
import homeBackground from './homeBackground.jpg';
import {Link, NavLink} from 'react-router-dom';

class App extends React.Component {

  render = () => {

    return (
      <div className="App">
        <div className="tabs">
          <h1>
            <NavLink className='link' to='/aboutme'>About me</NavLink>
        </h1>
          <h1>
            <NavLink className='link' to='/skills'>What I bring to the table</NavLink>
        </h1>
          <h2>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/brian-la-392150133/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect with me!
        </a>
        </h2>
        </div>
        <header className="App-header" style={{
          backgroundImage: 'url(' + homeBackground + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'auto',
        }}>
          <h1 className='black'>
            Brian La
        </h1>
        </header>
      </div>
    );
  }
}


export default App;
