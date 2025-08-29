import http from 'http'
import WebSocket, { WebSocketServer } from 'ws'
import express from 'express'

const app = express()
const httpServer = app.listen(8080)

const wss = new WebSocketServer({ server: httpServer})

wss.on('connection', function connection(ws){
    ws.on('error', console.error)

    ws.on('message', function client(data, isBinary){
        wss.clients.forEach(function eact(client){
            if(client.readyState === WebSocket.OPEN){
                client.send(data, {binary: isBinary})
            }
        })
    })
    ws.send("hi there from server")
})






















// with http 

// const server = http.createServer((request:any,response:any)=>{
//     response.end("hi there")
// })

// const wss = new WebSocketServer({ server })

// wss.on('connection', function connection(ws){
//     ws.on('error', console.error)

//     ws.on('message', function handleclient(data, isBinary){
//         wss.clients.forEach(function eact(client){
//             if(client.readyState === WebSocket.OPEN){
//                 client.send(data, {binary: isBinary})
//             }
//         })
//     })
//     ws.send("hello from server")
// })

// server.listen(8080, ()=>{
//     console.log((new Date())+ "server is listen on port 8080")
// })