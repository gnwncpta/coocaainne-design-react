import './Navigation.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Logo from '../../assets/cco-logo-small.png';
import styled from 'styled-components';

import Home from '../Home/Home';
import Artworks from '../Artworks/Artworks';
import ArchivedDesign from '../ArchivedDesign/ArchivedDesign';
import Design from '../Design/Design';
import AboutMe from '../AboutMe/AboutMe';

const NavigationContainer = styled.header`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px 0;
    margin: auto;
    box-sizing: border-box;
    // border: 1px solid red;
`;

const CenterNavigation = styled.nav`
    // border: 1px solid red;
`;

const ImageLogo = styled.img`
    width: 32px;
    height: 32px;
    // border: 1px solid red;
`;

const GoTo = styled.a`
    color: ${props => props.active ? "#111" : "white"};
    text-decoration: none;
    font-size: 14px;
    margin: 0 20px;
    padding: 7px 15px;
    box-sizing: border-box;
    border-radius: 50px;
    background-color: ${props => {

        const { active, activeAbout } = props;

        if(active){
            return "white";
        } else if(activeAbout){
            return "#BAFF00";
        }

    }};

    &:hover {
        color: #111;
        background-color: ${ props => props.about ? "#BAFF00" : "white"};
    }
`

function Navigation(props){

    const [ artworksState, setArtworksState ] = useState(false);
    const [ archiveState, setArchiveState ] = useState(false);
    const [ designState, setDesignState ] = useState(false);
    const [ aboutState, setAboutState ] = useState(false);

    const artworksHandler = () => {
        if(archiveState){ setArchiveState(false) }
        if(designState){ setDesignState(false) }

        setArtworksState(artworksState ? false :  true);
    }

    const archiveHandler = () => {
        if(artworksState){ setArtworksState(false) }
        if(designState){ setDesignState(false) }

        setArchiveState(archiveState ? false : true);
    }

    const designHandler = () => {
        if(artworksState){ setArtworksState(false) }
        if(archiveState){ setArchiveState(false) }

        setDesignState(designState ? false : true);
    }

    const aboutHandler = () => {
        if(artworksState){ setArtworksState(false) }
        if(archiveState){ setArchiveState(false) }
        if(designState){ setDesignState(false) }

        setAboutState(aboutState ? false : true);
    }

    return(
        <Router>
            
            <NavigationContainer>
                <Link to="/">
                    <ImageLogo src={Logo} alt="Logo" />
                </Link>

                <CenterNavigation className="center-nav">

                    <Link to="/artworks">
                        <GoTo active={artworksState} onClick={artworksHandler}>Artworks</GoTo>
                    </Link>
                    
                    <Link to="/archived-design">
                        <GoTo active={archiveState} onClick={archiveHandler}>Archived Design</GoTo>
                    </Link>

                    <Link to="/design">
                        <GoTo active={designState} onClick={designHandler}>Design</GoTo>
                    </Link>

                </CenterNavigation>

                <Link to="/about-me" className="about-me">
                    <GoTo about activeAbout={aboutState} onClick={aboutHandler}>About Me</GoTo>
                </Link>
            </NavigationContainer>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/artworks">
                    <Artworks />
                </Route>

                <Route path="/archived-design">
                    <ArchivedDesign />
                </Route>

                <Route path="/design">
                    <Design />
                </Route>

                <Route path="/about-me">
                    <AboutMe />
                </Route>
            </Switch>

        </Router>
    );
}

export default Navigation;