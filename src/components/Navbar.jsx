const Navbar = () => {
    return (
        <>
            <nav className='bg-amber-900 h-14 flex justify-between items-center px-20 sticky top-0'>
                <img className='h-12' src='https://i.postimg.cc/W4YSCwg3/cookies-logo.png' alt='cookies-logo' />
                <div>
                    <a className='pl-5' href='#'>Home</a>
                    <a className='pl-5' href='#'>Biskuit</a>
                    <a className='pl-5' href='#'>About</a>
                    <a className='pl-5' href='#'>Contact</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar