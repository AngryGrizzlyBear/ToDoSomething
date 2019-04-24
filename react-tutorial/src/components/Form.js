import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            task: '',
        };

        this.state = this.initialState
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value,
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state.task);
        this.setState(this.initialState);
    };


    render() {
        const {task} = this.state;

        return (
            <form onSubmit={this.onFormSubmit} >
                <label>Chore</label>
                <input
                    type="text"
                    name="task"
                    value={task}
                    onChange={this.handleChange}
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
