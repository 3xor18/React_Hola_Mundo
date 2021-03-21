import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('GifExpertApp test', () => {
	test('should be 2 elm', () => {
		const defaultCategory = ['naruto', 'goku'];
		const wrapper = shallow(<GifExpertApp defaultCategory={defaultCategory} />);
		expect(wrapper.find('GifGrid').length).toBe(defaultCategory.length);
	});
});
