import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-900 text-white py-4">
			<div className="container mx-auto flex justify-center items-center">
				<p className="text-center text-sm">
					© {new Date().getFullYear()} {process.env.REACT_APP_APP_NAME}. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
