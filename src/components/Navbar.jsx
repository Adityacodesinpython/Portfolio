import React from "react"
import ArticleIcon from '@mui/icons-material/Article';
import { Typography, Box, Stack, Link } from "@mui/material";

function Navbar(){


    return (
        <div className="navbar">
            <ul className="nav-list">
                <li><a href="#"><ArticleIcon  sx={{color:"white", height:"18px"}}/> My Portfolio</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="https://github.com/Adityacodesinpython">Github</a></li>
                <li><a href="https://www.linkedin.com/in/aditya-sampathkumar-abab94280/">Linkedin</a></li>
            </ul>
        </div>
    )
}

export default Navbar;