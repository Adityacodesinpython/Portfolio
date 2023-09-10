import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles.css";

// https://realtimecolors.com/?colors=ffffff-070307-dc0470-6c1212-fa0505 
/* 
   background: rgb(170,0,0);
   background: radial-gradient(circle, rgba(170,0,0,1) 0%, rgba(70,0,0,1) 35%, rgba(0,0,0,1) 76%);
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <App />
)