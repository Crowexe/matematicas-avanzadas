import React from 'react';

export const Me = () => {
	return (
		<div className="card">
			<div className="card1 transition duration-500 ease-in-out hover:text-scale-50 transform hover:-translate-y-1 hover:scale-110">
				<img className="pfp" src="https://i.imgur.com/yjasrrc.jpg" alt="me" width="384" height="512"/>
				<div className="pt-6 md:p-8 text-center md:text-left space-y-4">
					<blockquote>
					<p className="text-lg font-semibold">
						Programas para la asignatura de matemáticas avanzadas para la ingenieria
					</p>
					</blockquote>
					<figcaption className="font-medium">
						<div class="text-lg text-cyan-600">
							Luis Fernando Venegas Avila
						</div>
						<div className="text-gray-600">
							2CV12 <br /> Profesor Darwin Gutiérrez Mejia
						</div>
					</figcaption>
				</div>
			</div>
		</div>
	)
}

export default Me;

