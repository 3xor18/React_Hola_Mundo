import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Prueba de GidGrid', () => {
	const title = 'Titulo';
	const url = 'Url';
	const wrapper = shallow(<GifGridItem title={title} url={url} />);

	test('Debe Generar el componente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('titulo en el parrafo', () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(title);
	});

	test('image debe contener title y url', () => {
		const img = wrapper.find('img');
		expect(img.prop('src')).toBe(url);
		expect(img.prop('alt')).toBe(title);
	});

	test('Debe contener la clase', () => {
		const clasesEsperadas = 'card animate__animated animate__bounce';
		const div = wrapper.find('div');
		const className = div.prop('className');
		expect(className).toBe(clasesEsperadas);
	});
});
