function getPaises(done) {
    const results = fetch("https://restcountries.com/v3.1/all")
    results
     .then( response => response.json())
    
     .then ( data => {
        done(data)
        console.log(data)
     })

}

getPaises (data => {
    data.forEach(pais => {
        const article = document.createRange().createContextualFragment(
            ` <article>
            <div class="image-container">
              <img src="${pais.flags.png}" alt="bandera pais" />
              <span> ${pais.name.common}</span>
            </div>
          </article>`);
          const main = document.querySelector("main");
          main.append(article);

    });

});