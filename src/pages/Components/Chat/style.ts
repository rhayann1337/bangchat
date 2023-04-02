import styled from 'styled-components'

export const Container = styled.div`
border: 1px solid rgba(0, 0, 0, 0.1);
border-radius: 16px;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px;
width: fit-content;
margin: 40px 0 40px;
border-color: rgba(255, 255, 255, 0.2);
background-color: white;
`

export const ContainerMessages = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
height: 100%;
padding: 16px;
border-radius: 8px;
max-height: 100%;
overflow: auto;
`

export const ContainerSendMessage = styled.div`
width: -webkit-fill-available;
margin-top: 16px;

input {
    width: inherit;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 8px 16px;
    background-color: white;
}
`

export const Text = styled.h2`
width: 100%;
font-size: 24px;
line-height: 32px;
font-weight: 500;
margin: 0 0 16px;
`