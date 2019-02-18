import React, { Component } from 'react';
import '../css/index.css';

class IssueForm extends Component {
    state = {
        newIssue: {
            name: '',
            date: '',
            issue_name: '',
            issue_type: '',
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
        return (<div className='formContainer'>

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
                    name="issue_name"
                    placeholder="Issue"
                    onChange={this.handleChange}
                    value={this.state.newIssue.issue_name}
                />
                <label>
                    Issue Type:
                     <select
                        name="issue_type"
                        value={this.state.newIssue.issue_type}
                        onChange={this.handleChange}>
                        <option value='Electrical' >Electrical</option>
                        <option value='Furniture' >Furniture</option>
                        <option value='General' >General</option>
                        <option value='Security' >Security</option>
                        <option value='Supplies' >Supplies</option>
                        <option value='Tech' >Tech</option>
                        <option value='Text Books' >Text Books</option>
                    </select>
                </label>
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