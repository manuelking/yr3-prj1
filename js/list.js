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
		newLink.setAttribute("href","details.html?id="+player.id);
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
		newLink.setAttribute("href","details.html?id="+player.id);
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
		newLink.setAttribute("href","details.html?id="+player.id);
		infoDiv.appendChild(newLink);
		resultsDiv.appendChild(infoDiv);
		playersFragment.appendChild(resultsDiv);
	})
	const playersList=document.querySelector("#players-list");
	playersList.appendChild(playersFragment);
} //end of populateList, do not remove this line

function init(){
	loadData("https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/11/roster",showPlayers);
}

init();
