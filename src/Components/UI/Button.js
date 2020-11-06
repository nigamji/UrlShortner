import React from 'react'
import styled from 'styled-components'
import { color, border, borderRadius, margin, padding, height, flex } from 'styled-system'
const button=(props)=>{
    const Button =styled.button`
    ${border}
    ${color}
    ${borderRadius}
    ${margin}
    ${padding}
    ${height}
    ${flex}
    cursor: pointer;
    align-items: center;
    text-align: center;

`
    return(
        <Button margin= {props.margin} height= {props.height} flex={props.flex} padding={props.padding}border={props.border} bg={props.bg}color={props.color} borderRadius={props.borderRadius} onClick={props.click}>{props.name}</Button>
    )
}

export default button