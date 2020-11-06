import React from 'react'
import styled from 'styled-components'
import { color, display, flex, flexBasis, height, width } from 'styled-system'
import theme from '../../assets/theme'
import Button from '../UI/Button'
import {ReactSVG} from 'react-svg'
import headImage from '../../assets/images/Head.svg'
export default (props)=>{
    const StyledDiv = styled.div`
            ${color}
            ${display}
            ${height}
            ${width}
            align-items: center;
            justify-content: space-between;
            margin:0 6rem;
            ${flexBasis}
            ${flex}
    `
    const Label = styled.label` 
        ${color}
        font-size: 1.3rem;
    `
    return(
        <StyledDiv  display="flex" flexBasis='100'>
            <StyledDiv flex='1 1 60em'>
            <h1 style={{fontSize: '4rem'}}>More than just shorter links</h1>
            <Label color={theme.color.neutral.gray}>Build your brand’s recognition and get detailed insights on how your links are performing.</Label>
            <br></br>
            <br></br>
            <Button padding= '0.8rem' name="Get started" color="#fff" bg={theme.color.primary.cyan} borderRadius="1rem" border="none"/>
            </StyledDiv>
            <StyledDiv flex='2 2 40em' >
                <ReactSVG src={headImage}  style={{transform: 'scale(0.9)' }}/>
            </StyledDiv>
        </StyledDiv>
    )
}
