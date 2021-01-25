import React, { useEffect, useState } from "react";
import scrollIcon from '../assets/icon-scrolltop.svg'
import './ScrollToTop.css'

export default function ScrollToTop () {

    const [ isVisible, setisVisible ] = useState( false )

    // Show button when page is scrolled upto given distance
    const toggleVisibility = () => {
        if ( window.pageYOffset > 3000 )
        {
            setisVisible( true )
        } else
        {
            setisVisible( false )
        }
    }

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo( {
            top: 0,
            behavior: "smooth"
        } );
    }

    useEffect( () => {
        window.addEventListener( 'scroll', toggleVisibility )
    }, [] );

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div onClick={scrollToTop}>
                    <img src={scrollIcon} alt='Go to top' />
                </div>
            )}
        </div>
    );
}

