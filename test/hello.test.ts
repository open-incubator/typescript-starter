import { hello } from '../src/hello'

describe('Hello world', () => {
    it('should return hello, world!', () => {
        expect(hello).toEqual('Hello, world!')
    })
})