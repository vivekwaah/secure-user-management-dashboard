import { ReactNode } from "react";

export interface TemplateProps {
	children: {
		header: ReactNode;
		footer: ReactNode;
		content: ReactNode;
	};
}