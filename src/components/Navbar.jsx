import React from "react"
import ArticleIcon from '@mui/icons-material/Article';
import { Typography, Box, Stack, Link } from "@mui/material";

function Navbar(){


    return (
        <div className="navbar">
            <ul className="nav-list">
                <li><a href="#"><ArticleIcon  sx={{color:"white", height:"18px"}}/> My Portfolio</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About me</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;