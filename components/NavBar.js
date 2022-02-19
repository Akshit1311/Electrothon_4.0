import React from 'react'
import Link from 'next/link'
import { auth } from '../firebase'

export default function NavBar({user}) {
  return (
  
    <nav>
    <div className="nav-wrapper #212121 grey darken-4">
     <Link href="/"><a  className="brand-logo">TONApp</a></Link> 
      <ul id="nav-mobile" className="right">
        <li><a href="/about">About</a></li>
        <li><a href="/home">Contracts</a></li>
        {user?
        <>
          <li><Link href="/post"><a>Post</a></Link></li>
          <li><button className='btn #9e9e9e grey' onClick={()=>auth.signOut()}>LOGOUT</button></li>
        </>
        :
        <>
         <li><Link href="/signup"><a>SignUp</a></Link></li>
          <li><Link href="/login"><a>Login</a></Link></li>
        </>
        }
        
      
      </ul>
    </div>
  </nav>
        
  )
}
