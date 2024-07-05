import React from 'react'

import bkgImage from "../Assets/bkg.jpg"

import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className="container">
                <div className="d-md-flex align-items-center mt-5 pt-5 mb-4 pb-4">
                    <div className='m-3'>
                        <h1>Movie Search</h1>
                        <p>Welcome to Movie Search, your ultimate destination for all things film! Dive into a cinematic universe where every movie lover finds their perfect match. Whether you're searching for the latest blockbusters, timeless classics, or hidden gems, Movie Search is your trusted guide through the vast landscape of cinema. Embark on a journey through our extensive library, where every genre, era, and culture converge to captivate and inspire. With our intuitive search tools and personalized recommendations, discovering your next favorite film has never been easier. So, grab your popcorn, dim the lights, and let Movie Search be your gateway to a world of unforgettable movie experiences. Start your adventure today and unlock the endless possibilities of film exploration.</p>
                    </div>
                    <img className='m-3' width={'380px'} src={bkgImage} alt="" />
                </div>
                <Link to="/search">
                    <a className='btn btn-primary mb-5 mx-3'>Seach Movies</a>
                </Link>
            </div>
        </div>
    )
}

export default Home