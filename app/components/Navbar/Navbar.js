import React , {useState , useEffect, useSyncExternalStore} from 'react'
import Image from 'next/image'

// Importing React Icons
import {MdNotifications} from "react-icons/md"
import {BsSearch} from "react-icons/bs"
import {CgMenuLeft ,CgMenuRight } from "react-icons/cg"

// Importing Images
import images  from "../../img"

// Navbar Component Imports
import Discover from './Discover/Discover'
import HelpCenter from './HelpCenter/HelpCenter'
import Notification from './Notification/Notification'
import Profile from './Profile/Profile'
import Sidebar from './Sidebar/Sidebar'

// Style File Import
import Style from "./module.navbar.css"
import Button from '../Button/Button'
import { stringifyCookie } from 'next/dist/compiled/@edge-runtime/cookies'

const Navbar = () => {

    // USESTATES
    const [discover , setdiscover] = useState(false);
    const [help , sethelp] = useState(false);
    const [notification , setnotification] = useState(false);
    const [profile  , setprofile] = useState(false);
    const [openSidebar , setopenSidebar] = useState(false);


    const openMenu = (event) => {
        const btnText = e.target.innerText;

        switch(btnText){
            case "Discover":
                setdiscover(true)
                sethelp(false)
                setprofile(false)
                setnotification(false)

            case "Help Center":
                setdiscover(false)
                sethelp(true)
                setprofile(false)
                setnotification(false)

            case "Profile":
                setdiscover(false)
                sethelp(false)
                setprofile(true)
                setnotification(false)

            case "Notification":
                setdiscover(false)
                sethelp(false)
                setprofile(false)
                setnotification(true)
            default:
                setdiscover(false)
                sethelp(false)
                setprofile(false)
                setnotification(false)

        }

       
    }


    const openNotification = () => {
        if(!notification){
            setnotification(true)
            setdiscover(false)
            sethelp(false)
            setprofile(false)
        }else{
            setnotification(false)
        }
    }


    const openProfile = () => {
        if(!profile){
            setnotification(false)
            setdiscover(false)
            sethelp(false)
            setprofile(true)
        }else{
            setprofile(false)
        }
    }


    const opensidebar = () => {
        if(!openSidebar){
            setnotification(false)
            setdiscover(false)
            sethelp(false)
            setprofile(false)
            setopenSidebar(true)
        }else{
            setopenSidebar(false)
        }

    }




  return (
    <div className={Style.Navbar}>

        <div className={Style.NAVBAR_CONTAINER}>

        {/* Navbar left  */}
        <div className={Style.NAVBAR_CONTAINER_LEFT}>

            {/* Logo Div */}
            < div className={Style.logo}>
            <Image src={images.logo} alt={"ArtSnap"} width={100} height={100} />   
            </div> 

            {/* Input Div */}
            <div className={Style.NAVBAR_CONTAINER_LEFT_BOX_INPUT}>
                <div className={Style.NAVBAR_CONTAINER_LEFT_BOX_INPUT_BOX}>
                    <input  type='text' placeholder='Search...' />
                    <BsSearch onClick={() => {}} className={Style.SEARCH_ICON}/>
                </div>
            </div>
               
         </div> {/* Navbar left End   */}


        {/* Navbar Right  */}
        <div className={Style.NAVBAR_CONTAINER_RIGHT}>

            {/* Discover  */}
            <div className={Style.NAVBAR_CONTAINER_RIGHT_DISCOVER}>
                <p onClick={(event) => openMenu(event)}>Discover</p>
                {discover && (
                        <div className={Style.NAVBAR_CONTAINER_RIGHT_DISCOVER_BOX}>
                         <Discover/>
                        </div>
                )}
            </div>
              {/* Discover End   */}
            

            {/* HELPCENTER */}
            <div className={Style.NAVBAR_CONTAINER_RIGHT_HELPCENTER}>

                <p onClick={(e) => openMenu(e)}>Help Center</p>
                {help && (
                    <div className={Style.NAVBAR_CONTAINER_RIGHT_HELPCENTER_BOX}>
                        <HelpCenter/>
                    </div>
                )}
            </div>
             {/* HELPCENTER END */}


            {/* NOTIFICATION */}
            <div className={Style.NAVBAR_CONTAINER_RIGHT_NOTIFICATION}>
                <MdNotifications onClick={() => openNotification()} className={Style.NAVBAR_CONTAINER_RIGHT_NOTIFICATION_ICON} />
                {help && (
                    <div className={Style.NAVBAR_CONTAINER_RIGHT_NOTIFICATIONBOX}>
                        <Notification/>
                    </div>
                )}
            </div>
             {/* NOTIFICATION END */}


            {/* CREATE BUTTON SECTIONS */}
            <div  className={Style.NAVBAR_CONTAINER_RIGHT_BUTTON} > 
                   
            </div>
            

             {/* PROFILE */}
             <div className={Style.NAVBAR_CONTAINER_RIGHT_PROFILE}>

                <div className={Style.NAVBAR_CONTAINER_RIGHT_PROFILE_BOX}>
                    <Image className={Style.NAVBAR_CONTAINER_RIGHT_PROFILE_ICON} src={images.user1} alt='Profile' width={40} height={40} onClick={() => openProfile()} />

                    {profile && <Profile/>}
                </div>
            </div>
            {   /* PROFILE END */}


            {/* MENU BUTTON */}
            <div className={Style.NAVBAR_CONTAINER_RIGHT_MENUBUTTON}>
                    <CgMenuRight className={Style.MENUBUTTON} onClick={() => opensidebar()} />

            </div>
             {/* MENU BUTTON END  */}


            </div>
        </div>
 
        {/* SIDEBAR */}
        {openSidebar && (
            <div className={Style.SIDEBAR}>
                <Sidebar setOpenSideMenu={setopenSidebar} />
            </div>
        )}
         {/* SIDEBAR END */}



    </div>
  )
}

export default Navbar