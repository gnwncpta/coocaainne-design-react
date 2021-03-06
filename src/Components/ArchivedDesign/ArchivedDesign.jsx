import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Section from './Section';
import Item from '../Item/Item';
import Test from './Test';

// Import Static Assets
import artwork1 from '../../assets/artworks/1.svg';
import artwork2 from '../../assets/artworks/2.svg';
import artwork3 from '../../assets/artworks/3.svg';

const Container = styled.section`
    width: 80%;
    margin: 50px auto;
    padding: 30px 0;

    // border: 1px solid red;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    // justify-content: center;
`;

const MostLikedContainer = styled.div`
    width: 100%;
    height: ${props => props.larger ? "fit-content" : "0px"};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    // border: 1px solid rgb(0, 72, 255);
    overflow: hidden;
`;

function MostLiked(props) {
    if(!props.show){
        return null;
    }

    return (
        <MostLikedContainer larger={props.show}>
            <Item artworks={artwork1} title="XES from Doujin" date="May 9, 2021"/>
            <Item artworks={artwork2} title="Seal Her" date="Apr 17, 2021" />
            <Item artworks={artwork3} title="Retro Car Wave" date="Jun 20, 2021" />
        </MostLikedContainer>
    )
}


export default function ArchivedDesign(props){

    const [ showItem, setShowItem ] = useState(false);
    const [ arrowDown, setArrow ] = useState(false);

    function dropdownHandler(){
        setShowItem(showItem ? false : true);
    }

    function arrowHandler(){
        setArrow(arrowDown ? false : true);
    }

    return (
        <Container className="ArchivedDesignContainer">

            <Section title="Archived Season 1" onClick={dropdownHandler} arrow={arrowDown} onArrow={arrowHandler} />

            <MostLiked show={showItem}>
                <Item artworks={artwork1} title="SEX from Doujin" date="May 9, 2021"/>
                <Item artworks={artwork2} title="Seal Her" date="Apr 17, 2021" />
                <Item artworks={artwork3} title="Retro Car Wave" date="Jun 20, 2021" />
            </MostLiked>
        
        </Container>
    );
}