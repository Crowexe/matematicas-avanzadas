import React from 'react';

export const Me = () => {
	return (
		<div className="card">
			<figure className="md:flex max-w-2xl bg-gray-300 bg-center bg-opacity-70 m-5 mt-20 align-center md:rounded-xl p-8 md:p-0">
				<img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://i.imgur.com/yjasrrc.jpg" alt="me" width="384" height="512"/>
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
		</div>
	)
}

export default Me;

