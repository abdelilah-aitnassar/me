import React from 'react'
import Products from './Products'

export const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-dark border-0">
                <img src="./assets/bg.jpg" className="card-img-top" alt="Background"
                height='550px'/>
                <div className="card-img-overlay d-flex flex-column justify-content">
                    <div className="container">
                        <h5 className="card-title display-4 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-3">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                    
                </div>
            </div>
            <Products/>
        </div>
    )
}
