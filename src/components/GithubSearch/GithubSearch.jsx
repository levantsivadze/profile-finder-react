import React, { useState } from 'react'
import Notification from '../Notification/Notification'
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
		setErrorMessage(error)
	}

	// give 'permission' to open a dropdown if input is under focus or is allowed to show users(this happens on keystrokes)
	const isOpen = showUsers && inputFocus ? `${classes.isOpen}` : ''

	return (
		<main className={classes.githubSearch}>
			<div className={classes.searchInput}>
				<SearchBar
					onDataReceived={handleUsers}
					onShowUsers={handleShowUsers}
					onInputFocus={handleInputFocus}
					onGetError={handleErrorMessage}
				/>
				{errorMessage && <Notification message={errorMessage} />}
				{!errorMessage && (
					<div className={`${classes.userRowsWrapper} ${isOpen}`}>
						{users && users.map((user) => <User key={user.id} user={user} />)}
					</div>
				)}
			</div>
		</main>
	)
}

export default GithubSearch
