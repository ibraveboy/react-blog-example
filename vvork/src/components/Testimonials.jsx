import React, {Component} from 'react';
class Testimonials extends Component{
    render(){
        return(
            <div className="section testimonials">
                <div className="testimonials-title">
                    <span className="heading">
                        Testimonials
                    </span>
                    <p>
                        What our client says about us.
                    </p>
                </div>

                <div className="testimonials-group">
                    <div className="left-arrow">
                        <i className="fa fa-chevron-left"></i>
                    </div>

                    <div className="testimonials-main">
                        <div className="testimonials-item">
                            <div className="image-circle">
                                <img src="./images/testimonial-img.png" />
                            </div>
                            <div className="testimonials-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    In quis quam lectus. Phasellus lacus ligula, sollicitudin sed tempor non, varius ultricies tellus. Aliquam blandit sapien ut euismod facilisis. Aliquam rhoncus enim nec feugiat luctus. Nam id quam sollicitudin, malesuada elit nec, auctor dolor.
                                    Fusce laoreet erat purus, eget vestibulum lorem aliquet eget. 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="right-arrow">
                        <i className="fa fa-chevron-right"></i>
                    </div>


                </div>

                <div className="testimonials-circles">
                    <div className="circles-center">
                        <span className="circle active"></span>
                        <span className="circle"></span>
                        <span className="circle"></span>
                    </div>
                </div> 

            </div>
           
        )
    }
}
export default Testimonials;