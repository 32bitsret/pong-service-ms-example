const express = require('express')
const axios = require('axios')
const app = express()
const port = process.env.PORT || 8080
const IP = '0.0.0.0'

app.get('/', (req, res) => {
  console.log('Yayx!');
  res.send('Yay!')
})

app.get('/ping', (req, res) => {
  console.log('Ping received!')
  res.send('Ping received!')
})

app.get('/pingpong', async (req, res) => {
  try {
    // Make a request to the Pong service
    const pongResponse = await axios.get(`${process.env.PONG_SERVICE_FQDN}/pong`)
    
    // Respond with the result
    res.send(`Pong received! Pong service says: "${pongResponse.data}"`)
  } catch (error) {
    console.error(`Failed to ping Pong service: ${error}`);
    console.log(`Failed to ping Pong service. ${process.env.PONG_SERVICE_FQDN}`);
    res.status(500).send(`Failed to ping Pong service. ${process.env.PONG_SERVICE_FQDN}`);
  }
})


app.listen(port, IP, () => {
  console.log(`Ping service listening at http://${IP}:${port}`)
})