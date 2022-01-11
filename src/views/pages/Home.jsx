import { Container } from "react-bootstrap";
import style from './home.module.css'

const Home = () => {
    return(
        <div>
            <Container>
                <h1 className={style.app_heading}>2022 App Factory</h1>
                <hr />
            </Container>
            
        </div>
    )
}

export default Home;