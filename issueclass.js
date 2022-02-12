let sayingSomething = "im sayingsomething";

class Issue {
    constructor(id, summary, description, issueStatus) {
        this.id = id;
        this.summary = summary;
        this.description = description;
        this.issueStatus = issueStatus;
    }
  }



const issueList = {
    "issueid1":{"name":"Anthon", "age":30, "city":"New York"},
    "issueid2":{"name":"Felicity", "age":30, "city":"New York"},
    "issueid3":{"name":"Isobella", "age":30, "city":"New York"}
    }
      


  

//const issueList = {new: Issue(123, '',  '', ''), new: Issue(124, '',  '', ''),}


module.exports = {
    saySomething: function() {
    return issueList;


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