import factorize from './factorize'
import { tsExternalModuleReference } from '@babel/types';

describe('factorize', () => {
    test('1 has no prime factors', () => {
        expect(factorize(1)).toStrictEqual([]);
    });

    test('2 is prime', () => {
        expect(factorize(2)).toStrictEqual([2]);
    });

    test('3 is prime', () => {
        expect(factorize(3)).toStrictEqual([3]);
    });
});