# Node.js & Typescript setup

## Installation & Setup

### Prerequisites:

- Node.js

### Steps:

**Install Dependencies**

   ```bash
   npm install
   ```

**Building the Project**

To compile the TypeScript files:

```bash
npm run build
```


**Test**
```bash
npm test
```

**Starting the Server**

```bash
npm start
```


## Access Endpoints

**Swagger API: `http://localhost:3000/api-docs/`** <br>
**Chat UI: `http://localhost:3000/`** <br>
**Message API: `http://localhost:3000/messages`** <br>


## Frontend code resides inside public directory

**Note:** Chat ui ref: https://codepen.io/chuckxD/pen/abpRBJq

Max char accepted: 499


## Things that are taken into consideration:


1. **Code and Architecture**:
   - **Separation of Concerns**: routes, controllers, config etc
   - **Validation**: `joi`
   - **Error Handling**: Custom Error handling

2. **Security**:
   - **Data Validation & Sanitization**: `anitize-html`
   - **Rate Limiting**: `express-rate-limit`.
   - **CORS**: `cors`
   - **Content Security Policy (CSP)**: `helmet`

3. **Performance**:
   - **Compression**: `compression`

4. **Reliability and Scalability**:
   - **Logging**: `pino` with file rotation

5. **Testing**:
   - **Integration Testing**: `supertest`

6. **Documentation and Developer Experience**:
   - **API Documentation**: `swagger`
   - **README.md**


## Author
Sadiqur Rahman