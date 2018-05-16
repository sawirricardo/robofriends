import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflow: "hidden", overflowY: "scroll", borderTop: "2px solid #ace0f9", boxShadow:"0px 1px 20px #555555 inset", height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;