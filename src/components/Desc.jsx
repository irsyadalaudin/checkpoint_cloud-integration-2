/* eslint-disable react/no-unescaped-entities */
const Desc = () => {
    return (
        // Create a container div with padding and margin
        <div className='bg-yellow-800 pt-10 px-20 mb-14 flex'>
            <div className='flex-1'>

                {/* Display a heading for the description section */}
                <h1>Get in touch with us</h1>

                {/* Provide a paragraph with information about chocolate chip cookies */}
                <p>We love chocolate chip cookies as much as you do! Our team is always experimenting with new recipes to create the perfect chocolate chip cookie. Whether you like them soft and chewy or crispy and crunchy, we've got a cookie for you. Come visit us and try one (or more!) of our delicious chocolate chip cookies.</p>
            </div>

            {/* Display an image of chocolate chip cookies */}
            <img src='https://i.postimg.cc/m2H8k2XF/cookies.png' alt='cookies-main' />
        </div>
    )
}

// Export the Desc component as the default export
export default Desc