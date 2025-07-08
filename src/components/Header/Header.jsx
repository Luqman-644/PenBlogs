import React, { useState } from 'react'
import LogoutBtn from './LogoutBtn'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.authen.status)
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
      special: true
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
      special: true
    },
    {
      name: "All Blogs",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add a Blog",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  const getItemStyle = (itemName) => {
    switch (itemName) {
      case 'Login':
        return 'bg-green-500 text-white hover:bg-green-600';
      case 'Signup':
        return 'bg-blue-500 text-white hover:bg-blue-600';
      default:
        return 'text-gray-600 hover:text-gray-900';
    }
  };


  return (
    <>
      <header className="bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-13 sm:h-16">
            <div className="w-[110px] sm:w-[150px]">
              <Link to='/'>
                <img src="/Logo.png" alt="" />
              </Link>
            </div>
            <div className="hidden list-none sm:flex items-center space-x-8">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <a
                      onClick={() => navigate(item.slug)}
                      className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-colors ${item.name === 'Login' || item.name === 'Signup'
                          ? 'cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center'
                          : null
                        }`}
                    >{item.name}</a>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </div>
            <div className="sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`${isMenuOpen ? 'block' : 'hidden'
              } md:hidden transition-all duration-300 ease-in-out`}
          >
            <div className="absolute z-50 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] right-0 top-16 bg-white rounded-bl-lg px-2 list-none p-2 space-y-1 sm:px-3 min-w-48">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name} className="text-center">
                    <a
                      onClick={() => navigate(item.slug)}
                      className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-colors block ${getItemStyle(item.name)}`}
                    >{item.name}</a>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li className="text-center">
                  <LogoutBtn />
                </li>
              )}
            </div>
          </div>

        </nav>
      </header >
    </>
  )
}

export default Header