import React from 'react';
import { Link } from 'react-router-dom';
import StyleCoHero from './images/deviceframes-2.png'

function StyleCo() {
	return <div>
		<div>
			<div className='styleco'>
				<div className='container'>
					<p><Link to="/" id="breadcrumb-item">Home</Link> / <Link to="/portfolio" id="breadcrumb-item">Portfolio</Link></p>
					<h1>Designing StyleCo's AR Fitting Room</h1>
					<p id="mb-20">🎓 Class Project &nbsp;&nbsp;&nbsp;⏳ 5 minute read</p>

					<img src={StyleCoHero} alt="A collection of images from the StyleCo prototype" width={"100%"} />
				</div>
			</div>
		</div>
	</div>;
}

export default StyleCo;