fetch('https://whatyearisit-walis-projects-83fb09ac.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector('#year').textContent = data.year
    })