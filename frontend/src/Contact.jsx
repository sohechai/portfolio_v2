import React, { useState } from 'react'
import './style/Contact.css'
import { useEffect } from 'react'
import Magnetic from './components/Magnetic'

function Contact() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const copyMail = (e) => {
		const email = 'sofia.hechaichi@gmail.com';
		navigator.clipboard.writeText(email);
	}

	useEffect(() => {
		function handleMouseMove(e) {
			const svg = document.querySelector('.svg');
			const svgRect = svg.getBoundingClientRect();
			const mouseX = e.clientX - svgRect.left;
			const mouseY = e.clientY - svgRect.top;

			const circleCenterX = svgRect.width / 2;
			const circleCenterY = svgRect.height / 2;
			const circleRadius = svgRect.width / 2 - 25;

			const angle = Math.atan2(mouseY - circleCenterY, mouseX - circleCenterX);
			const x = circleCenterX + (circleRadius * Math.cos(angle));
			const y = circleCenterY + (circleRadius * Math.sin(angle));

			setMousePosition({ x, y });
		}

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<section className="contact" >
			<div className="contact-container">
				<div className='text-container'>
					<a className='text' onClick={copyMail}>MAIL</a>
				</div>
				<div className='text-container'>
					<a href="https://www.linkedin.com/in/sofia-hechaichi/" target="_blank" className='text'>LINKEDIN</a>
					<div className="svg-container">
						<svg className="svg">
							<g id="round">
								<circle
									className="outer-circle"
									cx="50%"
									cy="50%"
									r="50"
									stroke="#E8EDDF"
									strokeWidth="2"
									fill="transparent"
								/>
								<circle
									className="inner-circle"
									cx={`${mousePosition.x}px`}
									cy={`${mousePosition.y}px`}
									r="14"
									fill="#E8EDDF"
								/>
							</g>
						</svg>
					</div>
					<a href="" target="_blank" className='text'>RESUME</a>
				</div>
				<div className='text-container'>
					<a href="https://github.com/sohechai" target="_blank" className='text'>GITHUB</a>
				</div>
				<div className="footer">
					<p>Sofia Hechaïchi © 2024</p>
				</div>
			</div>

		</section>
	)
}

export default Contact