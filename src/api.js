import axios from "axios";

const ACCESS_KEY = "8xLfwTXVcw8wB2YrKB9AgYVrp8iSNkNKPccDekjH1jM";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchSearch = async ({ searchData, page = 1 }) => {
	const response = await axios.get(
		`/search/photos?query=${searchData}&client_id=${ACCESS_KEY}&page=${page}&per_page=15`
	);

	console.log(response.data.results);

	return response.data.results;
};
