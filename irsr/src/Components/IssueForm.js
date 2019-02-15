import React, { Component } from 'react';
import './issueForm.css'

class IssueForm extends Component {
    state = {
        newIssue: {
            name: '',
            date: '',
            issue: '',
            description: ''
        }
    }

    handleChange = event => {
        this.setState({
            newIssue: {
                ...this.state.newIssue,
                [event.target.name]: event.target.value
            }
        });
    }
    render() {
        return (<div className = 'formContainer'>

            <form className='issueForm'>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={this.handleChange}
                    value={this.state.newIssue.name}
                />
                <input
                    type="text"
                    name="date"
                    placeholder="Date"
                    onChange={this.handleChange}
                    value={this.state.newIssue.date}
                />

                <input
                    type="text"
                    name="issue"
                    placeholder="Issue"
                    onChange={this.handleChange}
                    value={this.state.newIssue.issue}
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    onChange={this.handleChange}
                    value={this.state.newIssue.description}
                />
                <button>Submit</button>
            </form>


        </div>);
    }
}

export default IssueForm;