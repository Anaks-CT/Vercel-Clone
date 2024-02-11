import express from 'express'
import cors from 'cors'
import simpleGit from 'simple-git'
import { generate } from './utils/generateId'

const app = express()
app.use(cors())
app.use(express.json())


app.post('/deploy', (req, res) => {
    const repoUrl = req.body.repoUrl
    const id = generate()
    // cloning the repository
    simpleGit().clone(repoUrl, `output/${id}`)
    // sending the id to FE
    res.json({id})
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})