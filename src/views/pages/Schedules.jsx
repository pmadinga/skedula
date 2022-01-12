import { Container, Row, Col } from "react-bootstrap";
import style from './home.module.css'

// mock data import
import data from '../../mock/mockDB.json'

const Home = () => {
    const MOCKDATA = data.sort((a, b) => b.id - a.id)
    console.log(MOCKDATA);
    return(
        <div>
            <Container>
                <h1 className={style.app_heading}>2022 App Factory</h1>
                <hr />
                <div className={`${style.cards} `}>
                    <Row>
                        {MOCKDATA.map(data => ( 
                            <Col sm="12" md='6' lg='4' key={data.id}>
                                <div className={`${style.card} `}>
                                    <a href="#" className={`${style.card_link} my-2`}>
                                        <h2 className={`${style.card_heading} `}>Week {data.id}</h2>
                                        <p className={style.topic}>{data.topic}</p>
                                        <p className={style.view}>View Schedule</p>
                                    </a>
                                </div>
                            </Col>
                        ))}
                        
                    </Row>
                </div>
            </Container>
            
        </div>
    )
}

export default Home;