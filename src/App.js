import React, {Component} from 'react'
import {ThemeProvider} from 'styled-components'
import theme from './assets/theme'
import styled from 'styled-components'
import { border, borderRadius, color, display, margin, position, width } from 'styled-system'
// import navBar from './Components/NavBar/Navbar'
import NavBar from './Components/NavBar/Navbar'
import Head from './Components/Head/Head'
import BgShorten from './assets/images/bgshortendesktop.svg'
import {ReactSVG} from 'react-svg'
import Button from './Components/UI/Button'
class App extends Component {
  state={
    url: null
  }
  urlHandler=(event)=>{
      // alert(event.target.value)
      this.setState({url: event.target.value})
  }
  render(){
    const Div= styled.div`
      ${color}
      ${borderRadius}
      align-items: center;
      text-align: center;
      ${width}
      ${margin}
      ${position}
      ${display}
      top: ${props => props.top};
      left:${props => props.left};
      justify-content: ${props => props.justifyContent}
    `
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Head />
      <Div bg={theme.color.primary.darkViolet} borderRadius="0.5rem" width="60%" position="relative" margin='auto'>
        <ReactSVG src={BgShorten} style={{position: 'absolute', backgroundColor: 'hsl(257, 27%, 26%)', borderRadius: '0.2rem'}} />
        <Div display='flex' justifyContent='space-between' position='absolute' margin= "3rem 5rem">
          <input type="url" placeholder="Shorten a link here!" value={this.state.url}onChange={(event)=>this.setState({url: event.target.value})} style={{width: '55rem ', height: '4rem',border: 'none', borderRadius:'0.5rem', flex: '1 1 80em'}}/>
          <Button 
          bg= {theme.color.primary.cyan} margin= '0 0 0 1rem' border= 'none'borderRadius='0.2rem' padding= '0 1rem'
          color= 'white'
          height='3rem' 
          flex= '1 1 10em'
          name="Shorten It"/>
        </Div>
      </Div>
    </ThemeProvider>
  );
}}

export default App;
