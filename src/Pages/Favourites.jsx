import React, { useContext } from 'react'

import { favMoviesContextApi } from '../ContextAPI/ContextShare';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Favourites() {

    const { favMoviesRes, setFavMoviesRes } = useContext(favMoviesContextApi)

    const remFavbuttonClick = (e, id) => {
        e.preventDefault();
        const updatedFavorites = favMoviesRes.filter(movie => movie.imdbID !== id);
        setFavMoviesRes(updatedFavorites);
    }

    return (
        <div className='p-5'>
            <Row>
                {
                    favMoviesRes.length > 0 ?

                        favMoviesRes.map(item => (
                            <Col sm={12} md={6} lg={4} xl={3} key={item.imdbID}>
                                <div className='m-3 p-3 border rounded shadow text-center' style={{ height: '100%' }}>
                                    <h3 className='text-primary'>{item.Title}</h3>
                                    <p class="text-center">{item.Plot}</p>
                                    <p class="text-center text-warning">Internet Movie Database : {item.imdbRating}</p>
                                    <a onClick={e => remFavbuttonClick(e, item.imdbID)} className='btn btn-danger'>Remove Favourite</a>
                                </div>
                            </Col>
                        ))

                        :

                        <h3 class="text-center">No Favourites Found</h3>
                }
            </Row>
        </div>
    )
}

export default Favourites