import { Container, Row, Col } from "react-bootstrap";
import style from './home.module.css'

const Home = () => {
    return(
        <div>
            <Container>
                <h1 className={style.app_heading}>2022 App Factory</h1>
                <hr />
                <div className={`${style.cards} `}>
                    <Row>
                        <Col sm="4">
                            <div className={`${style.card} py-2`}>
                                <a href="#" className={style.card_link}>
                                    <h2 className={`${style.card_heading} `}>Week 2</h2>
                                    <p className={style.topic}>Introduction to HTML</p>
                                    <p >a</p>
                                </a>
                            </div>
                        </Col>
                        
                    </Row>
                </div>
            </Container>
            
        </div>
    )
}

export default Home;