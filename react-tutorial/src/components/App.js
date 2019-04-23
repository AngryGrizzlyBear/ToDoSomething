import React, {Component} from 'react';
import Table from './Table';


class App extends Component {

    state = {
        tasks: [
            {
                chore: 'Clean',
            }
        ]
    };
    removeTask = index => {
        const {tasks} = this.state;

        this.setState({
            tasks: tasks.filter((task, i) => {
                return i !== index;
            }),
        });
    };

        render() {
            const {tasks} = this.state;

        return (
            <div className="container">
                <Table taskData={tasks} removeTask={this.removeTask}/>
            </div>
        );
    }
}

export default App