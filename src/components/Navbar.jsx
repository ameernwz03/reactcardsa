import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navbar.css'; // Assuming your CSS file is named styles.css


function Navbar(props) {
  return (
   <>
   <div className="nav">
    <img src={props.photo} alt='' className='rounded-pill ' />
     <h1 className='fw-bold'>{props.title}</h1>
     <ul className='m-0'>
       <li><a href="#home">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#contact">Contact</a></li>
     </ul>
   </div>
   </>
  )
}
Navbar.defaultProps = {
  photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vB-49_BT-dirwttYZaeE_VByjlQ3raVJZg&s",
  title: "BrandName Here",
  link1: "home",
  link2: "about",
  link3: "contact"
}

export default Navbar