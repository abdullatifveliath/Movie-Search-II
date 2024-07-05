import React from 'react'

import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <div>
            <MDBFooter className='text-center text-lg-left'>
                <div className='text-center p-3' style={{ backgroundColor: "#FEC631" }}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a className='text-dark' href=''>
                        MovieSearch.com
                    </a>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer