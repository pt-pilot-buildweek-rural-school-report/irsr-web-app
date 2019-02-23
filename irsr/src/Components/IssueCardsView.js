import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteIssue } from "../actions/index";

class IssueCardsView extends Component {
  render() {
    console.log(this.props.issues);
    return (
        <div className="issueCardContainer">
        {this.props.issues.map(issue => {
          return (
            
              <div className="issueCard" key={issue.id}>
                <h3>Issue Name: {issue.issue_name}</h3>
                <h4>Issue Type: {issue.issue_type}</h4>
                <p>Comments: {issue.comments}</p>
                <button
                  onClick={() => {
                    this.props.deleteIssue(issue.id);
                  }}
                >
                  Delete
                </button>
              </div>
          
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    issues: state.issues
  };
};

export default connect(
  mapStateToProps,
  { deleteIssue }
)(IssueCardsView);
