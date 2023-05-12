function loadData(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
} //end of loadData()




function populateContent(player)
{
	const titleEl=document.querySelector("#title");
	const fullnameEl=document.querySelector("#fullname");
	const positionEl=document.querySelector("#position");
	const numberEl=document.querySelector("#number");
	const imageEl=document.querySelector("#image");
	titleEl.textContent = player.shortName;
	fullnameEl.textContent = player.fullName;
	positionEl.textContent = player.position.name;
	numberEl.textContent = player.jersey;
	imageEl.setAttribute("src",player.headshot.href);
	imageEl.setAttribute("alt",player.headshot.alt);
}


function init(){
	//URLSearchParams provides an easy method for getting data from the querystring e.g. details.html?id=3
	//see https://davidwalsh.name/query-string-javascript for more info
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get("id");
	loadData("https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/athletes/"+id+"",populateContent); //request a JSON file e.g. country3.json
}

init();
