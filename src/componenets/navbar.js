import React from "react";
import './navbar.css'
import Geography from './icons8-geography-26.png'
import Arrow from './icons8-arrow-24.png'
import Dokmeh from "./dokmeh";
import Button from "./dokmeh";

function Navbar(){
    return(
        
        <nav class="style-nav">
        <div class="box-logo">
                <img class="style-logo-new" src="https://www.new-marketanalysis.com/imgs/logo.svg" alt=""/>
        </div>

        <div class="style-nav-button">
            <div class="style-lang">
                <div class=" item1 planet">
                    <img src={Geography} alt=""/>
                </div>
                <div class="item1">
                    En
                </div>
                <div class="item1 arrow">
                    <a href=""><img src={Arrow} alt="icon"/></a>
                </div>
            </div>
            <div>
                <Button
                className={'button-1 item2'}
                title='login'>
                </Button>


                {/* <Link> */}
                {/* <Button 
                className={'button-22'}
                title='login'><img src={Geography} width={10} height={10}/><span>dsfdsf</span></Button>           

            <div>
                <Button  className={"button-2 itme2"}><a>sign in</a></Button>
                {/* <button class="button-2 item2"><a href="">Sign up</a></button> */}
            </div>
        </div>
    </nav>
    )
}

export default Navbar;