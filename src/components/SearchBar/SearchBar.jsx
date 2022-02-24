import React, { useState, useEffect } from 'react'
import classes from './SearchBar.module.css'
import useDebounce from '../../hooks/useDebounce'

function SearchBar(props) {
	const { onDataReceived, onShowUsers, onInputFocus, onGetError } = props

	const [userInput, setUserInput] = useState('levan')
	const debouncedInput = useDebounce(userInput, 500)

	const userInputHandler = (e) => {
		setUserInput(e.target.value)
	}

	//typeahead - uncomment when styling is done also add error handling
	useEffect(() => {
		if (debouncedInput) {
			onShowUsers(true)
			fetch(`https://api.githubcom/search/users?=levan`)
				.then((response) => {
					return response.json()
				})
				.then((data) => {
					onDataReceived(data.items)
				})
				.catch((error) => {
					console.log(error.message)
					onGetError(error.message)
				})
		} else {
			onShowUsers(false)
			onDataReceived([])
		}
	}, [])

	return (
		<input
			className={classes.inputField}
			type='text'
			label='Find Users'
			placeholder='Search for a user'
			onChange={userInputHandler}
			onFocus={() => onInputFocus(true)}
			onBlur={() => setTimeout(onInputFocus(false), 100)}
			value={userInput}
		/>
	)
}

export default SearchBar
