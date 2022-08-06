import React, {useRef,useEffect,useState} from 'react'
import {LayoutContainer} from '../../styles'
import SideBar from '../sidebar/SideBar'
import List from '../list/List'
import { AnimationContext } from '../../animationContext'
import Intro from '../intro/Intro'

const Layout = (props) =>{
  const [intro, setIntro] = useState(true)
  const [value, setValue] = useState(null)
  useEffect(() => {
    setTimeout(() => {
      setIntro(false)
    }, 4400);
    if (!intro){
      const {hash} = window.location;
      if (hash){
        setValue(hash.split('#')[1])
      }
      const observer = new IntersectionObserver(callback,{threshold:0.1,
        })
      observer.observe(ref.current.getRef1())
      observer.observe(ref.current.getRef2())
      observer.observe(ref.current.getRef3())
      observer.observe(ref.current.getRef4())
    }
  }, [intro]);

  const callback = (entries, observer) =>{
    const [ entry ] = entries;
    const {isVisible,isIntersecting} = entry
    // console.log(isVisible,isIntersecting)
    if (isIntersecting || isVisible){
      setValue(entry.target.id)
  
    }
  }
  const ref = useRef(null)

  return (
    
     intro ? <Intro/> 
     : <LayoutContainer>
    <SideBar value={value}/>
    <AnimationContext.Provider value={value}>
      <List ref={ref}/>
    </AnimationContext.Provider>
  </LayoutContainer> 
  )
}

export default Layout