import React from 'react';
import iconArrow from '../images/arrow.png';

const WorkSection = ({ number, title, description, tag }) => {
	const splitTag = tag.split(" ");

	return (
		<div className='work-left-component'>
			<h2 className='work-number'>({number}) {title}</h2>
			<p className='project-description'>{description}</p>
			<div className="button-container">
				<a className='project-button'><img src={iconArrow} alt="Go to project" />Visit website</a>
				<a className='project-button'><img src={iconArrow} alt="Github" />Github</a>
			</div>
			<div className='tag'>
				{
					splitTag.map((item) =>
						<p key={item}>{item}</p>)
				}
			</div>
		</div>
	);
};

export default WorkSection;