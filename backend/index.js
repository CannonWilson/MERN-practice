const express = require('express')
const app = express()
const port = 8000
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const cors = require('cors')
app.use(cors())

const {MongoClient} = require('mongodb')
const url = "mongodb+srv:// . . . "
const client = new MongoClient(url)

app.post('/api', (req, res) => {
	
	const data = req.body
	data['date'] = new Date()
	
	async function insertToDb() {
		try {
			await client.connect()
			const collection = client.db('test_db').collection('IPs')
			await collection.insertOne(data)
			await client.close
			res.sendStatus(200)
		}
		catch(err) {
			console.log(err)
			res.sendStatus(400)
		}
	}
	insertToDb()
})


app.listen(port)
