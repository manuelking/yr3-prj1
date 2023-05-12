function loadData(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
} //end of loadData()




function populateContent(team)
{
	const titleEl=document.querySelector("#title");
	const locationEl=document.querySelector("#location");
	const nicknameEl=document.querySelector("#nickname");
	const nameEl=document.querySelector("#name");
	const imageEl=document.querySelector("#image");
	titleEl.textContent = team.displayName;
	locationEl.textContent = team.location;
	nicknameEl.textContent = team.nickname;
	nameEl.textContent = team.name;
	imageEl.setAttribute("src",team.logos[0].href);
	imageEl.setAttribute("alt",team.logos[0].alt);

	const venueFragment = document.createDocumentFragment();{
		const venueDiv=document.createElement("div");
		const infoDiv=document.createElement("div");
		const newLink=document.createElement("a");
		newLink.textContent=team.venue.fullName;
		newLink.setAttribute("href","venue.html?id="+team.venue.id);
		infoDiv.appendChild(newLink);
		venueDiv.appendChild(infoDiv);
		venueFragment.appendChild(venueDiv);
	}

	const venueName=document.querySelector("#venue-name");
	venueName.appendChild(venueFragment);


    const rosterFragment = document.createDocumentFragment();{
		const rosterDiv=document.createElement("div");
		const infoDiv=document.createElement("div");
		const newLink=document.createElement("a");
		newLink.textContent=team.name;
		newLink.setAttribute("href","roster.html?id="+team.id);
		infoDiv.appendChild(newLink);
		rosterDiv.appendChild(infoDiv);
		rosterFragment.appendChild(rosterDiv);
	}

	const rosterName=document.querySelector("#roster-name");
	rosterName.appendChild(rosterFragment);
} 


function populateRank(team)
{
	const rankEl=document.querySelector("#rank");
	rankEl.textContent = team.team.standingSummary;
} 

function init(){
	//URLSearchParams provides an easy method for getting data from the querystring e.g. details.html?id=3
	//see https://davidwalsh.name/query-string-javascript for more info
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get("id");
	loadData("https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/franchises/"+id+"?lang=en&region=us",populateContent);
	loadData("https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/"+id+"/schedule",populateRank); //request a JSON file e.g. country3.json
}


init();
