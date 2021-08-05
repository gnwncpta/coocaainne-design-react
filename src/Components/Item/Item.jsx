import styled from 'styled-components';

const ItemContainer = styled.div`
    cursor: pointer;
    width: fit-content;
    border: 1px solid #262626;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 50px 0;
    

    &:hover p {
        color: white;
    }
`;

const Image = styled.img`
    width: 280px;
    height: 280px;
    // border: 1px solid red;

`;

const Title = styled.h2`
    margin-top: 0px;
    text-align: left;
    font-weight: 500;
    padding: 0 20px;
    color: white;
    // border: 1px solid red;
`;

const Date = styled.p`
    font-size: 14px;
    text-align: left;
    font-weight: 400;
    color: white;
`;

const DateContainer = styled.div`
    padding: 0 20px;
    box-sizing: border-box;
    border-top: 1px solid #262626;
`;

export default function Item(props){
    return (
        <ItemContainer>
            <Image src={props.artworks} alt="Artwork 1" className="image"/>
            <Title>{props.title}</Title>
            <DateContainer>
                <Date>Created at {props.date}</Date>
            </DateContainer>
        </ItemContainer>
    );
}