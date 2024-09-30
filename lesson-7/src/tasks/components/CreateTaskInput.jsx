import React, { useState } from 'react'

const CreateTaskInput = ({ onCreate }) => {
	const [value, setValue] = useState('')

	const handleChange = event => {
		setValue(event.target.value)
	}

	const handleTaskCreate = () => {
		onCreate(value)
		setValue('')
	}

	return (
		<div className='create-task'>
			<input
				type='text'
				value={value}
				onChange={handleChange}
				className='create-task__input'
			/>
			<button className='btn create-task__btn' onClick={handleTaskCreate}>
				Create
			</button>
		</div>
	)
}

export default CreateTaskInput
