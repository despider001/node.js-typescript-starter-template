import { Router } from 'express';
import { validateRequestBody } from '../middleware/validateRequestBody';
import { paramValidation } from '../validations/paramValidation';
import { sendMessage } from '../controllers/messageController';

const router = Router();

/**
 * @swagger
 * /messages:
 *   post:
 *     summary: Sends a message
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Message sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

router.post('/', validateRequestBody(paramValidation.message), sendMessage);

export default router;
