import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setcategories }) => {
	const [inputValue, setinputValue] = useState('');
	const handleInputChange = (e) => {
		const value = e.target.value;
		setinputValue(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim().length > 2) {
			setcategories((cat) => [inputValue, ...cat]);
			setinputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={inputValue} onChange={handleInputChange} />
		</form>
	);
};

AddCategory.propTypes = { setcategories: PropTypes.func.isRequired };
