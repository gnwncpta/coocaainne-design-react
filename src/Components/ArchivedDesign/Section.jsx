import styled from 'styled-components';

const MostLikedContainer = styled.div`
    cursor: pointer;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid rgb(41, 41, 41);
`;

const MostLikedTitle = styled.p`
    color: white;
    // font-size: 14px;
    font-weight: 400;
`;

const ArrowContainer = styled.div`
    cursor: pointer;
        
    width: 40px;
    height: 40px;
    border-radius: 50px;
    /* background-color: rgb(65, 65, 65); */

    display: flex;
    align-items: center;
    justify-content: center;

    &:active {
        background-color: rgb(55, 55, 55);
    }
`;

const Arrow = styled.div`
    width: 10px;
    height: 10px;

    border-color: white;
    border-style: solid;
    border-width: 1px 1px 0 0;

    transform: ${props => props.direction ? "rotate(-45deg)" : "rotate(135deg)"};
`;

function Section(props){
    const { title, onClick, onArrow, arrow } = props;

    return (
        <MostLikedContainer onClick={() => {
            onClick();
            onArrow();
        }}>
            <MostLikedTitle>{title}</MostLikedTitle>
            <ArrowContainer>
                <Arrow direction={arrow}></Arrow>
            </ArrowContainer>
        </MostLikedContainer>
    )
}

export default Section;