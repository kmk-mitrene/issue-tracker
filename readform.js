function formValidate () {
 
}

function formSubmit (form){
    let issueID = form.id_field.value;
    let summary = form.summary_field.value;
    let description = form.description_field.value
    
    console.log(issueID, summary, description)
}