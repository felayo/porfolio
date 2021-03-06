import React from 'react';


function Content(props) {

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {props.children}
                </div>
            </div>
        </div>
    );

}

export default Content;