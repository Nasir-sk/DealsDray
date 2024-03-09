import express from 'express';
import mongoose from 'mongoose';
import config from './db/config.js'
import User from './db/model/Users.js';
import Emp from './db/model/Employees.js';
import cors from 'cors';
import multer from 'multer'
// import path from 'path'
const upload = multer({ dest: 'uploads/' })
const app = express();
app.use(express.json());
app.use(cors())
console.log("api is working!!");

app.post('/signup', async(req, resp)=>{
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result)
})

app.post('/login', async(req,resp)=>{
    console.log(req.body);
    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body)
        if(user){
            resp.send(user)
        }else{
            resp.send({result:"no user found"})
        }
    }else{
        resp.send({result:"no user found"})
    }
})

app.post('/create-emp',async (req, resp)=>{
    let emp = new Emp(req.body);
    let result =  await emp.save();
    resp.send(result);
})

app.get('/emp-list', async (req, resp)=>{
    let emp = await Emp.find()
    if(emp.length>0){
        resp.send(emp)
    }else resp.send({result:"No products found"})
})

app.get('/edit-emp/:id', async (req, resp)=>{
    let result = await Emp.findOne({_id:req.params.id});
    if(result){
        resp.send(result)
    }else{
        resp.send({result:"No record found"})
    }
})

app.put('/edit-emp/:id', async (req, resp)=>{
    let result = await Emp.updateOne(
        {_id:req.params.id},
        { $set: req.body}
    )
    resp.send(result)
})
app.delete("/emp-list/:id", async (req, resp)=>{
    const result = await Emp.deleteOne({_id:req.params.id})
    resp.send(result)
})

app.get("/search/:key", async (req, resp)=>{
    let result = await Emp.find({
            "$or" : [
                {name: { $regex : req.params.key}},
                {email: { $regex : req.params.key}},
                {gender: { $regex : req.params.key}},
                {course: { $regex : req.params.key}},
                {designation: { $regex : req.params.key}},
            ]
        }); 
    resp.send(result)
})

// app.get('/employees/count', async (req, resp) => {
    
//         // Count documents in the collection
//         const count = await Emp.countDocuments({});
//         // resp.json({ count: count });
//         resp.send(count)
// });

app.get('/employees/count', async (req, res) => {
    try {
        // Count documents in the collection
        const count = await Emp.countDocuments({});
        res.json({ count: count });
    } catch (err) {
        console.error('Error counting documents:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// const storage = multer.diskStorage({
//     destination: (req, file, cb)=>{
//         cb(null, 'public/');
//     },
//     filename:(req, file, cb)=>{
//         cb(null, file.fieldname +"_"+ Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({
//     storage: storage
// });

// app.post('/upload', upload.single('file'), (req, resp)=>{
//     console.log(req.file)
// })


// Multer storage configuration

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/'); // Save uploaded files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Use original filename
    }
  });
  
  // Multer instance with storage configuration
//   const upload = multer({ storage: storage });
  
  // Define API endpoint to handle file uploads
  app.post('/upload', upload.single('file'), (req, res) => {
    // Handle file upload logic here
    res.send('File uploaded successfully');
  });

app.listen(4500);