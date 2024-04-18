// import http from "http";
// import {tasks} from "./data.js";

// const server = http.createServer();
// server.on("request", async(req,res)=>{
// 	// duong dan client request len
// 	const url = req.url;
// 	//HTTP method: GET, POST, PUT,...
// 	const method = req.method;
	
// 	switch(url){
// 		case "/tasks":
// 			if(method==="GET"){
// 				res.setHeader("Content-Type","application/json");
// 				res.writhHead(200);
// 				res.end(JSON.stringify(tasks));
// 			}
// 			break;
// 		default:
// 			res.writeHead(404);
// 			res.end();
// 		}
// });

// server.listen(3000,()=>{
// 	console.log("Server is running on port 3000");
// })
console.log("Hello world");