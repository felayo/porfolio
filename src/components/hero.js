import React from 'react';

const Hero = (props) => {
    return(
        <div className="jumbotron text-center">
            {props.title && <h1 className="card-title font-weight-bold">{props.title}</h1>}
            {props.subTitle && <h3 className='indigo-text'>{props.subTitle}</h3>}
            {props.text && <p>{props.text}</p>}
        </div>
    );
}


export default Hero;