import React from 'react';
import {
	MapContainer, TileLayer, Marker, Polyline, Polygon,
} from 'react-leaflet';

export function Map() {
	const position: [number, number] = [51, 0];

	const polyline: [[number, number], [number, number]] = [
		[51, 0],
		[51.012, 0.025],
	];

	const polygon: [[number, number], [number, number], [number, number]] = [
		[51, 0],
		[51.0104, 0.0275],
		[51.014, 0.023],
	];

	const limeOptions = { color: 'red' };

	const polygonOptions = {
		// dashArray: '5, 10',
	};

	return (
		<MapContainer
			center={position}
			zoom={13}
			scrollWheelZoom={false}
			style={{ height: '100vh' }}
			// zoomControl={false}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position} />
			<Polyline pathOptions={limeOptions} positions={polyline} />
			<Polygon pathOptions={polygonOptions} positions={polygon} />
		</MapContainer>
	);
}
