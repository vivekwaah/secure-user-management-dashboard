import React from 'react';
import { TemplateProps } from '../../interfaces/appInterface';

const Template: React.FC<TemplateProps> = ({ children }) => {
	const { header, footer, content } = children;

	return (
		<div className="flex flex-col min-h-screen">
			<header>{header}</header>
			<main className="flex-1">{content}</main>
			<footer>{footer}</footer>
		</div>
	);
};

export default Template;
