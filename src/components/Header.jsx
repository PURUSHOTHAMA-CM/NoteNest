import React from "react";


function Header() {

  return (
    <header>
      <nav >
        <h1 className="siteName">NoteNest</h1>
        <ul>
            <li className="navItems">Home</li>
            <li className="navItems">About</li>
            <li className="navItems">Contact</li>
        
        </ul>
       
      </nav>  
    </header>
  );
}

export default Header;
