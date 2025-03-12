import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="m-0">My Portfolio</h1>
            <nav>
                <ul className="list-none flex m-0 p-0">
                    <li className="ml-5"><a href="#about">About</a></li>
                    <li className="ml-5"><a href="#projects">Projects</a></li>
                    <li className="ml-5"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
