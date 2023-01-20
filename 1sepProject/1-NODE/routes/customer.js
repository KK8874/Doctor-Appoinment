import express from 'express';
import {customerSignup,customerlist,deleteCustomer,UpdateCustomer,getDetailById} from '../controller/customer'
const router = express.Router();


 router.post("/customerSignup",customerSignup)
 router.get("/customerlist",customerlist)
 router.delete("/deleteCustomer/:id",deleteCustomer)
 router.put("/UpdateCustomer/",UpdateCustomer)
 router.get("/getDetailById",getDetailById)


export default router;
