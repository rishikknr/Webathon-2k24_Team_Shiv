import React from 'react'; 
import Select from 'react-select'; 
import './IDEnavbar.css'; 

const IDEnavbar = ({ userLang, setUserLang, userTheme, 
	setUserTheme, fontSize, setFontSize }) => { 
	const languages = [ 
		{ value: "C", label: "C" }, 
		{ value: "C++", label: "C++" }, 
		{ value: "python", label: "Python" }, 
		{ value: "java", label: "Java" },
		{ value: "php", label: "PHP" }, 
		{ value: "r", label: "R" },
		{ value: "sql", label: "SQL" },   
		{ value: "rust", label: "RUST" }, 
	]; 
	const themes = [ 
		{ value: "vs-dark", label: "Dark" }, 
		{ value: "light", label: "Light" }, 
	] 
	return ( 
		<div className="navbar"> 
			<h1>DevCampus IDE</h1> 
			<Select options={languages} value={userLang} 
				onChange={(e) => setUserLang(e.value)} 
				placeholder={userLang} /> 
			<Select options={themes} value={userTheme} 
				onChange={(e) => setUserTheme(e.value)} 
				placeholder={userTheme} />
				<br></br>
			<div className='navbar-in'>
			<label>Font Size</label> 
			<input type="range" min="14" max="30"
				value={fontSize} step="2"
				onChange={(e) => { setFontSize(e.target.value) }} /> 
			</div>
		</div> 
	) 
} 

export default IDEnavbar
