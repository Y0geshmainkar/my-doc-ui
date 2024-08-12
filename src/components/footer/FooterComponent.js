import React from 'react'
import './FooterComponent.css'

function FooterComponent() {
    return (
        <div className='col-md-12 d-flex footer'>
            <ul className='col-md-3'>
                <li>About</li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul className='col-md-3'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className=' justify-content-end'>
                <div className='media-container'>
                    <a href=''><i class="fa-brands fa-facebook" style={{color: "#224957"}}></i></a>
                    <a href=''><i class="fa-brands fa-square-x-twitter" style={{color: "#224957"}}></i></a>
                    <a href=''><i class="fa-brands fa-instagram" style={{color: "#224957"}}></i></a>
                    <a href=''><i class="fa-brands fa-youtube" style={{color: "#224957"}}></i></a>
                </div>
                <div className='text-sm'>© 2024 HelthPix, Inc.</div>
            </div>

        </div>
    )
}

export default FooterComponent
