import React from "react";
import './header.css'
import Trade from './trade2.png'
import Video from './sample.mp4'
import Arrow from './arrow-right.svg'
import Button from "./dokmeh";
import Google from "./newGooglePlay.svg"
import Apple from "./newApple.svg"
function Header() {
    return(
        <header id="style-head">
        <div class="style-head-elem">
            <div>
                <div>
                    <h1 class="color1"/>
                        <p class="style-hed-h1">
                            <span>THE </span>
                            <span class="bold">FUTURE </span>
                            <span>OF </span>
                            <span class="bold">MINERAL MARKET </span>
                            <br/>
                            <span>IS HERE WITH</span>
                        </p>
                    <h1 class="color1">
                        <p class="style-new style-hed-h1">
                            <span class="bold">NEW</span>
                            <span>is</span>
                            <span class="bold">NEW</span>
                        </p>
                    </h1>   
                    <p class="style-hed-p1 color2">
                        NEW, an innovative and user-friendly AI model that uses cutting-edge machine learning 
                        to predict Iron ore prices and analyze the market. NEW is revolutionizing AI technology in
                        business at all levels. Your AI partner!
                    </p>
                    <p class="style-hed-p2 color2">
                        Try it now!
                    </p>
                </div>
                <div class="style-button">
                    <div>
                        <Button
                        className={'apple-button '}>
                            <img className="img-button"  src={Apple}/>
                        </Button>
                    </div>
                    {/* <div class="google-button">
                        <img class="img-button" src="./public/newGooglePlay.svg" alt=""/>
                    </div> */}
                    <div>
                        <Button
                        className={`google-button`}>
                                <img className="img-button" src={Google}/>
                        </Button>
                    </div>
                   
                    {/* <div class="apple-button">
                        <img class="img-button" src="./public/newApple.svg" alt=""/>                      
                    </div> */}
                </div>

            </div>
            <div class="style-imgpart">
               <div>
                <img class="img-trade" src={Trade} alt=""/>
               </div>
                <div class="style-triangle">
                    <div class="triangle-1"></div>
                    <div class="triangle-2"></div>
                </div>
            </div>
           
        </div>
        <div class="style-head-elem2">
            <p class="style-title color1"><span>NEW</span> knows what you are looking for</p>
            <div class="style-boxes">
                <div class="box">
                    <img src="./business.svg" alt=""/>
                    <p class="color1 p-one">Market Trends Analysis</p>
                    <p class="color2 p-two">Mapping market trends can be a game-changer for any business. Monitoring changes in the market will help you to identify patterns and opportunities.</p>
                </div>
                <div class="box">
                    <img class="predict" src="./predict.svg" alt=""/>
                    <p class="color1 p-one">Risk Management</p>
                    <p class="color2 p-two">With NEW, Protect your asset and reputation in the increasing complexities of the business environment.</p>
                </div>
                <div class="box">
                    <img src="./ml.svg" alt=""/>
                    <p class="color1 p-one">Advanced Machine learning in market and business</p>
                    <p class="color2 p-two">NEW is a platform leverages machine learning and statistical models to make changes in the mineral trade industry.</p>
                </div>
            </div>
        </div>
        <div class="style-head-elem3">
            <div class="style-back">
                <div class="style-contanier">
                    <p class="color1 style-title2">Video on NEW</p>
                    <div class="style-menu">
                        <div class="style-menu-elem">
                            <div>
                                <div class="partion">
                                    <p class="color2 style-p4">NEW, a novel AI model that uses cutting-edge machine learning techniques to predict Iron ore prices. NEW is revolutionizing AI technology in business at all levels. Your AI partner that predicts Iron ore prices for develop and transfer your business.</p>
                                <p class="color2 style-p4">Here are some advantages choosing NEW as your AI partner:</p>
                                <div class="box2">
                                    <div>
                                        <img src={Arrow} alt=""/>
                                    </div>
                                    <p class="color1 box2-p2">Alongside AL, ML statistical learning and historical data, we used the strong background of Dr. Keyvan Jafari Tehrani in mineral trade and business to model the market behaviors.</p>
                                </div>
                                <div class="box2">
                                    <div>
                                        <img src={Arrow} alt=""/>
                                    </div>
                                    <p class="color1 box2-p2">NEW is adjusted to the market movements, therefore, it will help you grow your business by finding opportunities and managing risks.</p>
                                </div>
                                <div class="box2">
                                    <div>
                                        <img src={Arrow} alt=""/>
                                    </div>
                                    <p class="color1  box2-p2">NEW will warn you if there is a risk of sudden fluctuation.</p>
                                </div>
                                </div>
                            </div>
                            <div class="style-video">
                                <video src={Video} controls></video>
                                <p class="color2 style-hed-p3">Please click on this video to see more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </header>
    )
}

export default Header;