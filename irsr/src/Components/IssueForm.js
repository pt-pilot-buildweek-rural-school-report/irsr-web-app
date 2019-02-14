import React, { Component } from 'react';

class IssueForm extends Component {
    state = {
        newIssue: {
            name: '',
            date: '',
            issue: '',
            discription: ''
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
        return (<div className='issueForm'>

            <form>
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
                           
                            name = "description"
                            placeholder = "Description"
                            onChange = {this.handleChange}
                            value = {this.state.newIssue.discription}
                            />
                            <button>Submit</button>
            </form>


        </div>);
    }
}

export default IssueForm;