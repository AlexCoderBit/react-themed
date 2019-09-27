import React from 'react';
import logo from './logo.svg';
import './styles/index.scss';
import './themes/dark.scss';
import './themes/light.scss';



class App extends React.Component {
   toggleTheme = ( ) => {
   const container = document.getElementById('theme-wrapper');
   
   if(container.classList.contains('theme-dark')) container.className='theme-light'
   else container.className='theme-dark'
  }

  render(){
    return (
      <container id="theme-wrapper" className="theme-dark">
        <div className="app">
          <header className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="app-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>

            <button onClick={() => this.toggleTheme()}>
            Change Theme Mode 
          </button>
          </header>
          
        </div>
      </container>
    );
  }
}

export default App;
