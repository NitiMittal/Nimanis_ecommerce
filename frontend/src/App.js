import React from 'react'
import "./index.css"

import {BrowserRouter, Route,Link} from "react-router-dom"
import HomeScreen from "./components/HomeScreen"
import ProductScreen from "./components/ProductScreen"
import CartScreen from "./components/CartScreen"

export default function App() {

  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
      <header className="header">
      <div className="brand">
            <button onClick={openMenu}>☰</button>
            <Link to="/">Nimanis</Link>
        </div>
        <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">SignIn</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>X</button>
        <ul>
            <li><a href="index.html">Pants</a></li>
            <li><a href="index.html">Shirts</a></li>
        </ul>
    </aside>
    <main className="main">
        <div className="content">
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/product/:id" component={ProductScreen}></Route>
          <Route exact path="/cart/:id?" component={CartScreen}></Route>
            
        </div>
        
    </main>      
    <footer className="footer">
        All rights reserved.
    </footer>
    
</div>
    </BrowserRouter>
  )
}
