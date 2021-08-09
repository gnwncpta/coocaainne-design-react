<<<<<<< HEAD
import styled from 'styled-components';

const AboutMeTitle = styled.h1`
    color: white;
`;

function AboutMe(props){
    return (
        <AboutMeTitle>About Me Page</AboutMeTitle>
=======
import './AboutMe.css';
import styled from 'styled-components';
import meProfile from '../../assets/me-profile.png';
import MiniNavi from './MiniNavi';

const Container = styled.section`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProfileTop = styled.div`
    margin-top: 60px;
    width: 800px;

    display: flex;
    align-items: center;
`;

const ImageProfile = styled.img`
    width: 253px;
    height: 253px;
    background: url('${meProfile}');
    border: 1px solid #111;
    border-radius: 100%;
    outline: none;
`;

const InfoProfile = styled.div`
    margin-left: 50px;
    text-align: left;
`;

const GreetingSmall = styled.div`
    font-size: 16px;
    font-weight: 300;
`;

const Username = styled.div`
    font-size: 40px;
    font-weight: 600;
`;

const Roles = styled.div`
    display: flex;
`;

const Role = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: #7B7B7B;
    margin-right: 15px;
`;

const Button = styled.button`
    cursor: pointer;
    color: ${props => props.follow ? "#111" : "white"};
    font-weight: 500;
    padding: 4px 39px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: ${props => props.follow ? "#0DB6FF" : "transparent"};
    border: ${props => props.email ? "1px solid white" : "1px solid #0DB6FF"};
    margin-right: 25px;
`;



function AboutMe(props){
    return (
        <Container>
            <ProfileTop>
                <ImageProfile />

                <InfoProfile>

                    <GreetingSmall>Hi, People know me as</GreetingSmall>
                    <Username>@COOCAAINNE</Username>

                    <Roles>
                        <Role>Graphic Designer</Role>
                        <Role>Full Stack Web Designer</Role>
                    </Roles>

                    <div className="buttons">
                        <Button follow>Follow</Button>
                        <Button email>Email</Button>
                    </div>
                </InfoProfile>

            </ProfileTop>

            <MiniNavi />
        </Container>
>>>>>>> 491028792f172bdbe023f266435c41e2b9ac1bae
    )
}

export default AboutMe;