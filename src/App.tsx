import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Layout } from './components/Layout';
import { Map } from './map/Map';

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Map />
			</Layout>
		</ThemeProvider>
	);
}

export default App;
