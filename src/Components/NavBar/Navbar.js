import React from 'react'
import styled from 'styled-components'
import {color, fontFamily,flexDirection, display, mt, justifyContent, style, border, borderRadius} from 'styled-system'
import theme from '../../assets/theme'
import {ReactSVG} from 'react-svg'
import logo from '../../assets/images/logo.svg'
import Button from '../UI/Button'
const StyledDiv = styled.div`
${color}
${fontFamily}
${display}
${flexDirection}
flex-basis: 100;
width: 100%;
text-align: center;
margin-top: ${props=> props.marginTop || 0};
`
const List= styled.ul`
${color}
${justifyContent}
    list-style-type: none;
    display: flex;
    justify-content: end;
    margin-top: 0.5rem;
    float:${props => props.float || 'none'}

    `
const Li= styled.li`
    margin-left: 1rem;
    list-style-type: none;

`
const Logo= styled(ReactSVG)`
    margin-left: 5rem
`
const ButtonList= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-basis: 30;
    width: 100%;
    margin-right: 2rem;
`
const navBar=(props)=>{
    return(
        <StyledDiv bg="#ffff" fontFamily={theme.font.fontFamily} display="flex" flexDirection="row" marginTop='1rem'>
            <Logo src={logo} />
            <List color={theme.color.neutral.gray} justifyContent="space-between">
                <Li >Features</Li>
                <Li>Pricing</Li>
                <Li>Resources</Li>
            </List>
            <ButtonList justifyContent="space-between" float="right">
                <Li><Button  bg="#ffff" border="none" borderRadius= "1rem" name="Login"/></Li>
                <Li><Button bg={theme.color.primary.cyan} color="#fff" border="none" borderRadius= "1rem" name="SignUp"/></Li>
            </ButtonList>
        </StyledDiv>
    )
}
export default navBar