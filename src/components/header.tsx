import React from 'react';
import logo from '../assets/símbolo.png';

const Header: React.FC = () => {
	return (
		<header className="bg-gray-800 text-white shadow-lg rounded-lg">
			<div className="container mx-auto px-6 py-4 flex items-center justify-between">
				<div className="flex items-center space-x-3">
					<img
						src={logo}
						alt="Code Breakers Logo"
						className="w-12 h-12 object-contain animate-fade-in"
					/>
					<a
						href="/"
						className="text-xl font-semibold text-gray-100 hover:text-gray-300 transition-colors"
					>
					</a>
				</div>

				<nav className="flex-1 flex justify-center">
					<a
						href="#roadmap"
						className="text-lg text-gray-300 hover:text-white transition-colors relative group"
					>
						Roadmap
						<span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
					</a>
				</nav>

				<div></div>
			</div>
		</header>
	);
};

export default Header;


