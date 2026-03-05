import express from "express"
import rootRouter from "./src/routes/root.router.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(express.json())

app.use("/api", rootRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`)
})
