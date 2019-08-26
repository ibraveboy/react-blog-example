import React, { Component } from 'react';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
class Home extends Component{
    render(){
        return(
            <div>
                <Hero/>
                <Services/>
                <Testimonials/>
            </div>
        )
    }
}

export default Home;