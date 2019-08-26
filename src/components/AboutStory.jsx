import React, { Component } from "react";


class Story extends Component{
    render() {
        return (
            <div className="about-story">
                <div className="story-title">
                    <span className="title">
                        Our Story
                    </span>
                </div>
                <div className="story-text">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque diam mi, accumsan quis tempus sed, ultrices vulputate felis. 
                    Aenean ac ultricies lorem, a mattis libero. Pellentesque massa risus, 
                    accumsan sed vulputate vitae, mollis vel felis. Integer urna massa, 
                    elementum et nisl non, rutrum condimentum est. Suspendisse facilisis 
                    porttitor risus, id porttitor velit scelerisque ac. Proin elementum, 
                    nunc a tincidunt iaculis, lorem felis dapibus urna, quis ullamcorper 
                    tellus nibh vel urna. Vivamus aliquam malesuada nulla ac venenatis. 
                    Vivamus eu odio eu ipsum imperdiet faucibus non id velit. Nulla a 
                    rhoncus purus. Pellentesque id urna accumsan, rhoncus ligula quis, 
                    fermentum sapien. In vitae laoreet felis.
                    </p>
                </div>
            </div>
            
        )
    }
}

export default Story;