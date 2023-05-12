function loadData(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
} //end of loadData()

function showPlayers(players)
{
	const playersFragment = document.createDocumentFragment();
	players.athletes[0].items.forEach(function(player){
		const resultsDiv=document.createElement("div");

		if(player.hasOwnProperty("headshot")){
		resultsDiv.setAttribute("class","results");
		const newImg=document.createElement("img");
		newImg.setAttribute("src",player.headshot.href);
		newImg.setAttribute("alt",player.headshot.alt);
		resultsDiv.appendChild(newImg);
		}
		
		const infoDiv=document.createElement("div");
		const newLink=document.createElement("a");
		newLink.textContent=player.shortName;
		newLink.setAttribute("href","rosterdetails.html?id="+player.id);
		infoDiv.appendChild(newLink);
		resultsDiv.appendChild(infoDiv);
		playersFragment.appendChild(resultsDiv);
	})


	players.athletes[1].items.forEach(function(player){
		const resultsDiv=document.createElement("div");
		if(player.hasOwnProperty("headshot")){
			resultsDiv.setAttribute("class","results");
		const newImg=document.createElement("img");
		newImg.setAttribute("src",player.headshot.href);
		newImg.setAttribute("alt",player.headshot.alt);
		resultsDiv.appendChild(newImg);
		}
		const infoDiv=document.createElement("div");
		const newLink=document.createElement("a");
		newLink.textContent=player.shortName;
		newLink.setAttribute("href","rosterdetails.html?id="+player.id);
		infoDiv.appendChild(newLink);
		resultsDiv.appendChild(infoDiv);
		playersFragment.appendChild(resultsDiv);
	})


	players.athletes[2].items.forEach(function(player){
		const resultsDiv=document.createElement("div");
		if(player.hasOwnProperty("headshot")){
			resultsDiv.setAttribute("class","results");
		const newImg=document.createElement("img");
		newImg.setAttribute("src",player.headshot.href);
		newImg.setAttribute("alt",player.headshot.alt);
		resultsDiv.appendChild(newImg);
		}
		const infoDiv=document.createElement("div");
		const newLink=document.createElement("a");
		newLink.textContent=player.shortName;
		newLink.setAttribute("href","rosterdetails.html?id="+player.id);
		infoDiv.appendChild(newLink);
		resultsDiv.appendChild(infoDiv);
		playersFragment.appendChild(resultsDiv);
	})
	const playersList=document.querySelector("#players-list");
	playersList.appendChild(playersFragment);
} //end of populateList, do not remove this line

function init(){
	//URLSearchParams provides an easy method for getting data from the querystring e.g. details.html?id=3
	//see https://davidwalsh.name/query-string-javascript for more info
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get("id");
	loadData("https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/"+id+"/roster",showPlayers); //request a JSON file e.g. country3.json
}

https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/"+id+"/roster

init();
