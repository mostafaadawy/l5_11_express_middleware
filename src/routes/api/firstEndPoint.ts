import express from 'express';
const firstEndPoint = express.Router();
firstEndPoint.get('/',(req,res)=>{
    res.send('firstEndPoint');
});
export default firstEndPoint;