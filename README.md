# Image Processing

## Introduction

This is a simple image processing library written in Node.js.

## usage

### Install dependencies

```bash
npm install
```

### Run the server

```bash
npm run start
```

### Run the tests

```bash
npm run test
```

## API

### GET /api/resize

## Query parameters:

-   `filename` - the name of the image to process
-   `width` - the width of the image to return
-   `height` - the height of the image to return

## Example

http://localhost:3000/?filename=sea&width=200&height=200

## Query validation

The query parameters are validated using the [express-validator](https://www.npmjs.com/package/express-validator) library.

```javascript
    query('filename')
        .exists().withMessage('filename required')
        .isString().withMessage('filename must be a string'),
    query('width')
        .exists().withMessage('width required')
        .isNumeric().withMessage('width must be a number'),
    query('height')
        .exists().withMessage('height required')
        .isNumeric().withMessage('height must be a number'),
```

## Images to process

The images to process are located in the `assets/images` directory.

## Tests

The tests are located in the `test` directory.

<!-- example for test -->

```javascript
describe('GET /', () => {
  it('should return 200', (req) => {
    const res = await request(app).get('api/resize/?filename=sea&width=200&height=200');
    expect(res.status).toBe(200);
  });
});
```

## Dependencies

-   [sharp](https://www.npmjs.com/package/sharp) - image processing library
-   [express](https://www.npmjs.com/package/express) - web framework
-   [jasmine](https://www.npmjs.com/package/jasmine) - test framework
-   [supertest](https://www.npmjs.com/package/supertest) - HTTP assertions
-   [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger
-   [dotenv](https://www.npmjs.com/package/dotenv) - loads environment variables from a .env file
-   [nodemon](https://www.npmjs.com/package/nodemon) - restarts the server when files change
-   [eslint](https://www.npmjs.com/package/eslint) - linter
-   [prettier](https://www.npmjs.com/package/prettier) - code formatter
