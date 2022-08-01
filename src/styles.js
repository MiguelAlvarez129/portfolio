import { Button, Text } from '@chakra-ui/react'
import styled, {css} from 'styled-components'
import { keyframes } from 'styled-components'
import zigzag from '../src/assets/img/zig-zag.svg'
// import wave from '../src/assets/img/wave.svg'
import wave from '../src/assets/img/wave2.svg'
import waveReverse from '../src/assets/img/wave-reverse.svg'
import waveSmall from '../src/assets/img/wave-small.svg'
import waveSmallReverse from '../src/assets/img/wave-small-reverse.svg'

const sideBarBg = '#000224'
const sidebarW = '300px'
export const LayoutContainer = styled.div`
    height: 100%;
    width: 100%;
`

export const SideBarContainer = styled.div`
  box-shadow:rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,rgba(0, 0, 0, 0.2) 0px 5px 10px,rgba(0, 0, 0, 0.4) 0px 15px 40px;
  position: fixed;
  flex:none;
  height:100vh;
  /* width:100%; */
  width:${sidebarW};
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
  margin-left:${sidebarW};
  max-width: calc(100% - ${sidebarW});
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

export const WaveDiv = styled.div`
  min-height:100vh;
  background-image:url(${props => props.svg});
  background-repeat:no-repeat;
  background-size:cover;
  background-position:${props => props.reverse ? 'top' : 'bottom'};
  @media(max-width:768px){
    background-image:url(${props => props.smallSvg});
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
   
  }
  & h2{
    font-size:xx-large;
    margin: 0;
    font-weight: normal;
    margin-top: 0px;
    margin-left: 30px;
    line-height: 50px;
  
  }

  @media (max-width:1250px){
    padding-left:35px;
  }
`
export const AnimatedButton = styled(Button)`
  /* background:#FFF7D6 !important;
  font-weight: bol !important;  */
  border-bottom: 6px solid white !important;
  transition: box-shadow .2s, background 1s !important;
  font-family: 'Roboto', sans-serif !important;
  &:active:enabled{
    transform: translateY(5px) !important;
    border-bottom: 1.5px solid white!important;
  }
  &:focus{
    outline:0 !important;
    box-shadow: none !important;
  }
  $:hover{
    background:red !important;
    background-image:url(${zigzag}) !important;
  }
   
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
    align-items: center;
    position: relative;
    font-size: larger;
    color: white;
    @media (max-width:1250px){
    flex-direction:row;
    justify-content:center;
    align-items: center;
    height:100%;
    top:0;
    & > div{
      padding:0px;
    }
  }

  & > div{
    padding:8px;
  }
  `

export const SideMenuOptions = styled.a` 
  font-family: Raleway;
  display:block;
  margin: 5px;
  text-decoration:none;
  text-align:end;
  color:${props => props.selected ? 'white' : '#bbbbbb'};
  width:85%;
  margin:auto;
  font-weight:600; 
  letter-spacing: 3px;
  font-size:larger;
  text-shadow: ${props => props.selected ? '2px 2px #ce2858, 4px 2px #ce2858;' : ' 0px 0px #ce2858'};
  transition: text-shadow .5s, color .5s;

  @media (max-width:1250px){
    animation:none;
    width:fit-content;
    font-size:small;
    opacity:1;
  }
  `
  export const UnderBar = styled.div`
  top: 7px;
  height:5px;
  width:100%;
  border-radius:2px;
`

export const TextShadow = styled.span`
  font-size: 64px;
  &:after{
    content:'${props => props.content}';
    background-image:url(${zigzag});
    color: transparent;
    -webkit-background-clip:text;
    background-clip:text;
    display:inline-block;
    right: calc(5ch + 7px);
    position: relative;
    z-index:-1
  }
`

