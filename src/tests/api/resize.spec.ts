import supertest from 'supertest'
import app from '../../index'

const req = supertest(app)

describe('GET /api/resize', () => {
    // it('should return 400 error message', async () => {
    //     const res = await req.get('/api/resize')
    //     // filename, width and height are required in query
    //     expect(res.status).toBe(400)
    // })

    it('should return 200 ok', async () => {
        const res = await req.get('/api/resize?filename=sea&width=500&height=500')
        expect(res.statusCode).toBe(200)
    })

    // it('should return 404 img Not Found', async () => {
    //     const res = await req.get('/api/resize?filename=sea&width=500&height=500')
    //     expect(res.status).toBe(404)
    // })
})
