import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetcchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('test GifGrid', () => {
	const category = 'One Punch';

	test('debe de mostrarse correctamente', () => {
		useFetcchGifs.mockReturnValue({
			data: [],
			loading: true,
		});

		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
		const gifs = [
			{
				id: 'ABC',
				url: 'https://localhost/cualquier/cosa.jpg',
				title: 'Cualquier cosa',
			},
			{
				id: '123',
				url: 'https://localhost/cualquier/cosa.jpg',
				title: 'Cualquier cosa',
			},
		];

		useFetcchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});

		const wrapper = shallow(<GifGrid category={category} />);

		// expect( wrapper ).toMatchSnapshot();
		expect(wrapper.find('p').exists()).toBe(false);
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	});
});
