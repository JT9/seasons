import React from 'react'

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

//Default just in case you don't have anything there
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;