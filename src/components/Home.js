import React from 'react';
//import axios from 'axios';
import ColorChanger from '../HOC/ColorChanger';
const Home = () => {
    return(
        <div className='center'>
            <h4 >HomePage</h4>
            <p >This is Homepage This is Homepage This is Homepage This is Homepage This is Homepage This is Homepage</p>
        </div>
    );
}
export default ColorChanger(Home);