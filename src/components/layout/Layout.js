import React, {useRef,useEffect,useState} from 'react'
import {LayoutContainer} from '../../styles'
import SideBar from '../sidebar/SideBar'
import List from '../list/List'
import { AnimationContext } from '../../animationContext'

const Layout = (props) =>{
  const [value, setValue] = useState(null)
  useEffect(() => {
    const observer = new IntersectionObserver(callback,{threshold:0.1,
      })
    observer.observe(ref.current.getRef1())
    observer.observe(ref.current.getRef2())
    observer.observe(ref.current.getRef3())
    observer.observe(ref.current.getRef4())
  }, []);

  const callback = (entries, observer) =>{
    const [ entry ] = entries;
    const {isVisible,isIntersecting} = entry
    console.log(isVisible,isIntersecting)
    if (isIntersecting || isVisible){
      setValue(entry.target.id)
    }
  }
  const ref = useRef(null)

  return (
    <LayoutContainer>
      <SideBar value={value}/>
      <AnimationContext.Provider value={value}>
        <List ref={ref}/>
      </AnimationContext.Provider>
    </LayoutContainer> 
  )
}

export default Layout