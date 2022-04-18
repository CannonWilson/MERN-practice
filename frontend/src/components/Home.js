import {useState, useEffect} from 'react'

function Home() {
	
	const [resultMsg, setResultMsg] = useState('Waiting . . .')
	
	async function insertInfoToDB(data) {
		const options = {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(data),
		}
		try {
			await fetch('http://localhost:8000/api', options)
			setResultMsg('Success!')
		}
		catch(err) {
			setResultMsg('Server error.')
		}
	}
	
	useEffect(() => {
		async function fetchUserInfo() {
			try {
				const rawRes = await fetch('http://ip-api.com/json/')
				const json = await rawRes.json()
				insertInfoToDB(json)
			}
			catch(err) {
				console.log(err)
				setResultMsg('Something went wrong. Please try again.')
			}
		}
		fetchUserInfo()
	}, [])
	
	return (
		<div>
			<h1>Home page</h1>
			<p>{resultMsg}</p>
		</div>
	)
}

export default Home