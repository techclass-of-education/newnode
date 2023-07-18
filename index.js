const express = require('express')
const path = require("path")

const app = express() // create  instance of express js where app is a object of express
const port = 3000


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/Home.html"))  // absolute path(full path)
    console.log(__dirname)
})




//no. of callbacks for a link
app.get('/product/about', (req, res, next) => {
    console.log("Link matched  /product/about callback1")
    next()
},

    (req, res, next) => {
        console.log("Link matched  /product/about callback2")
        next()
    },
    (req, res) => {

        res.sendFile(path.join(__dirname, "/pages/About.html"))
    },
)



//query in request  req.query

app.get('/login', (req, res) => {
    console.log(req.query)
    const { user, password } = req.query
    res.send(`<h1>Login</h1><h3>Welcome user =>${user}</h3><h3>  Password:${password}</h3>`)
})

// array of callbacks

// const callback1 = (req, res, next) => {
//     console.log("Link matched  /product/about callback1")
//     next()
// }

// const callback2 = (req, res, next) => {
//     console.log("Link matched  /product/about callback2")
//     next()
// }

// const callback3 = (req, res,next) => {
//     console.log("Link matched  /product/about callback3")
//     next()

// }

// app.get('/product/about', [callback1, callback2, callback3],(req,res,next)=>
// {
//     console.log("Link matched  /product/about callback4")
//     next()
// },
// (req,res)=>
// {
//     res.sendFile(path.join(__dirname, "/pages/about.html"))
// }

// )



//params in request  req.param
app.get('/services/:name-:age([0-9]{2})', (req, res) => {

    console.log(req.params)
    const { name, age } = req.params

    res.send(`<h1>Serevice to User Name: ${name} Age:${age}</h1>`)
})

// app.get('/product/about', (req, res) => {
//     res.sendFile(path.join(__dirname, "/pages/about.html"))
// })

app.get('/product/contact', (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/Contact.html"))
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
