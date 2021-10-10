import React from "react";
import logo from "./assets/logo.png"
import style from "./styles/styles.module.scss"

const Logo : React.FC = () => {
    return (
        <div className={style.logo}>
            <img src={logo} alt={`logo`}/>
        </div>
    )
}

export default Logo