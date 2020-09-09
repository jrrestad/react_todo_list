import React from 'react';


const Task = (props) => {
    const { task, list, index, setList } = props;

    const onClick = () => {
        setList( () => {
            return list.filter(task => list.indexOf(task) !== index)
        });
    }

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    }

    return (
        <div className="container border">
            {
                list[index].isComplete ?
                <h4 className="" style={{textDecoration: "line-through"}}>{task.text}</h4>
                :
                <h4 className="">{task.text}</h4>
            }
            <div className="col-6 mx-5">
                <label className="mr-2" htmlFor="checkbox">Completed?</label>
                <input className="mr-5" type="checkbox" onChange={onChange} checked={task.isComplete}/>
                <button className="btn-sm btn-danger" onClick={onClick}>Delete</button>
            </div>
        </div>
    )
}

export default Task;