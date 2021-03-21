import { useFetcchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('useFetcchGifs', () => {
	test('should be resturn arreglo', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetcchGifs('Naruto'));
		await waitForNextUpdate();
		const { data, loading } = result.current;
		expect(data.length).toEqual(10);
		expect(loading).toBeFalsy();
	});
});
