// require("babel-polyfill");

import map from '../components/map/map';
import instagram from '../components/instagram/instagram';

const app = {
	load: () => {
		app.bindEvents();
	},

	bindEvents: () => {
		const city = document.body.getAttribute('data-city');

		map(city);
		instagram(city);
	}
};

window.addEventListener('load', app.load);
