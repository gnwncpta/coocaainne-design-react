import styled from 'styled-components';
import koken from '../../assets/me-first.png';

const HomeContainer = styled.section`
    width: 80%;
    margin: 50px auto;
    color: white;

    display: flex;
    align-items: center;
    justify-content: space-between;

    // border: 1px solid pink;
`

const WelcomeSection = styled.div`
    text-align: left;
    width: fit-content;
    // border: 1px solid pink;
`;

const BigTitle = styled.h1`
    font-weight: 400;
    font-size: 55px;
`

const Terminal = styled.span`
    font-family: 'Terminal Grotesque', monospace;
`

const WelcomeSlogans = styled.p`
    font-size: 14px;
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
    margin-top: 35px;

    // border: 1px solid red;
`;

const Button = styled.button`
    cursor: pointer;
    border: none;
    font-weight: 500;
    padding: 8px 20px;
    box-sizing: border-box;
    border-radius: 50px;
    color: ${props => props.active ? "#111" : "white"};
    background-color: ${props => props.active ? "white" : "transparent"};
    margin-right: 30px;
    transition: .2s ease-in-out;

    &.explore:hover {
        background-color: #BAFF00;
    }

    &:last-child {
        font-weight: 400;
    }

    &:last-child:hover {
        font-style: italic;
    }
`;

const ImageSection = styled.div`
    margin-right: 100px;
    // border: 1px solid pink;
`;

const Koken = styled.img`
    width: 440px;
`;

function Home(props){
    return (
        <HomeContainer>
            <WelcomeSection>
                <BigTitle>
                    Welcome to<br></br><Terminal>Koken >> Crib</Terminal>
                </BigTitle>

                <WelcomeSlogans>What's good man ? Take a time<br></br>to explore my crib</WelcomeSlogans>

                <Buttons>
                    <Button active className="explore">Explore</Button>
                    <Button>Download My CV</Button>
                </Buttons>
            </WelcomeSection>

            <ImageSection>
                <Koken src={koken} alt="Image of coocaainne it self" />
            </ImageSection>
        </HomeContainer>
    )
}

export default Home;