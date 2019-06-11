import React from 'react';
import useForm from './CustomHooks';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

const App = () => {

	const submit = () => {
  		var myWindow = window.open("", "NewWindow", "width=200,height=100");
  		myWindow.document.write("<p>"+ input.secretCode + "</p>");

	}	

	const {input, handleInputChange, handleSubmit} = useForm(submit);
	
	return (
		<form onSubmit={handleSubmit}>
			<div>
				 <InputLabel>Secret Code</InputLabel>
				 <Input
				 		type="text"
				 		name="secretCode"
				 		onChange={handleInputChange}
				 		value={input.secretCode}	
				 		aria-describedby="my-helper-text"
				 		required
				 />

				 <FormHelperText id="my-helper-text">Enter the secret code!</FormHelperText>
			</div>

		<Button color="primary" onClick="submit">Submit</Button>
		</form>
	)

	
}


export default App;