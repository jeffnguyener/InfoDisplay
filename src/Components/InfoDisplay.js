import React, { Component } from 'react'

class InfoDisplay extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Jeff Nguyen',
            employer: 'student',
            hobbies: ['hiking', 'traveling', 'eating'],
            newHobby: ''
        }
        this.handleHobbyUpdate = this.handleHobbyUpdate.bind(this)
    }
    handleHobbyUpdate(e) {
        console.log(e.target.value)
        this.setState({
            newHobby: e.target.value
        })
    }

    handleAddHobby() {
        const hobbyCopy = this.state.hobbies.slice()
        hobbyCopy.push(this.state.newHobby)
        this.setState({
            hobbies: hobbyCopy,
            newHobby: ''
        })
    }

    render() {
        const hobbies = this.state.hobbies.map((hobby, index) => {
            return (
                <li key={index}>{hobby}</li>
            )
        })
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>I am a {this.state.employer}</p>
                <ul>
                    {hobbies}
                </ul>
                <input
                    type="text"
                    value={this.state.newHobby}
                    onChange={this.handleHobbyUpdate}
                />
                <button onClick={() => this.handleAddHobby()}>Add Hobby</button>
            </div>
        )
    }
}

export default InfoDisplay