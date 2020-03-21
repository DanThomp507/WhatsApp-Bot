import { Router } from 'express';
import WhatsappBot from '../controllers/WhatsappBot';

const botRouter = Router();

console.log(WhatsappBot.googleSearch)
botRouter.post('/incoming', WhatsappBot.googleSearch);

export default botRouter;