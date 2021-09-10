import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Programas from './pages/Programas';

function App() {
const [isOpen, setIsOpen] = useState(false)
const toggle = () => {
	setIsOpen(!isOpen);
};

useEffect(() => {
	const hideMenu = () => {
		if(window.innerWidth > 768 && isOpen) {
			setIsOpen(false);
			console.log('I resized')
		}
	}
	window.addEventListener('resize', hideMenu)

	return () => {
		window.removeEventListener('resize', hideMenu)
	}
})

  return (
    <>
		<Navbar toggle={toggle}/>
		<Dropdown isOpen={isOpen} toggle={toggle}/>
		<Switch>
			<Route path="/" exact component={Inicio} />
			<Route path="/programas" component ={Programas} />
		</Switch>
    </>
  );
}

export default App;
