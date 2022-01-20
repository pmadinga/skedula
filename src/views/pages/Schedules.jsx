import {useEffect, useState} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import style from './schedule.module.css'

// mock data import
import data from '../../mock/mockDB.json'

import db from '../../controller/config'
import {getDocs, collection, } from 'firebase/firestore'

const Schedule = () => {
    const MOCKDATA = data.sort((a, b) => b.id - a.id)
    const [scheduleData, setScheduleData] = useState([])
    

    // console.log(MOCKDATA);
    useEffect(() => {
        const getSchedules = async () => {
            try {
                const qSnap = await getDocs(collection(db, "schedules"));
                qSnap.docs.forEach((schedule) => {
                    // console.log(schedule.data())
                    setScheduleData([schedule.data()])
                })
            } catch (error) {
                console.log(error);
            }
        }
        getSchedules();        
    }, [])
    console.log(scheduleData);
    return(
        <div>
            <Container>
                <h1 className={style.app_heading}>2022 App Factory</h1>
                <hr />
                <div className={`${style.cards} `}>
                    {/* {scheduleData.map(data =>(
                        <h1>{data.topic}</h1>
                    ))} */}
                    <Row>
                        {scheduleData.map(data => { 
                            <Col sm="12" md='6' lg='4' key={data.weekNo}>
                                <div className={`${style.card} `}>
                                    <a href={`/weekschedule/${data.id}`} className={`${style.card_link} my-2`}>
                                        <h2 className={`${style.card_heading} `}>Week {data.WeekNo}</h2>
                                        <p className={style.topic}>{data.topic}</p>
                                        <p className={style.view}>View Schedule</p>
                                    </a>
                                </div>
                            </Col>
                        })}
                        
                    </Row>
                </div>
            </Container>
            
        </div>
    )
}

export default Schedule;