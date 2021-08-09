import './FrontEnd.css';
import styled from 'styled-components';

const Highlighted = styled.span`
    // cursor: default;
    margin-right: 5px;
    font-family: monospace;
    border-radius: 5px;
    padding: 2px 10px;
    box-sizing: border-box;
    color: rgba(90, 90, 90);
    background-color: rgba(45, 45, 45, 0.579);

    &:hover {
        color: ${props => {
            const {html, css, react, styled, router} = props;
            if(html){
                return "rgb(227, 76, 38)"
            } else if(css){
                return "rgb(38, 77, 228)"
            } else if(react){
                return "#61DBFB"
            } else if(styled){
                return "magenta";
            } else if(router){
                return "green";
            }
        }};
    }
`;

function FrontEnd(props){
    if(!props.show){
        return null;
    }

    return (
        <p>
            After i create the every single page design. Then moved to Development process
            
            <br></br>
            <br></br>

            The tech stack that i used are
            <br></br>
            <Highlighted html>HTML 5</Highlighted>
            <Highlighted css>CSS</Highlighted>
            <Highlighted react>React JS</Highlighted>
            <Highlighted styled>Styled Components</Highlighted>
            <Highlighted router>React Router</Highlighted>
        </p>
    )
}

export default FrontEnd;