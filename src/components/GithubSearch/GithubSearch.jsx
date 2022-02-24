import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import User from '../User/User'
import classes from './GithubSearch.module.css'

function GithubSearch() {
	const [users, setUsers] = useState([])
	const [errorMessage, setErrorMessage] = useState('')
	const [showUsers, setShowUsers] = useState(true)
	const [inputFocus, setInputFocus] = useState(false)

	const handleUsers = (receivedData) => {
		setUsers(receivedData)
	}

	const handleShowUsers = (showStatus) => {
		setShowUsers(showStatus)
	}

	const handleInputFocus = (focusStatus) => {
		setInputFocus(focusStatus)
	}

	const handleErrorMessage = (error) => {
		console.log(`error: `, error);
		setErrorMessage(error)
	}

	const isOpen = `${classes.isOpen}`//showUsers && inputFocus ? `${classes.isOpen}` : ''
	console.log(`inputFocus: `, inputFocus)
	console.log(`isOpen: `, isOpen)

	return (
		<main>
			<div className={classes.searchInput}>
				<SearchBar
					onDataReceived={handleUsers}
					onShowUsers={handleShowUsers}
					onInputFocus={handleInputFocus}
					onGetError={handleErrorMessage}
				/>

				<div className={`${classes.userRowsWrapper} ${isOpen}`}>
					{users && users.map((user) => <User key={user.id} user={user} />)}
				</div>
			</div>
		</main>
	)
}

export default GithubSearch
