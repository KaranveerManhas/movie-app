import React from 'react';
import ShoppingCart from './shopping-cart.png';
import styled from 'styled-components';

const Nav = styled.div`
max-width: 100%;
height: 70px;
background-color: #000;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
color: white;

`;

const Title = styled.div`
font-size: 2rem;
font-weight: 600;
font-family: Montserrat, sans-serif;
text-transform: uppercase;
`;

export default function Navbar(props) {

    const {cartCount} = props;

    return (
        <>
        <Nav>
            <Title>Movie App</Title>
            <div style = {styles.cartContainer}>
                <img src={ShoppingCart} alt = "Cart Icon" style={styles.cartIcon} />
                <span style = {styles.cartCount}>{cartCount}</span>
            </div>
        </Nav>
        </>
    )
    
}


const styles = {
    nav: {
        maxWidth: '100%',
        height: '70px',
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px'
    },
    
    cartContainer: {
        position: 'relative',
        cursor: 'pointer'
    },

    cartIcon: {
        height: 40,
        marginRight: 20
    },

    cartCount: {
        background: 'orange',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 10,
        top: -5,
        fontSize: 12
    }
}