import React, { Component } from "react";
import { connect } from "react-redux";
import { loginData } from "../actions/index";

class IssueCardsView extends Component {
  render() {
    console.log(this.props.issues);
    return (
      <div>
        {this.props.issues.map(issue => {
          return <div className = 'issueCard' key = {issue.id}>
                    <h3>{issue.issue_name}</h3>
                    <h4>{issue.issue_type}</h4>
                    <p>{issue.comments}</p>
                    
                </div>
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
  { loginData }
)(IssueCardsView);
