import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            tasks: '',
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

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    };


    render() {
        const {chore} = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Chore</label>
                <input
                    type="text"
                    name="chore"
                    value={chore}
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