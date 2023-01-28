//schema moongo

const mongoos=require('mongoose');
const schema=mongoos.Schema;

let clubSchema=new schema(
{
    name:{type:String},
    email:{type:String},
    desig:{type:String},
    jdate:{type:String}
}
)

module.exports =mongoos.model('students',clubSchema); //db from mongo where created or not
