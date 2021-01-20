import React from 'react'

function signinSignupWrap({children}) {
    return (
        <div className="inner-container">
            <div className="fluid-container">
                <div className="text-section">
                    <h1>Welcome to King's Clothes</h1>
                    <p>Enjoy our high quality products with affordable price</p>
                </div>
                <div className="form-section">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default signinSignupWrap
