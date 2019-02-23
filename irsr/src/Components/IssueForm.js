import React, { Component } from "react";
import { postIssue } from "../actions/index";
import { connect } from 'react-redux';
import "../css/index.css";

class IssueForm extends Component {
  state = {
    newIssue: {
      name: "",
      date: "",
      issue_name: "",
      issue_type: "",
      comments: ""
    }
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      newIssue: {
        ...this.state.newIssue,
        [event.target.name]: event.target.value
      }
    });
  };
  postIssueEvent = event => {
    event.preventDefault();
    const { issue_name, issue_type, comments } = this.state.newIssue;
    const {school_id, user_id, postIssue} = this.props;
    const createIssue = { issue_name, issue_type, comments, school_id, user_id };
    postIssue(createIssue);
    this.setState({newIssue:{ issue_name: "", issue_type: "", comments: ""} });
  };
  render() {
    return (
      <div className="formContainer">
        <form
          className="issueForm"
          type="submit"
          onSubmit={this.postIssueEvent}
        >
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
              onChange={this.handleChange}
            >
              <option value="Electrical">Electrical</option>
              <option value="Furniture">Furniture</option>
              <option value="General">General</option>
              <option value="Security">Security</option>
              <option value="Supplies">Supplies</option>
              <option value="Tech">Tech</option>
              <option value="Text Books">Text Books</option>
            </select>
          </label>
          <textarea
            name="comments"
            placeholder="Comments"
            onChange={this.handleChange}
            value={this.state.newIssue.comments}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
    return {
      school_id: state.school_id,
      user_id: state.id
    };
  };

export default connect(mapStateToProps, { postIssue })(IssueForm);
