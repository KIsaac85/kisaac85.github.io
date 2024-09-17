

import barTender from "../images/liquor_100dp_5F6368.png"
import note from "../images/description_100dp_5F6368.png"
import RevitAPI from "../images/Revit API.png";
import MyPortofolio from "../images/portofolio.png";


const projects = [
    {
        id :0,
        link: "github.com/KIsaac85/Karim-Portfolio",
        title:"My Portofolio",
        description:"Website that uses React, MUI and other features",
        picSource: MyPortofolio,
        websiteCode: "github.com/KIsaac85/Karim-Portfolio"
    },
    {
    id :1,
    link: "github.com/KIsaac85/The-bartender",
    title:"The Bartender",
    description:"Website that uses Axios to contact another API DB",
    picSource: barTender,
    websiteCode: "github.com/KIsaac85/The-bartender"
},
{
    id :2,
    link: "github.com/KIsaac85/Your-Block-Note",
    description:"Website illustrates the backend server using Express",
    title: "Your Block Note",
    picSource: note,
    websiteCode: "github.com/KIsaac85/Your-Block-Note"
},
{
    id :3,
    link: "github.com/KIsaac85",
    description:"Plugins for Revit API using C#",
    title: "ٌRevit API",
    picSource:RevitAPI,
    websiteCode: "youtube.com/channel/UChSy8rsJGI6V2lKz9MPcPcw"
},

]

export default projects;