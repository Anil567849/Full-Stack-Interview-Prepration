import React from 'react'
import nf from '../images/nf.png';

function ErrorPage() {
    const imgCss = {
        width : "100vw",
        height : "90vh",
        textAlign : "center"
    }
    return (
        <div>
            <img style={imgCss} src={nf} alt="" />
        </div>
    )
}

export default ErrorPage
