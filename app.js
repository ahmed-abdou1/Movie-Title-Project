const form = document.querySelector('#searchForm');
document.body.style.background = "url('https://wallpaper.dog/large/17205044.jpg')"
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const movieSearch = form.elements.query.value;
    const config = { params: { s: movieSearch } }
    const res = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=4e32b7bf`, config)
    // console.log(res.data);
    // console.log(res.data.Search.length)
    for (let i = 0; i< res.data.Search.length; i++) {
        const title = document.createElement('li')
        title.id = `movie ${i}`;
        // const img = document.createElement('IMG');
        // img.src = res.data.Search[i].Poster;
        title.innerHTML = res.data.Search[i].Title;
        document.getElementById('allMovies').appendChild(title);
        // document.getElementById('searchForm').appendChild(img);

        // document.body.append(title);
        // document.body.append(img);
    }

    document.getElementById("searchButton").addEventListener("click", function (e) {
        document.getElementById('allMovies').innerHTML = "";
        document.getElementById('movieInfo').innerHTML = "";
    })


    for (let i = 0; i< res.data.Search.length; i++) {
        document.getElementById(`movie ${i}`).addEventListener("click", function (e) {
            // console.log(e.target.id + " WAS CLICKED!");
            document.getElementById('movieInfo').innerHTML = "";

            const movieTitle = document.createElement('li');
            movieTitle.innerHTML = res.data.Search[i].Title;
            document.getElementById('movieInfo').appendChild(movieTitle);

            const type = document.createElement('li');
            type.innerHTML = res.data.Search[i].Type;
            document.getElementById('movieInfo').appendChild(type);

            const year = document.createElement('li');
            year.innerHTML = res.data.Search[i].Year;
            document.getElementById('movieInfo').appendChild(year);

            const img = document.createElement('IMG');
            img.src = res.data.Search[i].Poster;
            document.getElementById('movieInfo').appendChild(img);

        })
    }
    form.elements.query.value = '';




    // console.log(res.data.Search[0]);
    // console.log(res.data.Search[0].Title);
    // console.log(res.data.Search[0].Poster);
    // makeImages(res.data.Search)

    // for(let i=0; i<res.data) {
    //     res.data.Search[increment].Poster;
    //     // const img = document.createElement('IMG');
    //     // img.src = movie[increment].Poster;
    //     // document.body.append(img);
    // }
})

// const makeImages = (movies) => {
//     let increment = 0;
//     for(let movie of movies) {
//         increment += 1;
//         res.data.Search[increment].Poster;
//         // const img = document.createElement('IMG');
//         // img.src = movie[increment].Poster;
//         // document.body.append(img);
//     }
// }