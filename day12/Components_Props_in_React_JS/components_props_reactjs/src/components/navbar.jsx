// import React from 'react'

const Navbar = () => {
  return (
    <div>
        <style>{`
            a:hover {
                color: aquamarine !important;
                transition: color 0.3s ease;
            }
        `}</style>
        <nav style={{display:"flex", alignItems:"center", justifyContent:"space-between", background:"black", height:"70px"}}>
            <div className="logo" style={{color:"aqua", marginLeft:"20px"}}><h1>ShopNow</h1></div>
            <div className="links" style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"20px", marginRight:"20px", fontSize:"1.2rem"}}>
                <a href="#" style={{color:"white", textDecoration:"none"}}>About</a>
                <a href="#" style={{color:"white", textDecoration:"none"}}>Sign in</a>
                <a href="#" style={{color:"white", textDecoration:"none"}}>log in</a>
                <a href="#" style={{color:"white", textDecoration:"none"}}>Contact us</a>
            </div>
            
        </nav>
    </div>
  )
}

export default Navbar