import React, { Component } from 'react'

class Greeting extends Component {
    constructor(props) {
        super(props)
        this.state = { name: "Tong" }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        document.title = this.state.name
    }

    componentDidUpdate() {
        document.title = this.state.name
    }

    handleChange(e) {
        this.setState({ name: e.target.value })
    }

    render() {
        return (
            <div>
                <label>name: </label>
                <input value={this.state.name} onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default Greeting