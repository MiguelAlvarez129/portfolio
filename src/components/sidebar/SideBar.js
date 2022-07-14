import React, {useState, useEffect} from 'react'
import { SideBarContainer, SideMenuContainer, SideMenuOptions, UnderBar } from '../../styles'

const SideBar = (props) =>{
  const menu = [
    {title:"Welcome", selected:true, id:"first-div", delay:.25},
    {title:"About Me", selected:false, id:"second-div", delay:.5},
    {title:"Projects", selected:false, id:"third-div", delay:.75},
    {title:"Get in Touch", selected:false, id:"fourth-div", delay:1}
  ]
  const [sideMenu,setSideMenu] = useState([...menu])

  useEffect(() => {
    const menu1 = sideMenu.map((e)=>{
      if (e.id === props.value) return {...e,selected:true}
      else return {...e,selected:false}
    })
    setSideMenu([...menu1])
  }, [props.value])

  return (
    <SideBarContainer>
    <SideMenuContainer>
      {sideMenu.map((e,index)=>
      <SideMenuOptions key={index} href={"#" + e.id} selected={e.selected} delay={e.delay} duration={e.duration}>
       {e.title}  
       </SideMenuOptions>)}
    </SideMenuContainer>
    </SideBarContainer>
  ) 

}

export default SideBar