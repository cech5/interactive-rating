
if(window.location.pathname==='/index.html'){
    console.log("document index");
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
    console.log(ptos);

}


