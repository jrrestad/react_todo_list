import React from 'react';

const DisplayTask = (props) => {

    const { list, setList } = props;

    let task = {
        text: "",
        isComplete: false,
    }
    const onChange = (e) => {
        task.text = e.target.value;
    }

    const onClick = (e) => {
        setList([...list, task])
        e.target.value = "";
    }

    return(
        <div className="container w-50 mt-5">
            <input className="form-control" type="text" placeholder="add a task..." name="task" onChange={ onChange }/>
            <input className="form-control btn btn-primary btn-block" type="submit" value="Add Task" onClick={onClick}/>
        </div>
    )
}

export default DisplayTask;