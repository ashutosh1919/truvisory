import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './theme';
import {GlobalStyles} from './global';
import Main from './components/Main.js';

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark');
    }
    else{
      setTheme('light');
    }
  }

  return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<>
				<GlobalStyles />
				
				{/* // Pass the toggle functionality to the button
				<button onClick={toggleTheme}>Toggle theme</button>
				<h1>It's a light theme!</h1>
				<footer></footer> */}
				<Main onToggle={toggleTheme} theme={theme} />
			</>
		</ThemeProvider>
		// <div className="App">
		//   <header className="App-header">
		//     <img src={logo} className="App-logo" alt="logo" />
		//     <p>
		//       Edit <code>src/App.js</code> and save to reload.
		//     </p>
		//     <a
		//       className="App-link"
		//       href="https://reactjs.org"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       Learn React
		//     </a>
		//   </header>
		// </div>
	);
}

export default App;
