import React from 'react'
import { Navbar } from '../../element-pages/Navbar/Navbar'
import { Footer } from '../../element-pages/Footer/Footer'
import './home-style.scss'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="intro">
                <div className="container">
                    <div className="intro__inner">
                        <div id="h1">
                            <img style={{width: '56px'}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fblue-ice-ui-components-1%2F24%2FUntitled-6-512.png&f=1&nofb=1" />
                            <h1>Password</h1>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
