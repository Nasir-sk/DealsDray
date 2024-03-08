import express from 'express';
import mongoose from 'mongoose';
import config from './db/config.js'
import User from './db/model/Users.js';
import Emp from './db/model/Employees.js';
import cors from 'cors';
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

app.get('/employees/count', async (req, resp) => {
    try {
        // Count documents in the collection
        const count = await Emp.countDocuments({});
        resp.json({ count: count });
        resp.send(count)
    } catch (err) {
        console.error('Error counting documents:', err);
        resp.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(4500);