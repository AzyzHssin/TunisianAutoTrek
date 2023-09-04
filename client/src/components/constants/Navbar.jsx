import React , { useState , useEffect } from 'react'
import Search from './Search'
import * as images from '../../assets/'
import { Link } from 'react-router-dom';
import  {UserAuth} from '../../context/AuthContext'

const Navbar = () => {

  const { user, logOut } = UserAuth();
    
    const handleSignOut = async () => {
        try {
          await logOut()
          window.location.reload()
        } catch (error) {
          console.log(error)
        }
      }

      const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 30) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <nav className="bg-white dark:bg-black">
     {/*  <nav className={`bg-white dark:bg-black ${isSticky ? 'sticky top-0 shadow-md z-50' : ''}`}>  */}
    <div className="container py-4 mx-auto">
        <div className="flex items-center justify-center mt-6 text-gray-600 uppercase dark:text-gray-300">
      <img className='mr-8' src={images.logo} width={150} alt="" />
            <a href="/" className="text-gray-800 dark:text-gray-200 mx-1.5 sm:mx-6">Home</a>

            <a href="/" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-white hover:border-yellow-500 ease-in duration-300 mx-1.5 sm:mx-6">About</a>

            <a href="/" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-white hover:border-yellow-500 ease-in duration-300 mx-1.5 sm:mx-6">Car Models</a>

            <a href="/" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-white hover:border-yellow-500 ease-in duration-300 mx-1.5 sm:mx-6">Categories</a>

            <a href="/" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-white hover:border-yellow-500 ease-in duration-300 mx-1.5 sm:mx-6">FAQs</a>

           <Link to='/contact' className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-white hover:border-yellow-500 ease-in duration-300 mx-1.5 sm:mx-6">Contact</Link>

<Search />

            <a href="https://www.facebook.com" className="hover:text-gray-800 dark:hover:text-white mx-1.5 sm:mx-3 ">
            <img src={images.facebookIcon} alt="FacebookIcon" />   
             </a>

            <a href="https://www.instagram.com" className="hover:text-gray-800 dark:hover:text-white mx-1.5 sm:mx-3">
            <img src={images.instagramIcon} alt="InstagramIcon" /> 
             </a>

{user?.displayName ? (
             <div className="ml-6">
<div className="dropdown inline-block relative">
<div className="flex items-center space-x-4">
    <img className="w-10 h-10 object-cover border-2 rounded-full" src={user.photoURL} alt="" />
    <div className="font-medium dark:text-white">
        <div>{user?.displayName}</div>
    </div>
</div>

  <ul className="dropdown-menu absolute hidden text-gray-700 pt-3 text-sm w-48">
  <li className=""><a className="rounded-t bg-gray-200 hover:bg-yellow-400 py-2 px-4 block whitespace-no-wrap text-center" href="/">Account</a></li>
{/*   <li className=""><Link to='/admindashboard' className="bg-gray-200 hover:bg-yellow-400 py-2 px-4 block whitespace-no-wrap" href="/">Admin Dashboard</Link></li> */}
  <li className="">
    <button
      onClick={handleSignOut}
      className="rounded-b bg-gray-200 hover:bg-yellow-400 py-2 px-4 block w-full uppercase whitespace-no-wrap"
    >
      Logout
    </button>
  </li>

  </ul>
</div>

</div>
 ) : (
  <Link to="/signin">
                  <li className='list-none'>
                    <span
                      aria-label="Sign in"
                      title="Sign in"
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-normal text-white transition duration-200  hover:bg-yellow-500 hover:text-black">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person mr-2" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>
                      Sign in
                    </span>
                  </li>
                </Link>

 )}


        </div>
    </div>
</nav>

  )
}

export default Navbar