const express = require("express")
const app = express()

const PORT = process.env.PORT || 1234


app.get('/', (req,res)=>{
    console.log("hellow!!")
})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})