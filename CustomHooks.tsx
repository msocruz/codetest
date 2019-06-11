import React, {useState} from 'react';
import NewWindow from 'react-new-window';

const useForm = (callback) => {
	const [input, setInput] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		callback();
	}

	const handleInputChange = (e) => {
		e.persist();
		setInput(input => ({...input, [e.target.name]: e.target.value}));
	}

	return {
		handleSubmit,
		handleInputChange,
		input
	};
}

export default useForm;