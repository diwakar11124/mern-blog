import React from 'react'
import {Button, Navbar, TextInput} from 'flowbite-react';
import { Link , useLocation} from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa';

export default function Header() {
    const path=useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm  sm:text-xl font-semibold dark:text-white'>
           <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Diwakar's </span>
            Blog
        </Link>
        <form>
            <TextInput
            type='text'
            placeholder='Search......'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
            />
        </form>
        <Button className='w-16 h-10 lg:hidden' color='gray' rounded-lg>
        <AiOutlineSearch />
        </Button>
        <div className="flex gap-6 md:order-2">
            <Button className='w-10 h-10 hidden sm:inline' color='gray' rounded-lg>
                <FaMoon />
            </Button>
            <Link to='/sign-in'>
                <Button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Sign In
                </Button>
            </Link>
            <Navbar.Toggle />
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

