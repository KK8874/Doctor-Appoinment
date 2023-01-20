
import book from '../model/Book'
import paginate from 'mongoose-paginate-v2';
import mongoose from 'mongoose';


//book add
export const addbook = async (req, res) => {
    const userData = new book({
        titel: req.body.titel,
        author: req.body.author,
        genre: req.body.genre,
        price: req.body.price,

    })
    const userDetails = await userData.save();
    try {
        res.send({
            status: 200,
            message: "book add successfull",
            result: userDetails
        })
    }
    catch (e) {
        throw e
    }
}
//get list from dbs
export const booklist = async (req, res) => {
    try {
        const userdata = await book.find();
        res.send({
            status: 200,
            message: "list geting successfully",
            result: userdata
        })

    }
    catch (e) {
        throw e

    }
}
// export const booklist = async (req, res) => {
//     try {
//         const userdata = book.paginate({},
//              { 
//                  sort:{titel:req.body.sort},
//             page:req.body.page,
//             limit:req.body.limit},(err, result) => {

//              res.send({
//                  status:200,
//                  message:"geting pasination list ",
//                  result:result
//              })
              
//         })
//     }
//     catch (e) {
//         throw e

//     }
// }
//Get detailbyid-----
export const getDetailById = async (req, res) => {

    try {
        var _id = req.query._id
        const id = await book.findById(_id);
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
//update collection
export const UpdateBook = async (req, res) => {

    try {
        let jsondata = {};

        if (req.body.titel) {
            jsondata.titel = req.body.titel;
        }
        if (req.body.author) {
            jsondata.author = req.body.author;
        }
        if (req.body.genre) {
            jsondata.genre = req.body.genre;
        }
        if (req.body.price) {
            jsondata.price = req.body.price;
        }

        book.updateOne({ _id: req.body._id },
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

//delete detabse
export const deleteBook = async (req, res,) => {

    try {
        let _id = req.params.id
        console.log(_id)
        // book.findOne({ _id: req.body._id }),
        const user = await book.deleteOne({ _id: mongoose.Types.ObjectId(_id) })
         if(user){
            res.send({
                message:"document deleted bro!"
            })
         }
                
    }
    catch (e) {
        throw e
    }
}
