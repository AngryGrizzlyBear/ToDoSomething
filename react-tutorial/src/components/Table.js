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
                <td>{row.chore}</td>
            </tr>
        )
    });

    return <tbody>{rows}</tbody>
};

class Table extends Component {
    render() {

        const {taskData} = this.props;

        return (
            <table>
                <TableHeader/>
                <TableBody taskData={taskData}/>
            </table>
        )
    }
}

export default Table