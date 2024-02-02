const express=require("express");
const authRoute=require("./auth.route");
const user=require("./user.route")
const role=require("./role.route")
const captchaRoute=require("./captcha.route")
const accessRoute =require("./accessassignment.route")
const moduleRoute = require("./module.route")
const organisationRoute = require("./organistion.route");
const moduleConfigRoute=require("./moduleConfig.route")
const DefenceExportAPI =require('./defenceExportApiConfig.route')
const DefenceOffsetData = require('./defenceOffsetData.route')


const router=express.Router();

const defaultRoutes=[
    {
        path:"/auth",
        route:authRoute
    },
    {
        path:"/user",
        route:user
    },
    {
        path:"/role",
        route:role
    },
    {
        path:"/captcha",
        route:captchaRoute
    },
    {
        path:"/access-assignment",
        route:accessRoute
    },
    {
        path:"/module",
        route: moduleRoute
    },
    {
        path:"/organisation",
        route: organisationRoute
    },
    {
        path:"/module-config",
        route: moduleConfigRoute
    },
   //

   {
    path:"/Defence-exportAPI",
    route:DefenceExportAPI
},
{
    path:"/Defence-OffsetData",
    route:DefenceOffsetData
},
];

defaultRoutes.forEach((route)=>{
    router.use(route.path,route.route);
});

module.exports=router