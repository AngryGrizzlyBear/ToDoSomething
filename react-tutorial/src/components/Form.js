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
        const {name, value} = event.target

        this.setState({
            [name]: value,
        });
    };

    render() {
        const {chore} = this.state;

        return (
            <form>
                <label>Chore</label>
                <input
                    type="text"
                    name="chore"
                    value={chore}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}

export default Form;