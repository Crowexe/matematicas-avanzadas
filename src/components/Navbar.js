import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({toggle}) => {
	return (
		<nav className="nav-text">
			<Link to='/' className='pl-8'>
				Matemáticas Avanzadas
			</Link>
			<div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
				<svg 
					class="w-6 h-6" fill="none"
					stroke="currentColor" 
					viewBox="0 0 24 24" 
					xmlns="http://www.w3.org/2000/svg"
					>
						<path 
							stroke-linecap="round"
							stroke-linejoin="round" 
							stroke-width={2} 
							d="M4 6h16M4 12h16M4 18h16"
						/>
				</svg>
			</div>
			<div className="pr-8 md:block hidden">
				<Link className='p-4' to='/'><i class="fas fa-home"/></Link>
				<Link className='p-4' to='/programas'><i class="fas fa-calculator"/></Link>
			</div>
		</nav>
	);
};

export default Navbar;
