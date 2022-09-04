const scriptURL = 'https://script.google.com/macros/s/AKfycbyOSeGZXi-nDOGQ8AwLcEiAe6UCTfVWPoI1WQldefL1o5pR954/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    
    .catch(error => console.error('Error!', error.message))
    let conInfo;
    conInfo = confirm("Do you Wantr to Check Previous Database")
    if (conInfo == true) {
        window.location.href = "https://docs.google.com/spreadsheets/d/1Opp4Yrk1pR1Y1rpLLGEZSd_vPKlpyM8lTK4izowxf-w/edit?usp=sharing";
    }
})
