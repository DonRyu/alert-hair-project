import React from 'react';
import styled from 'styled-components';

function Logo() {
    return (
        <LogoBox >
            Logo
        </LogoBox>
    );
}



const LogoBox = styled.button`
width: 100%;
height: 60px;
background: white;
`;

export default Logo;