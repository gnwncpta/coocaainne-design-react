import styled from 'styled-components';
import Item from '../Item/Item';
import artwork1 from '../../assets/artworks/1.svg';
import artwork2 from '../../assets/artworks/2.svg';
import artwork3 from '../../assets/artworks/3.svg';
import artwork4 from '../../assets/artworks/4.svg';
import artwork5 from '../../assets/artworks/5.svg';
import artwork6 from '../../assets/artworks/6.svg';
import artwork7 from '../../assets/artworks/7.svg';
import artwork8 from '../../assets/artworks/8.svg';
import artwork9 from '../../assets/artworks/9.svg';
import artwork10 from '../../assets/artworks/10.svg';
import artwork11 from '../../assets/artworks/11.svg';

const ArtworksContainer = styled.section`
    width: 80%;
    height: fit-content;
    color: white;
    margin: auto;
    padding: 50px 10px;
    box-sizing: border-box;
    // border: 1px solid red;

    // display: grid;
    // gap: auto;
    // grid-template-columns: repeat(3, 1fr);
    // grid-template-rows: repeat(4, auto-fit);

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

function Artworks(props){
    return (
        <ArtworksContainer>
            <Item artworks={artwork1} title="SEX" date="May 9, 2021" />
            <Item artworks={artwork2} title="Seal" date="Dec 25, 2020" />
            <Item artworks={artwork3} title="Retro" date="Feb 23, 2021" />
            <Item artworks={artwork4} title="Retro" date="Apr 3, 2021" />
            <Item artworks={artwork5} title="JAPAN" date="Sep 18, 2020" />
            <Item artworks={artwork6} title="Conspirare" date="Jul 5, 2020" />
            <Item artworks={artwork7} title="HENTAI" date="Jun 28, 2020" />
            <Item artworks={artwork8} title="Virtual" date="Jun 8, 2020" />
            <Item artworks={artwork9} title="Statue" date="Jun 6, 2020" />
            <Item artworks={artwork10} title="Retro High" date="Apr 17, 2020" />
            <Item artworks={artwork11} title="Arpanet" date="May 23, 2020" />
        </ArtworksContainer>
    )
}

export default Artworks;