import React from 'react';
import '../CSS/Home.css';
import MySlider from '../components/MySlider'
import Content from '../components/Content'
// import { MyFooter } from '../components/MyFooter'

export function Home() {
    return (
        <div className='mybg'>
            <MySlider />
            <Content />
        </div>
    )
}