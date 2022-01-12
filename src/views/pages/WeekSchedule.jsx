import React from 'react'
import { Container } from 'react-bootstrap'
import style from './weekschedule.module.css'
import data from '../../mock/mockDB.json'

const WeekSchedule = ({}) => {

    // const { 
    //     params: {id}
    // } = match;

    console.log(data);
    return (
        <div>
            <Container className='py-5'>
                <h1 className={`${style.topic}`}>Introduction to HTML</h1>
                <hr className='my-0'/>
                <span className={`${style.week_no} mt-0`}>Week 1</span>

                <div className={`${style.schedule} my-5`}>
                    <h2>Deliverables</h2>
                        <ul>
                            <li>Watch HTML Videos</li>
                            <ul>
                                <li>Introduction</li>
                                <li>HTML Basics</li>
                                <li>HTML Links, Headings & images</li>
                            </ul>
                            <li>Watch the HTML essentials training by Jen Kramer</li>
                            <li>HTML quiz</li>
                        </ul>
                    
                    <hr />
                    <h2 className='my-4'>Resources</h2>
                    <ul>
                        <li><a href="https://google.com" target='_blank' rel="noreferrer">https://google.com</a></li>
                        <li><a href="https://microsoft.com" target='_blank' rel="noreferrer">https://microsoft.com</a></li>
                        <li><a href="https://github.com/" target='_blank' rel="noreferrer">https://github.com/</a></li>
                        
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default WeekSchedule
