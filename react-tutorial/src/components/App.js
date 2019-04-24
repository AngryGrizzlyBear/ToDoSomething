import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';


class App extends Component {

    state = {
        tasks: []
    };
    removeTask = index => {
        const {tasks} = this.state;

        this.setState({
            tasks: tasks.filter((task, i) => {
                return i !== index;
            }),
        });
    };

    handleSubmit = task => {
        this.setState({ tasks: [...this.state.tasks, task]})
    };

        render() {
            const {tasks} = this.state;

        return (
            <div className="container">
                <Table taskData={tasks}
                       removeTask={this.removeTask}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App