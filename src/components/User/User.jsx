import React from 'react'
import classes from './User.module.css'

function User({ user }) {
	return (
		<a
			href={user.html_url}
			target='_blank'
			rel='noreferrer'
			className={classes.userRow}>
			<img className={classes.avatar} src={user.avatar_url} alt={user.login} />
			<p className={classes.userName}> {user.login} </p>
		</a>
	)
}

export default User
