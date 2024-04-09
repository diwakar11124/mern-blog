
import {Avatar, Dropdown, Button, Navbar, TextInput} from 'flowbite-react';
import { Link , useLocation ,useNavigate} from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai';
import {FaMoon, FaSun} from 'react-icons/fa';

export default function Header() {
    const path=useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link 
        to='/'
        className='self-center whitespace-nowrap text-sm  sm:text-xl font-semibold dark:text-white'
        >
           <span className='px-2 py-1 bg-gradient-to-r from-cyan-500 via-green-300 to-green-600 rounded-lg text-white'>
            One-Off
            </span>
            Blog
        </Link>
        <form>
            <TextInput
            type='text'
            placeholder='Search...'
            
            className='hidden lg:inline'
            />
        </form>
        <Button className='w-16 h-10 lg:hidden' color='gray' rounded-lg>
        <AiOutlineSearch />
        </Button>
        <div className="flex gap-10 md:order-2">
            <Button className='w-8 h-9 hidden sm:inline' color='gray' rounded-lg>
                <FaMoon className='w-7 h-5'/>
            </Button>
            <Link to='/sign-in'>
                <Button gradientDuoTone='purpleToBlue' outline>
                    Sign In
                </Button>
            </Link>
            <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
                <Navbar.Link active={path ==="/"} as={'div'}>
                    <Link to="/">
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path ==="/about"} as={'div'}>
                    <Link to="/About">
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path ==="/projects"} as={'div'} >
                    <Link to="/projects">
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
    </Navbar>
  );
}

