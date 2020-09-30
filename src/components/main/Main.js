import React, { useState } from 'react';
import Box from './box/Box';
import './Main.scss';

const Main = () => {
    const [boxes, setBoxes] = useState([
        { id: 0, fullname: '' },
    ]);
    const [single, setSingle] = useState([])
    const [singleId, setSingleId] = useState([])
    const [active, setActive] = useState(false)
    const [button, setButton] = useState('Submit')

    const onSubmitHandler = (e, boxes) => {
        e.preventDefault();

        const new_id = (boxes.length) ? boxes[boxes.length - 1].id + 1 : 0;

        if (active) {
            const input_name = e.target.input_name.value = single;

            for (let i = 0; i < boxes.length; i++) {
                const person_id = boxes[i].id;

                if (person_id === singleId[0]) {
                    setBoxes([...boxes, boxes[person_id].fullname = input_name, boxes[person_id].id = person_id])
                    console.log("if");
                    setActive(false);
                }
            }

            setButton('Submit');
            setActive(false);
        }
        else {
            setBoxes([...boxes, { id: new_id, fullname: single }])
        }
    }

    const onEditFormHandler = (id) => {
        const person = boxes.find(person => person.id === id);
        const person_fullname = person.fullname;
        const person_id = person.id;

        setSingle([person_fullname]);
        setSingleId([person_id]);
        setButton('Save');
        setActive(true)
    }

    return (
        <div className="main">
            <div className="todo">
                <div className="todo_top">Todo App</div>
                <form onSubmit={(e) => { onSubmitHandler(e, boxes, setBoxes) }}>
                    <label htmlFor="name_part">Your Name</label>
                    <input id="name_part" className="input name_part" type="text" name='input_name' onChange={(e) => { setSingle(e.target.value) }} value={single} />
                    <input type="submit" className="input button_part" name='input_submit' value={button} />
                </form>
            </div>
            <div className="all">
                {boxes.map((box) => {
                    return <Box onEditHandler={(id) => { onEditFormHandler(id) }} key={box.id} name={box.fullname} id={box.id} />
                })}
            </div>

        </div>
    );
}

export default Main;
