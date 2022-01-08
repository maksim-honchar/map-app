import React, { ReactNode } from 'react';
import Bottombar from './Bottombar';
import Topbar from './Topbar';

interface ILayout {
	children: ReactNode
}

export function Layout(props: ILayout) {
	const { children } = props;

	return (
		<>
			<div>
				<Topbar />
			</div>
			{children}
			<div style={{
				position: 'fixed', zIndex: 400, bottom: 0, width: '100%',
			}}
			>
				<Bottombar />
			</div>
		</>
	);
}
