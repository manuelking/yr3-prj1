function loadData(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
} //end of loadData()




function populateContent(stadium)
{
	const titleEl=document.querySelector("#title");
	const stateEl=document.querySelector("#state");
	const zipEl=document.querySelector("#zip");
	const cityEl=document.querySelector("#city");
	const capacityEl=document.querySelector("#capacity");
	const image1El=document.querySelector("#image1");
	const image2El=document.querySelector("#image2");

	titleEl.textContent = stadium.fullName;
	stateEl.textContent = stadium.address.state;
	zipEl.textContent = stadium.address.zipCode;
	cityEl.textContent = stadium.address.city;
	capacityEl.textContent = stadium.capacity;
	image1El.setAttribute("src",stadium.images[0].href);
	image2El.setAttribute("src",stadium.images[1].href);
}


function init(){
	//URLSearchParams provides an easy method for getting data from the querystring e.g. details.html?id=3
	//see https://davidwalsh.name/query-string-javascript for more info
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get("id");
	loadData("https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/venues/"+id+"",populateContent); //request a JSON file e.g. country3.json
}

init();
