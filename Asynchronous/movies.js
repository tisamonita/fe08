//CREATE  v
//READ  -> get v, v
//UPDATE -> FETCH V
//DELETE, v

// .ENV -> Bertujuan untuk config an global, url server, url database, password database

require("dotenv").config();

async function getMovies() {
    try {
        const res = await fetch(`${process.env.DB_HOST}movie`); //secara default method nya adalah Get
        const result = await res.json();

        return result;
    } catch (error) {
        return error;
    }
}

async function getMovieById(id){
    try {
        const res = await fetch(`${process.env.DB_HOST}movies/${id}`); //secara default method nya adalah Get
        const result = await res.json();

        return result;
    } catch (error) {
        return error;
    }
}

// getMovies().then((res) => console.log(res)).catch((err) => console.log(err));
// getMovieById(3).then((res) => console.log(res)).catch((err) => console.log(err));

async function addMovies(data) {
    try {
        const res = await fetch("http://localhost:3002/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        return result;
    } catch (error) {
        return error;
    }
}

async function deleteMovies(id) {
    //template literal -> menggabungkan string dan variabele.
    // `${}`
    try {
        const res = await fetch(`http://localhost:3000/movies/${id}`, {
            method: "DELETE",
        });

        return res;
    } catch (error) {
        return error;
    }
}



// deleteMovies(5).then((res) => {
//     console.log("berhasil hapus data");
// });

async function updateMovie(id, data) {
    try {
        const res = await fetch(`http://localhost:3000/movies/${id}`, {
            method: "PUT",
            headers: {
                "Content-type" : "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        return result;
    } catch (error) {
        return error;
    }
}

updateMovie(3, {
    "image": "https://upload.wikimedia.org/wikipedia/id/8/81/ShawshankRedemptionMoviePoster.jpg",
    "title": "The Shawshank Redemption",
    "year": "2013",
})
.then((res) => console.log(res))
.catch(() => console.log("Gagal Update Data"))

// addMovies({
//     "image": "https://upload.wikimedia.org/wikipedia/id/8/81/ShawshankRedemptionMoviePoster.jpg",
//     "title": "Missing",
//     "year": "2023",
// })
// .then((res) => console.log(res))
// .catch(() => console.log("gagal menambahkan data"))


// json-server --watch server/movies.json