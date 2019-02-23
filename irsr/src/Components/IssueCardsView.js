import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteIssue } from "../actions/index";

class IssueCardsView extends Component {
  render() {
    console.log(this.props.issues);
    return (
      <div>
        {this.props.issues.map(issue => {
          return (
            <div className="issueCardContainer">
              <div className="issueCard" key={issue.id}>
                <h3>{issue.issue_name}</h3>
                <h4>{issue.issue_type}</h4>
                <p>{issue.comments}</p>
                <button
                  onClick={() => {
                    this.props.deleteIssue(issue.id);
                  }}
                >
                  Delete
                </button>
              </div>
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
