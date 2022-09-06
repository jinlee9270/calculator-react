import styled from "styled-components"

export const NumBtn = styled.button`
    font-size: 2rem;
    margin: 5px;
    width: ${props => props.width || '100px'};
    height: 100px;
`

export const Result = styled.div`
    font-size: 4rem;
    margin: 5px;
    height: 65px;
    color: white;
    background-color: #898989;
    width: 420px;
    padding: 3px 0px 0px 10px;
`

export const Container = styled.div`
    margin: 20px;
    width: 500px;   
`

export const OperBtn = styled.button`
    font-size: 2rem;
    color: white;
    margin: 5px;
    width: 100px;
    height: 100px;
    background-color: orange;
`

export const ExtraBtn = styled.button`
    font-size: 2rem;
    color: white;
    margin: 5px;
    width: 100px;
    height: 100px;
    background-color: darkgrey;
`