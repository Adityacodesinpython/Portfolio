import React, { useState } from "react"
import ArticleIcon from '@mui/icons-material/Article';
import { Typography, Box, Stack, Link } from "@mui/material";

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
            <div className="navbar">
                <button type="button" className=" my-4 block sm:hidden mx-auto" onClick={handleClick}>
                    <svg className="h-6 w-6 text-white  fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        {isOpen && (
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                        )}
                        {!isOpen && (
                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                        )}
                    </svg>
                    
                </button>
                <ul className={`nav-list sm:flex ${  isOpen ? 'block' : 'hidden' }`}>
                    <li><a href="#" className="font-semibold text-sm sm:text-md md:text-lg"><ArticleIcon  sx={{color:"white", height:"18px"}}/> My Portfolio</a></li>
                    <li><a href="/"  className="font-semibold text-sm sm:text-md md:text-lg">Home</a></li>
                    <li><a href="https://github.com/Adityacodesinpython"  className="font-semibold text-sm sm:text-md md:text-lg">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/aditya-sampathkumar-abab94280/"  className="font-semibold text-sm sm:text-md md:text-lg">Linkedin</a></li>
                </ul>
            </div>

            
    )
}

export default Navbar;