import './GraphicDesign.css';
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

function GraphicDesign(props){
    if(!props.show){
        return null;
    }

    return (
        <p>Hi! my name is Muhammad Gunawan Cipta Negara
            I’ve been doing graphic design since 2 years ago.

            if you don’t know my instagram, you can click that follow button
            i made cool stuff there.
            <br></br>
            <br></br>
            The Software that is used for create Graphic Design are
            <br></br>
            <Highlighted photoshop>Adobe Photoshop CC 2018</Highlighted>  
            <Highlighted >Affinity Designer</Highlighted>
        </p>
    )
}

export default GraphicDesign;