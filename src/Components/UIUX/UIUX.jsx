import './UIUX.css';
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
        color: ${props => props.photoshop ? "#1a8bd9" : "#c61ad9"};
    }
`;

function UIUX(props){
    if(!props.show){
        return null;
    }

    return (
        <p>
            Before i started create this site. First i need to design the UI and UX first
            to create better user interface & experience on this site.

            <br></br>
            <br></br>
            
            The software that i used to help me designing is
            <br></br>
            <Highlighted>Figma</Highlighted>

        </p>
    )
}

export default UIUX;