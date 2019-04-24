import React, {Component} from 'react';

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Things To Do</th>
        </tr>
        </thead>
    )
};

const TableBody = props => {
    const rows = props.taskData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row}</td>
                <td>
                    <button onClick={() => props.removeTask(index)}>Delete Chore</button>
                </td>
            </tr>
        )
    });

    return <tbody>{rows}</tbody>
};

class Table extends Component {
    render() {

        const {taskData, removeTask} = this.props;

        return (
            <table>
                <TableHeader/>
                <TableBody taskData={taskData} removeTask={removeTask}/>
            </table>
        )
    }
}

export default Table
