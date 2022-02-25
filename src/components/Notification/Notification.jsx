import React from 'react'
import classes from './Notification.module.css'

function Notification(props) {
	const { message } = props
	return (
		<div className={classes.error}>
			<p>{message}</p>
		</div>
	)
}

export default Notification
