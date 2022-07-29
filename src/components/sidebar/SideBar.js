import React, {useState, useEffect} from 'react'
import { SideBarContainer, SideMenuContainer, SideMenuOptions, UnderBar } from '../../styles'
import {motion} from 'framer-motion'

const SideBar = (props) =>{
  const menu = [
    {title:"Welcome", selected:true, id:"welcome", delay:.25},
    {title:"About Me", selected:false, id:"about", delay:.5},
    {title:"Projects", selected:false, id:"projects", delay:.75},
    {title:"Get in Touch", selected:false, id:"contact", delay:1}
  ]
  const [sideMenu,setSideMenu] = useState([...menu])

  useEffect(() => {
    const menu1 = sideMenu.map((e)=>{
      if (e.id === props.value) return {...e,selected:true}
      else return {...e,selected:false}
    })
    setSideMenu([...menu1])
  }, [props.value])

  const variants = {
    visible:{transition:{staggerChildren: 0.5,}},
  }

  const childVariants = {
    visible:{opacity:1, x:0,},
    hidden:{opacity:0,x:-50}
  }
  
  return (
    <SideBarContainer>
      <motion.div variants={variants} initial={'hidden'} animate={'visible'}  style={{height:'100%'}}>
        <SideMenuContainer>
          {sideMenu.map((e,index)=>
          <motion.div variants={childVariants} style={{width:'100%'}}>
            <SideMenuOptions key={index} href={"#" + e.id} selected={e.selected} >
            {e.title}  
            </SideMenuOptions>
          </motion.div>
          )}
        </SideMenuContainer>
      </motion.div>
    </SideBarContainer>
  ) 

}

export default SideBar