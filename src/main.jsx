import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home.jsx';
import './Styles/Global.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
	duration: 750,
	offset: 300,
	mirror: false,
	once: true,
});

import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';

ReactDOM.createRoot(
	document.getElementById('root')
).render(
	<BrowserRouter>
		<Routes>
			<Route
				path='/'
				element={<Home />}
			/>
		</Routes>
	</BrowserRouter>
);
