import React from 'react';

const About = (props) => {
 //  console.log('Inside About Page:', props);
    setTimeout(()=>{
        props.history.push('/contact');
    },2000)
    return(
        <div className='center'>
            <h4>AboutPage</h4>
            <p>This is About page</p>
        </div>
    );
}
export default About;




