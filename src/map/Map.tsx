import React from 'react';
import {
	MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

export function Map() {
	return (
		<MapContainer
			center={[51.505, -0.09]}
			zoom={13}
			scrollWheelZoom={false}
			style={{ height: '100vh' }}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[51.505, -0.09]}>
				<Popup>
					A pretty CSS3 popup.
					{' '}
					<br />
					{' '}
					Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	);
}
