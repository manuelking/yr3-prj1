function loadData(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
} //end of loadData()

function showTeams(teams)
{
	const teamsFragment = document.createDocumentFragment();
	teams.sports[0].leagues[0].teams.forEach(function(team){
		const resultDiv=document.createElement("div");
		resultDiv.setAttribute("class","result");
		
		const newImg=document.createElement("img");
		newImg.setAttribute("src",team.team.logos[0].href);
		newImg.setAttribute("alt",team.team.logos[0].alt);
		resultDiv.appendChild(newImg);
		
		const infoDiv=document.createElement("div");
		const newLink=document.createElement("a");
		newLink.textContent=team.team.displayName;
		newLink.setAttribute("href","teamdetail.html?id="+team.team.id);
		infoDiv.appendChild(newLink);
		resultDiv.appendChild(infoDiv);
		teamsFragment.appendChild(resultDiv);
	})

	const teamsList=document.querySelector("#teams-list");
	teamsList.appendChild(teamsFragment);
} //end of populateList, do not remove this line

function init(){
	loadData("https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams",showTeams);
}

init();
