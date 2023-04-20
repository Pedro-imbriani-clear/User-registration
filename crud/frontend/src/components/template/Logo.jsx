import "./Logo.css"
import logo from '../../assets/imgs/Batman-Logo-1939.png'
import React from "react"

export default props =>
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo"/>
        </a>
    </aside>