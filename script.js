// global variables
let apiKey = '';
const rootPath = 'http//mysite.itvarsity.org/api/ContactBook/';

//check if API key exists when page load
function checkApiKey() {
    const storedApiKey = localStorage.getItem('apiKey');
    if (storedApiKey){
        apiKey = storedApiKey;

        // show contacts (show Page)
        showContacts();

        //get contacts( aPI call)
        getContacts();
    }
}

//setup API key and store it
function setApiKey() {
    const inputApiKey = document.getElementById('apiKeyInput').value.trim();

}if (!inputApiKey){
        alert('Please enter an API key!');
        return;
    }
    //Validate API key
  fetch(rootPath + "controller/api-key/?apiKey=" + inputApiKey)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            if (data == "1") {
                apiKey = inputApiKey;
                localStorage.setItem("apiKey", apiKey);
                showContacts();
                getContacts();
            } else {
                alert("Invalid API key entered!");
            }
        })
        .catch(function (error) {
            alert('Error validation your API Key. Please try again.');
        });

//show diffrent pages
function showpages() {
    //Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    //Show selcted pages
    document.getElementById(pageId) .classList.add('active');
}
function showpage() {
    showpage('contactsPage');
}
function showAddContacts() {
    showpage(''AddContactPage);
     // clear form
     document.getElementById('addContactForm').reset ();
}
function showEditContact(contactId) {
    showPage('editContactPage')
    // Load contact data for editing
    loadContactForEdit(contactId);
}