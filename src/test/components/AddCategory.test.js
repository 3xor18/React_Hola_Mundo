import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Test AddCategory', () => {
	const setcategories = jest.fn();
	let wrapper = shallow(<AddCategory setcategories={setcategories} />);

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setcategories={setcategories} />);
	});

	test('evaluar cambios', () => {
		const input = wrapper.find('input');
		const value = 'Hola Mundo';
		input.simulate('change', { target: { value } });
	});

	test('No debe postear', () => {
		wrapper.find('form').simulate('submit', { preventDefault() {} });
		expect(setcategories).not.toHaveBeenCalled();
	});

	test('llamar SetCategory y limpiar input', () => {
		const value = 'Hola mundo';
		const input = wrapper.find('#texto');
		input.simulate('change', { target: { value } });
		const submit = wrapper.find('form');
		submit.simulate('submit', { preventDefault() {} });
		expect(setcategories).toHaveBeenCalled();
		expect(input.prop('value')).toBe('');
	});
});
