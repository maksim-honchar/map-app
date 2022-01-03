import React from 'react';
import Bottombar from './Bottombar';
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
			<div style={{ position: 'fixed', zIndex: 1000, bottom: 0, width: "100%" }}>
				<Bottombar />
			</div>
		</>
	);
}
