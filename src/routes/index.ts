import express from "express";
import firstEndPoint from "./api/firstEndPoint";
import secondEndPoint from "./api/secondEndPoint";
import thirdEndPoint from "./api/thirdEndPoint";

const routes =express.Router();
routes.use('/firstEndPoint', firstEndPoint);
routes.use('/secondEndPoint', secondEndPoint);
routes.use('/thirdEndPoint', thirdEndPoint);

routes.get('/', (req, res)=>{
    res.send('Home')
});
export default routes;