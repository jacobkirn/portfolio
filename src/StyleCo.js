import React from 'react';
import { Link } from 'react-router-dom';
import Figma from './images/figma.png';
import Miro from './images/miro.png';
import GPT from './images/gpt.jpg';
import Noun from './images/noun.png';
import StyleCoHero from './images/deviceframes-2.png';
import Branding from './images/branding.png';
import Entry from './images/entry.png';
import Measurements from './images/measurements.png';

function StyleCo() {
	return <div>
		<div>
			<div className='styleco'>
				<div className='container'>
					<p><Link to="/" id="breadcrumb-item">Home</Link> / <Link to="/portfolio" id="breadcrumb-item">Portfolio</Link></p>
					<h1>Designing StyleCo's AR Fitting Room</h1>
					<p id="mb-20">🎓 Class Project &nbsp;&nbsp;&nbsp;⏳ 5 minute read</p>

					<img src={StyleCoHero} alt="A collection of images from the StyleCo prototype" width={"100%"} />

					{/* Introduction */}
					<div className='row'>
						<div className='col-4'>
							<h2>Introduction</h2>
							<button>Skip to Prototype</button>
						</div>
						<div className='col-8'>
							<div className='wrapper'>
								<h3>Project Overview</h3>
								<p>For this project, I explored the development of an augmented reality (AR) fitting room for StyleCo, a made-up fashion brand making the switch from traditional retail strategies to a digital-first approach.</p>
								<p>My contibutions included user research, prototyping, and copywriting. I created the high-fidelity prototype and all related content following an initial team-based research effort.</p>
							</div>

							<div className='wrapper'>
								<h3>Objective</h3>
								<p>To enhance StyleCo’s online shopping experience for mobile users through an innovative AR fitting room, addressing their recent decline in physical store sales and capitalizing on the growing trend of experiential online shopping.</p>
							</div>

							<div className='wrapper'>
								<h3>Design Toolkit</h3>
								<div className='row' id="toolkit-row">
									<img src={Figma} className="toolkit-img"/>
									<img src={Miro} className="toolkit-img"/>
									<img src={GPT} className="toolkit-img"/>
									<img src={Noun} className="toolkit-img"/>
								</div>
							</div>
						</div>
					</div>

					{/* Research */}
					<div className='row'>
						<div className='col-4'>
							<h2>Research</h2>
						</div>
						<div className='col-8'>
							<div className='wrapper'>
								<h3>Client Background</h3>
								<p>StyleCo is an established international fashion company with a portfolio of well-known clothing brands. Historically, the company has relied on physical stores for most of its sales. However, foot traffic has been steadily declining, and it is only due to a 40% growth in online sales that earnings have held steady.</p>
								<p>The company is interested in expanding its online shopping experience with an AR fitting room, expanding sales from users on mobile devices, reducing the need for returns, and catering to fashion-forward customers looking for a unique and personalized shopping experience.</p>
							</div>
							<div className='wrapper'>
								<h3>Methods</h3>
								<p>Our team’s approach involved <span className='strong'>in-depth interviews</span> with target users. We sought to understand their in-person fitting room experiences and current use of technology in shopping.</p>
								<p>Additional <span className='strong'>literature review</span> was conducted to examine current trends and best practices in AR technology, particularly related to the fashion retail sector.</p>
							</div>
							<div className='wrapper'>
								<h3>Thematic Analysis</h3>
								<p>Several key themes were identified:</p>
								<ul>
									<li>
										<p className="li-heading">Ambiance and Control</p>
										<p>Users showed a clear preference for modern, high-tech fitting rooms with customizable settings like light and music.</p>
									</li>
									<li>
										<p className="li-heading">Feedback Loop</p>
										<p>Users revealed the significant impact of social validation from friends and family on their purchasing decisions.</p>
									</li>
									<li>
										<p className="li-heading">Ease of Use</p>
										<p>Users emphasized the necessity for clear and intuitive interactions, especially with new technologies.</p>
									</li>
									<li>
										<p className="li-heading">Purchase Drivers</p>
										<p>While peer feedback was important, users chose sizing, aesthetics, and value for money as the ultimate factors in their purchasing decisions.</p>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Design */}
					<div className='row'>
						<div className='col-4'>
							<h2>Design</h2>
						</div>
						<div className='col-8'>
							<div className='wrapper'>
								<h3>Design Approach</h3>
								<p>User insights were the base of my design approach, ensuring that each feature addressed specific user needs and preferences.</p>
							</div>
							<div className='wrapper'>
								<h3>Branding and UI</h3>
								<p>StyleCo’s branding and UI were crafted to mirror the Gen-Z influenced aesthetic dominating fashion and design web spaces, characterized by an eclectic, high-contrast color palette with pinks, yellows, blues, and purples. This design aimed to engage a young, style-concious audience with its vibrant and distinctive personality.</p>
								<img src={Branding} className='product-images'/>
							</div>
							<div className='wrapper'>
								<h3>Copywriting</h3>
								<p>I wrote all of the copy within the project, enhancing the user experience through clear and engaging language.</p>
							</div>
							<div className='wrapper'>
								<h3>Prototype</h3>
								<p>The prototype was designed to smoothly onboard new users into the AR fitting room, focusing on intuitive guidance and ease of use to quickly familiarize them with the virtual try-on features.</p>
								<p>In general, the prototype can be divided into four main sections:</p>
								<ol>
									<li>
										<p className="li-heading">Product Page ➞ Entry Point</p>
										<img src={Entry} className='product-images'/>
										<p>Purpose: To capture user interest and differentiate the experience from traditional online shopping. The interactive prompt was designed to draw users into exploring the feature, boosting their engagement and time spent on the platform.</p>
										<p>Theme: Ease of Use</p>
									</li>
									<li>
										<p className="li-heading">Measurements ➞ Selections ➞ Camera Setup</p>
										<img src={Measurements} className='product-images'/>
										<p>Purpose: To provide a unique and accurate virtual fitting experience. Users input their measurements for tailored fitting, receive algorithm-driven clothing recommendations based on their preferences, and follow user-friendly instructions for camera setup, ensuring the AR fitting experience is realistic and seamless.</p>
										<p>Themes: Ease of Use, Purchase Drivers</p>
									</li>
									<li>
										<p className="li-heading">UI Tutorial</p>
										<img />
										<p>Purpose: To familiarize users with the interactive elements of the virtual fitting room. This brief tutorial is critical for promoting user adoption and encourages sustained use of the virtual fitting room.</p>
										<p>Theme: Ease of Use</p>
									</li>
									<li>
										<p className="li-heading">Exploring the Interface</p>
										<img />
										<p>Purpose: To simluate a user exploring the AR tool post-onboarding. Users can manage their selections, choose music from a curated playlist, and share selections with friends and family. The thorough design ensures that users of all skill levels can easily engage with and benefit from the virtual fitting room.</p>
										<p>Themes: Ease of Use, Ambiance and Control, Feedback Loop</p>
									</li>
								</ol>
							</div>
						</div>
					</div>

					{/* Prototype */}

					{/* Conclusion */}
					<div className='row'>
						<div className='col-4'>
							<h2>Conclusion</h2>
						</div>
						<div className='col-8'>
							<p>This project was a comprehensive exercise in applying UX principles to a cutting-edge technology solution. It highlighted the importance of user-centered design in creating engaging and effective digital products. As a class project, it provided a platform for practical application of theoretical knowledge and set a foundation for future exploration in the field of AR and retail innovation.</p>
							<p>This project further emphasized the importance of a multidisciplinary approach in UX design. The research phase, involving customer interviews and thematic analysis, was crucial in identifying key user preferences and pain points. This knowledge directly informed the design of the prototype, ensuring that every element, from the UI to the copywriting, was tailored to meet user needs and preferences.</p>
							<p>I leave this project with three main takeaways:</p>
							<ol>
								<li>My practical understanding of user-centered design principles has greatly improved.</li>
								<li>As a designer, grapsing the nuances of generative research increases versatility and leads to more impactful designs.</li>
								<li>The satisfaction of seeing abstract concepts and research translate into a tangible product was immensely gratifying. This project reaffirmed my passion for design and fueled my enthusiasm for future work involving emerging tech.</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>;
}

export default StyleCo;