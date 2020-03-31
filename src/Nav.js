import React from 'react'
import{Link}from 'react-router-dom'

export default function Nav(){
    return<div>
        <nav className='nav'>
<div>
    <Link to="/">
    WestSide University
    </Link>
</div> 
<div className='link-wrap'>
    <Link to="/" className='links'>Home</Link>
    <Link to="/about" className='links'>About</Link> 
</div>
</nav>
    </div>
}
