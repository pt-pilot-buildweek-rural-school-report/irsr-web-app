import React from 'react';

const IssueCards = (props) => {
    return ( 
        <div className = "issueCardsContainer">

            <h3>{props.issueName}</h3>
            <p>{props.issueDetails}</p>

        </div>
     );
}
 
export default IssueCards;