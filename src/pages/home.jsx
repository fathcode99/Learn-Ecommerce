import React from "react";
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'

class HomePage extends React.Component{
    render () {
        return (
            <Container fluid style={styles.cont}>
                <Row>
                    <Col style={styles.home}>
                        <h1 style={styles.title}>The Powerfull Shopping Shoes in the World !</h1>
                        <p style={styles.pfont}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Eligendi reprehenderit quasi accusantium dicta, temporibus cumque? 
                            Sunt voluptate beatae quia deserunt maiores ab dicta incidunt enim, 
                            voluptatibus necessitatibus repudiandae quaerat? A.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const styles = {
    cont : {
        background : "url(https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat center",
        backgroundSize : 'cover',
        height : '100vh',
        display : 'flex',
        justifyContent : 'center'
    },
    home : {
        backgroundColor : 'rgba(0,0,27,0.8)',
        display : 'flex',
        justifyContent : 'center',
        flexDirection :'column',
        alignItems : 'center',
        color : 'white',
        fontSize : '54px',
        fontWeight : '700',
        height : '100vh',
        width : '100vw',
        padding : '0 300px',
    },
    pfont : {
        fontSize : '18px',
        fontWeight : '300',
        textAlign: 'center'
    },
    title : {
        textAlign: 'center',
        padding : '30px 70px'
    }
    
}
export default HomePage