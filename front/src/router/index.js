import { createBrowserRouter } from "react-router-dom";
import MainLayout from '@/pages/MainLayout';
import BookShareClub from '@/pages/BookShareClub';
import CookingCourseList from "../pages/CookingCourseList";
import ProfileManager from '@/pages/ProfileManager';
import PhoneList from '@/phone/PhoneList';

const router = createBrowserRouter([

  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        index:true,
        element:<ProfileManager/>
      },
      {
        path:"/ProfileManager",
        element:<ProfileManager/>
      },
      {
        path:"/BookShareClub",
        element:<BookShareClub/>
      },
      {
        path:"/CookingCourseList",
        element:<CookingCourseList/>
      }
    ]
  },
  {
      path:"/PhoneList",
      element:<PhoneList/>
  }

])

export default router;
