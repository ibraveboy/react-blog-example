import React, { Component } from "react";
import Hero from "./AboutHero";
import Story from "./AboutStory";




class About extends Component{
    render() { 
        return (
            <div>
                <Hero />
                <Story />
            </div>
        )
    }
}

export default About;