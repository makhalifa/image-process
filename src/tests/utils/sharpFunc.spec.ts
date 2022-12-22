import sharpIt from './../../utils/sharpFunc'

describe('Sharp Function', () => {
    it('sharp function should not throw error', async () => {
        expect(function () {
            sharpIt(
                'sea',
                200,
                200,
                (err: Error) => {
                    if (err) {
                        throw err
                    }
                },
                (resizedImg: string) => {
                    console.log(resizedImg)
                }
            )
        }).not.toThrowError()
    })
})
