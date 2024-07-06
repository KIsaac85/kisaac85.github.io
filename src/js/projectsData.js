import LocalBarIcon from '@mui/icons-material/LocalBar';
import dices from "../images/dices.jpg"
import ejs from "../images/ejs.jpeg"
import REST from "../images/REST-API.png"
import barTender from "../images/liquor_32dp_5F6368.png"
import ReactJp from "../images/React.png";


const projects = [
    {
    id :0,
    link: "github.com/KIsaac85/The-bartender",
    title:"The Bartender",
    description:"Website that uses Axios to contact another API DB",
    picSource: barTender,
    websiteCode: "github.com/KIsaac85/The-bartender"
},
{
    id :1,
    link: "facebook.com",
    picSource: dices,
    websiteCode: "google.com"
},
{
    id :2,
    link: "facebook.com",
    picSource: REST,
    description:"hello",
    websiteCode: "google.com"
},
{
    id :3,
    link: "facebook.com",
    picSource: ejs,
    description:"hello",
    websiteCode: "google.com"
},
{
    id :4,
    link: "facebook.com",
    description:"hello",
    picSource: ReactJp,
    websiteCode: "google.com"
}
]

export default projects;