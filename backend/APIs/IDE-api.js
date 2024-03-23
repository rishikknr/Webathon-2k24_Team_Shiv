const express = require("express"); 
const cors = require("cors"); 
const Axios = require("axios"); 
const IDEapp = express(); 


IDEapp.use(cors()); 
IDEapp.use(express.json()); 
IDEapp.post("/compile", async (req, res) => { 
	//getting the required data from the request 
	let code = req.body.code; 
	let language = req.body.language; 
	let input = req.body.input; 
	// console.log(code)
	// console.log(language)
	// console.log(input)

	if (language === "python") { 
		language = "python3"
	}else if (language === "C"){
		language = "C"
	}else if (language === "Java"){
		language = "java"
	}else if (language === "C++"){
		language = "C++"
	}

	const options = {
		method: 'POST',
		url: 'https://online-code-compiler.p.rapidapi.com/v1/',
		headers: {
		  'content-type': 'application/json',
		  'X-RapidAPI-Key': '363d07cf37msh4652054570bc332p1dc572jsnb85f132a010c',
		  'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
		},
		data: {
		  language: language,
		  version: 'latest',
		  code: code,
		  input: input
		}
	  };
	  
	  try {
		  const response = await Axios.request(options);
		//   console.log(response.data.output);
		  res.send(response.data);
	  } catch (error) {
		  console.error(error);
	  }
}) 

module.exports = IDEapp;



