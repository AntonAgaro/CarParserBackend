import express, {Request, Response} from 'express'
import {pool} from "./db/config";
import {router} from "./routes";
import errorHadlingMiddleware from "./middlewares/errorHadlingMiddleware";

pool.on('connect', () => {
    console.log('Connected to the database')
})


const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use('/api', router)
app.use(errorHadlingMiddleware)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')

})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})