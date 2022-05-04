
if(window.location.pathname==='/interactive-rating/'){
    const form = document.getElementById("form");
  
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const rate = form['rate'].value;
        sessionStorage.setItem('rate',rate);
        window.location.assign("./thankyoustate.html");
    })

}else{
    
    const ptos = document.getElementById("ptos");
    ptos.innerHTML = sessionStorage.getItem('rate');

}


