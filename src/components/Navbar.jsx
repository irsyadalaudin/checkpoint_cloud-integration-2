const Navbar = () => {
    return (
        <>
            {/* Create a navigation bar with background color, height, and sticky positioning at the top */}
            <nav className='bg-yellow-950 h-14 flex justify-between items-center px-20 sticky top-0'>

                {/* Display a logo image with a specific height */}
                <img className='h-12' src='https://i.postimg.cc/W4YSCwg3/cookies-logo.png' alt='cookies-logo' />

                {/* Create a navigation menu using a div element */}
                <div>
                    {/* Create navigation links with padding and href attributes */}
                    <a className='pl-5' href='#'>Home</a>
                    <a className='pl-5' href='#'>Biskuit</a>
                    <a className='pl-5' href='#'>About</a>
                    <a className='pl-5' href='#'>Contact</a>
                </div>
            </nav>
        </>
    )
}

// Export the Navbar component as the default export
export default Navbar