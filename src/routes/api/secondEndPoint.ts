import express from 'express';
const secondEndPoint = express.Router();
secondEndPoint.get('/',(req,res)=>{
    res.send('firstEndPoint');
});
export default secondEndPoint;