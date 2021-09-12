import React from 'react';
import {Link} from 'react-router-dom';

export const Dropdown = ({isOpen, toggle}) => {
	return (
		<div 
			className={
				isOpen 
					? 'grid grid-rows-2 rounded-b-xl text-white text-center items-center bg-black bg-opacity-75' 
					: 'hidden'
				}
				onClick={toggle}
			>
			<Link className='p-4' to='/'>Home</Link>
			<Link className='p-4' to='/about'>Programas</Link>
		</div>
	)
}

export default Dropdown