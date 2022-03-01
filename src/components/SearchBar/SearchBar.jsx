import React, { useState, useEffect } from 'react'
import classes from './SearchBar.module.css'
import useDebounce from '../../hooks/useDebounce'

function SearchBar(props) {
	const { onDataReceived, onShowUsers, onInputFocus, onGetError } = props

	const [userInput, setUserInput] = useState('')

	// give userInput 'slight' delay, so we don't send requests while typing
	const debouncedInput = useDebounce(userInput, 500)

	const userInputHandler = (e) => {
		setUserInput(e.target.value)
	}

	// fetch data on keystroke, when input is 'delayed'
	useEffect(() => {
		if (debouncedInput) {
			onShowUsers(true)
			fetch(`https://api.github.com/search/users?q=${debouncedInput}`)
				.then((response) => {
					if (response.status === 200) {
						return response.json()
					} else {
						onGetError(`Error code: ${response.status}
						Can't fetch data`)
					}
				})
				.then((data) => {
					if (data.items.length === 0) {
						onGetError(`Could not find user '${debouncedInput}'`)
					} else {
						onGetError('')
						onDataReceived(data.items)
					}
				})
				.catch((error) => {
					console.log(error.StatusCode)
					onGetError(
						`Problem with fetching Data. Please check for internet connection or API Url`
					)
				})
		} else {
			onShowUsers(false)
			onDataReceived([])
		}
	}, [debouncedInput])

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
