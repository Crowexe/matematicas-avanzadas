import React from 'react';

export const Me = () => {
	return (
		<>
			<figure className="w-8/12 md:flex m-5 bg-gray-300 rounded-xl p-0 mt-24">
				<img className="flex justify-start w-50 h-50 w-48 h-auto rounded-l-lg mx-auto" src="https://i.imgur.com/yjasrrc.jpg" alt="me"/>
					<div className="pt-6 md:p-8 text-center md:text-left space-y-4">
						<blockquote>
						<p className="text-lg font-semibold">
							Programas para la asignatura de matamáticas avanzadas para la ingenieria
						</p>
						</blockquote>
						<figcaption className="font-medium">
							<div class="text-cyan-600">
								Luis Fernando Venegas Avila
							</div>
							<div className="text-gray-500">
								2CV12 Darwin Gutiérrez
							</div>
						</figcaption>
					</div>
			</figure>
		</>
	)
}

export default Me;

