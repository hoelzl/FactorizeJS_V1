import factorize from './factorize'
import { tsExternalModuleReference } from '@babel/types';

describe('factorize', () => {
    test('1 has no prime factors', () => {
        expect(factorize(1)).toStrictEqual([]);
    });
});