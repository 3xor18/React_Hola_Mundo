import getGifs from '../../helpers/getGifs';

describe('Testing getGifs', () => {
	test('debe de traer 10 elemenotos', async () => {
		const gifs = await getGifs('One Punch');
		expect(gifs.length).toBe(10);
	});
});
