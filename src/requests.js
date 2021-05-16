const API_KEY = "a879839800ecb526d51ae6be06f6090d";

const requests = {
    fetchTrending: `trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_generes=28`,
    fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_generes=35`,
    fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_generes=27`,
    fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_generes=10749`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_generes=99`,

}

export default requests;