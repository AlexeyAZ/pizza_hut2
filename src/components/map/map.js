export default function map(city) {

	(function (cityAttr) {

		function initMap() {
			const mapCls = 'map__block';
			const coords = {
				nn: {
					lat: 56.309235, lng: 43.987314
				},
				kazan: {
					lat: 55.821497, lng: 49.093553
				}
			};

			const gMap = new google.maps.Map(document.querySelector(`.${mapCls}`), {
				center: coords[cityAttr],
				zoom: 16,
				disableDefaultUI: true
			});

			const marker = new google.maps.Marker({
				position: coords[cityAttr],
				map: gMap
			});
		}

		initMap();
	})(city);
}
