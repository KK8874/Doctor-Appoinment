import customer from '../model/Customer'
import mongoose from 'mongoose';
import easyinvoice from 'easyinvoice';



export const customerSignup = async (req, res) => {
    try {
      const customerData = new customer({
        customername:req.body.customername,
        customerdesignation:req.body.customerdesignation,
        customeremail:req.body.customeremail,
        customeraddress: req.body.customeraddress,
        phone:req.body.phone
      });
  
      const result = await customerData.save();
      res.send({
        status: true,
        message: " Registered Successfull",
        result: result,
      });
    } catch (err) {
      console.log(err);
    }
  };

  






export const customerlist = async (req, res) => {
    try {
        const customerdata = await customer.find();

        
        
        // Estimate the total number of documents in the collection
        // and print out the count.
        const estimate = await customer.estimatedDocumentCount();
        console.log(`Estimated number of documents in the movies collection: ${estimate}`);
        const countCanada = await customer.countDocuments({name:"kk"});
        console.log(`Number of movies from Canada: ${countCanada}`);

        res.send({
            status: 200,
            message: "customer list geting successfully",
            result: customerdata
        })

    }
    catch (e) {
        throw e

    }
}



export const deleteCustomer = async (req, res,) => {

    try {
        let _id = req.params.id
        console.log(_id)

        const Customer = await customer.deleteOne({ _id: mongoose.Types.ObjectId(_id) })
        if (Customer) {
            res.send({
                message: "document deleted bro!"
            })
        }

    }
    catch (e) {
        throw e
    }
}


//updates
export const UpdateCustomer = async (req, res) => {

    try {
        let jsondata = {};

        if (req.body.name) {
            jsondata.name = req.body.name;
        }
        if (req.body.email) {
            jsondata.email = req.body.email;
        }
        if (req.body.phone) {
            jsondata.phone = req.body.phone;
        }


        customer.updateOne({ _id: req.body._id },
            { $set: jsondata },
            { new: true },
            (err, updatedlist) => {
                if (err) {
                    res.send({
                        status: 404,
                        message: "Failed",
                        result: err
                    })
                } else {
                    res.send({
                        status: 200,
                        message: "Updated Successfully",
                        result: updatedlist
                    })
                    console.log(updatedlist)
                }
            })
    }
    catch (e) {
        throw e
    }
}

export const getDetailById = async (req, res) => {

    try {
        var _id = req.query._id
        const id = await customer.findById(_id);
        console.log(id)
        res.send({
            status: true,
            message: "user id grting successfully",
            result: id
        })
    }
    catch (e) {
        return res.send({
            status: false,
            message: "error",
            result: e
        })
    }

}
