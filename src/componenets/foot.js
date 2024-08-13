import React from "react";
import './foot.css'

function Footers() {
    return(
        <footer>
            <div>
                <div class="style-items">
                    <div class="items1 item">
                        <div class="dominant">
                            <img class="logo" src="./logo.svg" alt=""/>
                        </div>
                        <div>
                            <p class="color2 style-fot-p">Track market trends and manage your workflow across all your business systems with NEW continuously analyzing the market data for what matters to every business. Start with NEW now!</p>

                        </div>
                    </div>
                    <div class="items2">
                        <div class="items2-op">
                            <span class="color1 title-fot">Pages</span>
                            <div class="color2">
                                <a href="#">FAQs</a>
                            </div>
                            <div class="color2"><a href="#"> About us</a></div>
                            <div class="color2"><a href="#">Terms & Conditions</a></div>
                        </div>
                    </div>
                    <div class="items3">
                        <div>
                            <span class="color1 title-fot">Contact us</span>
                        </div>
                        <div class="style-logo-fot">
                            <div ><img class="style-log-us" src="./linkedin new.svg" alt="logo"/></div>
                            <div><img class="style-log-us" src="./contactus.svg" alt="logo"/></div>
                        </div>
                    </div>
                </div>
                <div class="style-items2">
                    <div>
                        <p class="color2">All Rights Reserve</p>
                    </div>
                    <div class="style-button2">
                        <img class="google-button2" src="./newGooglePlay.svg" alt=""/>
                        <img class="apple-button2" src="./newApple.svg" alt=""/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footers