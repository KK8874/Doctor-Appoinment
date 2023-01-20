import express from 'express'
const router = express.Router();

import { addbook,booklist,getDetailById,UpdateBook,deleteBook} from '../controller/book';


router.post("/addbook",addbook);
router.get("/booklist",booklist);
router.get("/getDetailById",getDetailById);
router.put("/UpdateBook",UpdateBook);
router.delete("/deleteBook/:id",deleteBook);


export default router;
