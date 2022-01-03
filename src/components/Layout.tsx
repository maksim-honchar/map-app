import React from 'react';
import Topbar from './Topbar';

interface ILayout {
	children: React.ReactNode
}

export function Layout(props: ILayout) {
	const { children } = props;

	return (
		<>
			<Topbar />
			{children}
		</>
	);
}
