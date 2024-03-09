import mongoose from 'mongoose';

const EmployeeSchema = mongoose.Schema({
    name:String,
    email:String,
    mobileno:Number,
    designation:String,
    gender:String,
    course:String,
    date:String,
    img:String
})
const Emp = mongoose.model('emp', EmployeeSchema);

export default Emp;