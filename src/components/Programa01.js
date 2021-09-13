import React from 'react';

const Programa01 = (n1, raiz) => {

	/*document.querySelector('#calcular').addEventListener('click', () => {
		const n1 = document.querySelector('n1').value;
		const raiz = document.querySelector('raiz').value;

	})*/

	return (
		<div className="card transition duration-500 ease-in-out hover:text-scale-50 transform hover:-translate-y-1 hover:scale-100" >
			<div className="card1">
				<div className="pt-6 md:p-8 text-left space-y-4">
					<blockquote>
					<p className="text-xl font-semibold">
						Programa 01
					</p>
					</blockquote>
					<figcaption className="font-medium">
						<div class="text-md text-cyan-600">
						Calcula las raíces n-esimas de un número complejo, las ubica en una circunferencia y pinta de colores distintos las regiones en que se divide.  
						</div>
					</figcaption>
					<div>
						<div className="calculadora">
							<input 
								className="entrada"
								type="text" 
								id="raiz"
								placeholder="Exponente"
							/>
							<span className="font-bold text-2xl">√</span>
							<input 
								className="entrada"
								type="text" 
								id="n1"
								placeholder="Raíz"
							/>
							<button className="btn btn-" id="calcular"><i class="fas fa-equals bg-indigo-500 hover:bg-indigo-600 py-1.5 px-2 rounded-md"/></button>
       				 	</div> 
						<div className="resultado">

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Programa01;