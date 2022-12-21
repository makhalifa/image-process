import supertest from 'supertest'
import app from '../index'

const req = supertest(app)

describe('GET /', () => {
    it('should return 200 OK', async () => {
        const res = await req.get('/')
        expect(res.status).toBe(200)
    })

    it('should return 404 Not Found', async () => {
        const res = await req.get('/not-found')
        expect(res.status).toBe(404)
    })
})
