import { Button } from '@chakra-ui/react'
import styled, {css} from 'styled-components'
import { keyframes } from 'styled-components'
import backgroundImage  from './assets/img/background.png'

const sideBarBg = '#190f77'
export const LayoutContainer = styled.div`
  display:flex;
  justify-content:flex-start;
  width:100%;
  height:100vh;
`

export const SideBarContainer = styled.div`
  height:100%;
  width:100%;
  max-width:350px;
  background-color:${sideBarBg};
  position: fixed;
  top: 0;
  left: 0;
  z-index:10;
`

export const ListContainer = styled.div` 
  height: 1000px;
  width:100%;
  margin-left:350px;
`

export const WelcomeDiv = styled.div`
  width:100%;
  position:fixed;
  top:0;
  background-position:center ;
  min-height:100vh;
  background-color:#0072d1;
  background-image:url(${backgroundImage});
  background-size: cover;
  /* background-position: 0 -105px; */
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  
  `
  
  const bounce = (height) => keyframes`
  
   from {
    transform: translatey(0px);
   }
   to {
    transform: translatey(${height}px);
   }
  `

export const AnimatedCircle = styled.div`
  z-index: 1;
  border-radius: 50%;
  display: inline-block;
  /* height: 20px;
  width: 20px;
  background: #06678f; */
  position: fixed;
  animation: ${props => bounce(props.height)} 2s alternate infinite ease-in-out;
  ${(props)=> `
  height:${props.height}px;
  width:${props.width}px;
  background:${props.background};
  bottom:${props.bottom}%;
  right:${props.right}%;
  filter:${props.filter}
  `
  }
`

export const ColorDiv = styled.div`
  /* margin-top: 100vh; */
  position: relative;
  
  z-index: 1;
  width: 100%;
  color:white;
  padding: ${props => props.padding } ;
  height: ${(props)=> props.height ? props.height : '500px'};
  background: ${props => props.background ? props.background : '#729efd' };
  font-family:"Montserrat";
  h1, h2, h3, h4, h5, h6 {
  font-size: revert;
  font-weight: revert;
  }

  h1{
    font-weight:400;
  }
`

  export const HelloDiv = styled.div`
  position: fixed;
  z-index: 1;
  width:100%; 
  height:100px;
  bottom: 50%; 
  padding-left: 120px;
  color: white;
  & h1{
    font-size:xxx-large;
    font-weight: lighter;
    margin: 0;
    letter-spacing: 5px;
    ${() => entranceAnimation({delay:1})};
  }
  & h2{
    font-size:xx-large;
    margin: 0;
    font-weight: lighter;
    margin-top: -16px;
    margin-left: 33px;
    line-height: 50px;
    ${() => entranceAnimation({delay:2})};
  }
`
export const AnimatedButton = styled(Button)`
  margin-top:10px;
  background:${sideBarBg} !important;
  font-weight: lighter !important; 
   ${() => entranceAnimation({delay:3})};
`

  export const Footer = styled.div`
    height:300px;
    background:indigo;
    z-index: 2;
    position: relative;
  `

  export const SideMenuContainer = styled.div`
    top: 30%;
    display: flex;
    flex-direction: column;
    align-items: end;
    position: relative;
    font-size: larger;
    color: white;
  `


const underAnimation = keyframes`
from {
  width:0;
} 
 
to {
  width: 100%;
}
`

const animation = css`
  animation: ${underAnimation} 0.5s reverse forwards
`

const entrance = keyframes`
  from { 
    transform:translatey(100px);
    opacity:0 
  } 

  to {
    transform:translatey(0);
    opacity:1 
  }
` 

const entranceAnimation = ({delay}) => css`
  animation:${entrance} ${delay}s forwards
`

export const SideMenuOptions = styled.a` 
  display:block;
  margin: 10px;
  text-decoration:none;
  text-align:end;
  color:white;
  padding: 0 20px;
  width:85%;
  font-weight:400; 
  letter-spacing: 5px;
  font-size:smaller;
  ${props => entranceAnimation(props)};
   

  &::after{
    content: '';
    top: 7px;
    height:10px;
    width:100%;
    background-color:${sideBarBg};
    display:block;
    position: relative;
    ${props => props.selected && animation};
    
  }

  &::before{
    content: '';
    height:5px;
    width:100%;
    border-radius:2px;
    background:linear-gradient(80deg,#3bbcff 18%,#3925ff 88%);
    display:block;
    position: relative;
    top: 36px;
  }
`
export const UnderBar = styled.div`
  top: 7px;
  height:5px;
  width:100%;
  border-radius:2px;
`
