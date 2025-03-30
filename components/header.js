import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Header() {
    const router = useRouter();
    console.log("router",router)
  return (
    <div>
    <nav style={{fontFamily:'sans-serif'}}>
       <div className="logo">
       <Link href="/">
         <img src="https://www.youtube.com/" className="logo-img" alt="Logo" />
         </Link>
       </div>
      <ul className="links">
          <li><Link href="/" className={router.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link href="/aboutus" className={router.pathname === "/aboutus" ? "active" : ""}>About</Link></li>
          <li><Link href="/product" className={router.pathname === "/product" ? "active" : ""}>Product</Link></li>
          <li><Link href="/contact" className={router.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
      </ul>
     
   </nav>
   </div>

  )
}

export default Header
