import React, {Component} from 'react';
import Table from './Table';


class App extends Component {
    render() {
        const tasks = [
            {
                chore: 'Clean',
            },
            {
                chore: 'Mac',
            },
            {
                chore: 'Dee',
            },
            {
                chore: 'Dennis',
            },
        ];
        return (
            <div className="container">
                <Table taskData={tasks}/>
            </div>
        )
    }
}

export default App