import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import classes from './App.module.css'
import GithubSearch from './components/GithubSearch/GithubSearch'

function App() {
	return (
		<div className={classes.App}>
				<Header />
			
			<section className={classes.githubSearch}>
				<GithubSearch />
			</section>
		</div>
	)
}

export default App
