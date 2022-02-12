let sayingSomething = "im sayingsomething";

class Issue {
    constructor(id, summary, description, issueStatus) {
        this.id = id;
        this.summary = summary;
        this.description = description;
        this.issueStatus = issueStatus;
    }
  }


//const issueList = {new: Issue(123, '',  '', ''), new: Issue(124, '',  '', ''),}


module.exports = {
    saySomething: function() {
    console.log("issueList")
    return sayingSomething;
}
}


/* module.exports = {
    hello: function() {
       return "Hello";
    }
 } */

/*   <td>ID</td>
  <td>Project</td>
  <td>Summary</td>
  <td>Description</td>
  <td>Issue Type</td>
  <td>Status</td>
  <td>Priority</td>
  <td>Action Required</td>
  <td>Owner</td>
  <td>Date Created</td>
  <td>Due Date</td>
  <td>Remarks</td>
  <td>Files</td> */