import express from 'express';
import messageRoutes from './routes/messageRoutes';
import errorHandler from './middleware/errorHandler';
import sanitizeBody from './middleware/sanitizeBody';
import apiLimiter from './config/apiRateLimiter';
import cors from 'cors';
import path from 'path';
import compression from 'compression';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swaggerOptions';
import helmet from "helmet";

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(compression());
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(sanitizeBody);
app.use(apiLimiter);

app.use('/messages', messageRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(errorHandler);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

export default app;
