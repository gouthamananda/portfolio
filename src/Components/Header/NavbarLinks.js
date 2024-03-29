import HomeIcon from '@mui/icons-material/Home';
import ProjectIcon from '@mui/icons-material/AccountTree';
import ContactIcon from '@mui/icons-material/ContactPage';
import MSCIcon from '@mui/icons-material/Handyman';

const NavbarLinks=[
    {text:'Home',path:'/',icon:<HomeIcon/>},
    {text:'My Story',path:'/story',icon:<ContactIcon/>},    
    {text:'Projects',path:'/projects',icon:<ProjectIcon/>},
    {text:'MSC PATRAN & NASTRAN',path:'/msc',icon:<MSCIcon/>},
    {text:'ABAQUS',path:'/abaqus',icon:<ProjectIcon/>},  
];

export default NavbarLinks;