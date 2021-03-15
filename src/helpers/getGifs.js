const apiKey = 'TJJNkPP3JFzDZVyPKvdXU1VSOO7FsTkD';
const limit = 10;

const getGifs = async (category) => {
	const END_POINT = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`;
	const resp = await fetch(END_POINT);
	const { data } = await resp.json();

	const gifs = data.map((img) => {
		return { id: img.id, title: img.title, url: img.images?.downsized_medium.url };
	});

	return gifs;
};

export default getGifs;
