import React from 'react';
import './Box.scss';

const Box = ({ name, id, onEditHandler }) => {
    if (id > 0) {
        return (
            <div className="box">
                <div className="left_box">
                    <div className="single_box">id</div>
                    <div className="single_box">name</div>
                    <div className="single_box">Button</div>
                </div>
                <div className="right_box">
                    <div className="box_id single_box">{id}</div>
                    <div className="box_name single_box">{name}</div>
                    <div className="box_button single_box" onClick={() => { onEditHandler(id) }}>Edit</div>
                </div>
            </div>
        );
    } else {
        return (<></>)
    }
}

export default Box;
