import React, {useRef,useEffect,useState} from 'react'
import {LayoutContainer} from '../../styles'
import SideBar from '../sidebar/SideBar'
import List from '../list/List'

const Layout = (props) =>{
  const [value, setValue] = useState(null)
  useEffect(() => {
    const observer = new IntersectionObserver(callback,{threshold:0.3})
    observer.observe(ref.current.getRef1())

    observer.observe(ref.current.getRef3())
    observer.observe(ref.current.getRef4())
  }, []);

  const callback = (entries, observer) =>{
    console.log(entries)
    const [ entry ] = entries;
    if (entry.isIntersecting){
      setValue(entry.target.id)
    }
  }
  const ref = useRef(null)

  return (
    <LayoutContainer>
      <SideBar value={value}/>
      <List ref={ref}/>
    </LayoutContainer> 
  )
}

export default Layout