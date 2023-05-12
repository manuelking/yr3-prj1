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
	const passingEl=document.querySelector("#passing");
    const passleaderEl=document.querySelector("#passleader");
	passingEl.textContent = team.categories[0].displayName;
    passleaderEl.textContent = team.categories[0].leaders[0].athlete.$ref;

}


function init(){
	//URLSearchParams provides an easy method for getting data from the querystring e.g. details.html?id=3
	//see https://davidwalsh.name/query-string-javascript for more info
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get("id");
	loadData("https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/types/2/teams/"+id+"/leaders",populateContent); //request a JSON file e.g. country3.json
}

init();
