import { Router } from 'express';
import { list , create, update, remove} from '../../../Controller/api/V1/Messages.js';
const router = Router()

// This is a simple router for the Messages API

//get messages 
router.get('/', list);

//post messages
router.post('/', create);

//put messaeges
router.put('/:id', update);

//delete messages
router.delete('/:id', remove);

export default router;