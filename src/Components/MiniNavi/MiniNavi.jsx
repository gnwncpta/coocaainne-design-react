import './MiniNavi.css';
import { useState } from 'react';
import styled from 'styled-components';
import GraphicDesign from '../GraphicDesign/GraphicDesign';
import UIUX from '../UIUX/UIUX';
import FrontEnd from '../FrontEnd/FrontEnd';

const Container = styled.section`
    width: 800px;
    margin: 80px auto;
`;

const Sections = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

const ProfessionContainer = styled.div`
    cursor: pointer;
    width: 90%;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    border-radius: 10px 10px 0 0;
    background-color: ${props => props.active ? "#1c1c1c" : "transparent"};
`;

const Profession = styled.p`
    width: fit-content;
`;

const InfoResult = styled.div`
    text-align: left;
    font-weight: 300;
    margin-top: 30px;
    padding: 20px;
    box-sizing: border-box;
`;

function MiniNavi(props){

    const [ graphicDesign, setGraphic ] = useState(false);
    const [ uiux, setUiux ] = useState(false);
    const [ frontEnd, setFrontEnd ] = useState(false);

    function graphicDesignHandler(){
        if(uiux){ setUiux(false); }
        if(frontEnd){ setFrontEnd(false); }

        setGraphic(graphicDesign ? false : true);
    }

    function UIUXHandler(){
        if(graphicDesign){ setGraphic(false); }
        if(frontEnd){ setFrontEnd(false); }

        setUiux(uiux ? false : true);
    }

    function FrontEndHandler(){
        if(graphicDesign){ setGraphic(false); }
        if(uiux){ setUiux(false); }

        setFrontEnd(frontEnd ? false : true);
    }

    return (
        <Container id="MiniNaviContainer">
            <Sections id="SectionsContainer">
                
                <ProfessionContainer className="ProfessionContainer" active={graphicDesign} onClick={graphicDesignHandler}>
                    <Profession className="profession">Graphic Design</Profession>
                </ProfessionContainer>

                <ProfessionContainer className="ProfessionContainer" active={uiux} onClick={UIUXHandler}>
                    <Profession className="profession">UI/UX Design</Profession>
                </ProfessionContainer>

                <ProfessionContainer className="ProfessionContainer" active={frontEnd} onClick={FrontEndHandler}>
                    <Profession className="profession">Front End</Profession>
                </ProfessionContainer>

            </Sections>

            <InfoResult>
                <GraphicDesign show={graphicDesign} />
                <UIUX show={uiux} />
                <FrontEnd show={frontEnd} />
            </InfoResult>

        </Container>
    )
}

export default MiniNavi;