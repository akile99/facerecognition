import React from 'react';
import './ImageLinkForm.css';
import ReactTooltip from 'react-tooltip';
import { FaRegQuestionCircle } from "react-icons/fa";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3'>
			{'This magic brain will detect faces in your pictures, give it a try  '}
			<a data-tip= 'Past a jpg url ie. https://st.depositphotos.com/1008939/1880/i/600/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg'><FaRegQuestionCircle /></a>
			<ReactTooltip className='extraClass' delayHide={1000} effect='solid'/>
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
				<input className= 'f4 pa2 w-70 center' type= 'tex' onChange={onInputChange}/>
				<button 
				className= 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
				onClick= {onButtonSubmit}
				>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;