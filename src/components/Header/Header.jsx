import React from 'react'
import classes from './Header.module.css'
import logo from '../../images/octocat1.png'

function Header() {
	return (
		<header className={classes.AppHeader}>
			<a href='https://www.github.com/' target='_blank' rel='noreferrer' title='Visit Github'>
				<img src={logo} alt='github' />
			</a>
			<h1>Github Profile Finder</h1>
		</header>
	)
}

export default Header
