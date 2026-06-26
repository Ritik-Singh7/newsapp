import React, { Component } from 'react'
// 1. Imported the missing icons from lucide-react (or heroicons if you prefer)
import { Search, Bell, Globe, Menu, X } from 'lucide-react' 

export default class NavBar extends Component {
  // 2. Initialized state to manage mobile menu toggle
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  render() {
    return (
      <div>
        <nav className="bg-gray-900 text-white shadow-md relative">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                
                {/* Logo */}
                <h1 className="text-2xl font-bold text-red-500">
                  NewsApp
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 font-medium">
                    <li className="hover:text-red-400 cursor-pointer">Home</li>
                    <li className="hover:text-red-400 cursor-pointer">Business</li>
                    <li className="hover:text-red-400 cursor-pointer">Sports</li>
                    <li className="hover:text-red-400 cursor-pointer">Technology</li>
                    <li className="hover:text-red-400 cursor-pointer">Health</li>
                </ul>

                {/* Icons & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Search className="cursor-pointer hover:text-red-400" />
                    <Bell className="cursor-pointer hover:text-red-400" />
                    <Globe className="cursor-pointer hover:text-red-400" />
                    
                    {/* 3. Added toggle event here. Swaps between Hamburger and X icon */}
                    <div className="md:hidden cursor-pointer" onClick={this.toggleMenu}>
                      {this.state.isMenuOpen ? <X /> : <Menu />}
                    </div>
                </div>
            </div>

            {/* 4. Mobile Menu Drawer (Only shows when isMenuOpen is true) */}
            {this.state.isMenuOpen && (
              <div className="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 absolute w-full left-0 shadow-lg z-50">
                <ul className="flex flex-col gap-4 font-medium">
                  <li className="hover:text-red-400 cursor-pointer py-1">Home</li>
                  <li className="hover:text-red-400 cursor-pointer py-1">Business</li>
                  <li className="hover:text-red-400 cursor-pointer py-1">Sports</li>
                  <li className="hover:text-red-400 cursor-pointer py-1">Technology</li>
                  <li className="hover:text-red-400 cursor-pointer py-1">Health</li>
                </ul>
              </div>
            )}
        </nav>
      </div>
    )
  }
}