import Instafeed from 'instafeed.js';

export default function instagram(city) {

	const users = {
		nn: '5752817709',
		kazan: '5843416667'
	};

	const feed = new Instafeed({
		get: 'user',
		tagName: 'awesome',
		clientId: '842a4e283bf34d7c8223c485fc2b2899',
		accessToken: '6179981616.842a4e2.d6c264ec6fc5477e8d407206604bbe3a',
		userId: users[city],
		sortBy: 'most-recent',
		limit: 4,
		resolution: 'standard_resolution',
		template: `<a href="{{link}}" target="blank" class="instagram__photo-item">
						<span style="background-image:url( {{image}} )" class="instagram__photo-img"></span>
						<span class="instagram__photo-text"> {{caption}} </span>
					</a>`
	});
	feed.run();
}
