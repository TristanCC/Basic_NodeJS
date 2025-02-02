import http from 'http'
import dotenv from 'dotenv'
import fs from 'fs'

const PORT = process.env.PORT


const server = http.createServer((req, res) => {
    
    try {
        if(req.url === '/') {
            fs.readFile('index.html', (err, data) => {
                res.writeHead(200, 'Content-Type','text/html')
                res.write(data)
                return res.end()
            })
        }
        else if(req.url === '/about') {
            fs.readFile('about.html', (err, data) => {
                res.writeHead(200, 'Content-Type','text/html')
                res.write(data)
                return res.end()
            })

        }
        else if(req.url === '/contact-me') {
            fs.readFile('contact-me.html', (err, data) => {
                res.writeHead(200, 'Content-Type','text/html')
                res.write(data)
                return res.end()
            })

        }
        
        else {
            fs.readFile('404.html', (err, data) => {
                res.writeHead(200, 'Content-Type','text/html')
                res.write(data)
                return res.end()
            })
        }
    } catch(error) {
        
    }
}).listen(PORT, () => {
    console.log(`Server hosted on localhost:${PORT}`)
})