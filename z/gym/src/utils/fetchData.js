export const exerciseOptions =  {
	method: 'GET',
	hostname: 'exercisedb.p.rapidapi.com',
	port: null,
	path: '/exercises?limit=10&offset=0',
	headers: {
		'x-rapidapi-key': '3d4f2bc4a1msh13cfcca6186c32ap10899fjsne9c294874f72',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};


export const youtubeOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3d4f2bc4a1msh13cfcca6186c32ap10899fjsne9c294874f72',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    
    return data;

}