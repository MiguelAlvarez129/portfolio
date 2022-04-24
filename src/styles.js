import { Button } from '@chakra-ui/react'
import styled, {css} from 'styled-components'
import { keyframes } from 'styled-components'
import backgroundImage  from './assets/img/background.png'
import polygon from './assets/img/polygon.svg'

const sideBarBg = '#000331'

export const LayoutContainer = styled.div`
    height: 100%;
    width: 100%;
`

export const SideBarContainer = styled.div`
  position: fixed;
  flex:none;
  height:100vh;
  /* width:100%; */
  width:350px;
  background-color:${sideBarBg};
  top: 0; 
  left:0;
  z-index:10;
  @media (max-width:1250px){
    width:100%;
    height:53px;
    font-size:medium;
  }

  @media (max-width:650px){
    display:none;
  }
`

export const ListContainer = styled.div` 
  height: fit-content;
  width:100%;
  margin-left:350px;
  max-width: calc(100% - 350px);
  @media (max-width:1250px){
    max-width:100%;
    margin-left:0;
  }

`

export const WelcomeDiv = styled.div`
  width:calc(100% - 350px);
  /* max-width: calc(1360px - 350px); */
  position:fixed;
  top:0;
  background-position:center ;
  min-height:100vh;
  background-image:url(${polygon});
  background-size: cover;
  /* background-position: 0 -105px; */
  background-repeat: no-repeat;
  background-blend-mode: overlay; 
  @media (max-width:1250px){
    width:100%;
  }
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
  height:fit-content;
  z-index: 1;
  width: 100%;
  color:white;
  padding: ${props => props.padding } ;
  /* height: ${(props)=> props.height ? props.height : '500px'}; */
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
  position: absolute;

  overflow-wrap: break-word;
  height:100px;
  bottom: 60%; 
  padding-left: 120px;
  color: white;
  & h1{
    font-size:xxx-large;
    font-weight: bolder;
    margin: 0;
    letter-spacing: 5px;
    ${() => entranceAnimation({delay:1})};
  }
  & h2{
    font-size:xx-large;
    margin: 0;
    font-weight: normal;
    margin-top: 0px;
    margin-left: 30px;
    line-height: 50px;
    ${() => entranceAnimation({delay:2})};
  }

  @media (max-width:1250px){
    padding-left:35px;
  }
`
export const AnimatedButton = styled(Button)`
  margin-top:10px;
  /* background:#FFF7D6 !important;
  font-weight: bol !important;  */
   ${() => entranceAnimation({delay:3})}
`

  export const Footer = styled.div`
    height:200px;
    background:indigo;
    z-index: 2;
    line-height:200px;
    position: relative;
    text-align:left;
    padding:0px 80px ;
  `

  export const SideMenuContainer = styled.div`
    top: 30%;
    display: flex;
    flex-direction: column;
    align-items: end;
    position: relative;
    font-size: larger;
    color: white;
    @media (max-width:1250px){
    flex-direction:row;
    top:0;
    justify-content:center;
  }

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
  animation:${entrance} ${delay}s forwards;
`

export const SideMenuOptions = styled.a` 
  display:block;
  margin: 10px;
  text-decoration:none;
  text-align:end;
  transition: color 0.5s;
  color:${props => props.selected ? 'white' : '#bbbbbb'};
  padding: 0 20px;
  width:85%;
  font-weight:400; 
  letter-spacing: 5px;
  font-size:smaller;
  ${props => entranceAnimation(props)};
  
  &::after{
    content: '';
    top: 0px;
    height:16px;
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
    background:linear-gradient(80deg,#ce2858 18%,#46285d 88%);
    display:block;
    position: relative;
    top: 36px;
    /* @media (max-width:1250px){
      
      border-radius:0px;
      
    } */
    
    
  }
  @media (max-width:1250px){
    animation:none;
    width:fit-content;
    font-size:small;
    &::before{
      border-radius:0px;
      height: 4px;
    }

    &::after{
      border-radius:0px;
      height:16px
   
    }
  }
  `
  export const UnderBar = styled.div`
  top: 7px;
  height:5px;
  width:100%;
  border-radius:2px;
`
