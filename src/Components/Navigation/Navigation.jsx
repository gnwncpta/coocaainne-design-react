import Logo from '../../assets/cco-logo-big.png';
import './Navigation.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../Home/Home';
import Artworks from '../Artworks/Artworks';
import ArchivedDesign from '../ArchivedDesign/ArchivedDesign';

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
    width: 41.3px;
    height: 30.24px;
`

function Navigation(props){
    return(
        <Router>
            
            <NavigationContainer>
                <Link to="/">
                    <ImageLogo src={Logo} alt="Logo" />
                </Link>

                <CenterNavigation className="center-nav">
                    <Link to="/artworks">Artworks</Link>
                    <Link to="/archived-design">Archived Design</Link>
                    <Link to="/design">Design</Link>
                </CenterNavigation>

                <Link to="/about-me" className="about-me">About Me</Link>
            </NavigationContainer>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/artworks">
                    <Artworks />
                </Route>

                <Route path="/artworks">
                    <ArchivedDesign />
                </Route>
            </Switch>

        </Router>
    );
}

export default Navigation;