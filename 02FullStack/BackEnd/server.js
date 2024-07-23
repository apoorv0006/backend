import express from 'express'


const app = express();

// app.get('/',(req,res)=>{
//     res.send('server is ready')
// })

//get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes =[
        {
            id:1,
            title:'First joke',
            content:'This is first joke'
        },
        {
            id:2,
            title:'Second joke',
            content:'This is second joke'
        },
        {
            id:3,
            title:'Third joke',
            content:'This is third joke'
        },
        {
            id:4,
            title:'Fourth joke',
            content:'This is fourth joke'
        },
    ]
    
    res.send(jokes);
})


const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('Server is ready')
})