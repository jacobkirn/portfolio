import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor"
import NavBar from './components/NavBar';
import Home from './Home';
import Portfolio from './Portfolio';
import StyleCo from './StyleCo';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<Router>
				<div id='d'>
					<AnimatedCursor
						innerSize={20} S
						outerSize={40}
						innerScale={1}
						outerScale={1.5}
						outerAlpha={0.2}
						showSystemCursor={false}
						hasBlendMode={true}
						innerStyle={{
							backgroundColor: '#f9f9f9',
							mixBlendMode: 'exclusion'
						}}
						outerStyle={{
							border: '4px solid #f9f9f9',
							mixBlendMode: 'exclusion'
						}}
						clickables={[
							'a',
							'input[type="text"]',
							'input[type="email"]',
							'input[type="number"]',
							'input[type="submit"]',
							'input[type="image"]',
							'label[for]',
							'select',
							'textarea',
							'button',
							'#folders',
							'.popup-header'
						]}
					/>
				</div>
				<NavBar />
				< Routes >
					<Route path="/portfolio/styleco" element={<StyleCo />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/" element={<Home />} />
				</Routes>
				<Footer />
			</Router>
		</div >
	);
}

export default App;
