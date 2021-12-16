import express from 'express';
const thirdEndPoint = express.Router();
thirdEndPoint.get('/',(req,res)=>{
    res.send('firstEndPoint');
});
export default thirdEndPoint;