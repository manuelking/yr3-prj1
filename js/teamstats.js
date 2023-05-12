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
	const regularEl=document.querySelector("#regular");
	const homeEl=document.querySelector("#home");
    const awayEl=document.querySelector("#away");
    const divisionEl=document.querySelector("#division");
	regularEl.textContent = team.items[0].displayValue;
	homeEl.textContent = team.items[1].displayValue;
	awayEl.textContent = team.items[2].displayValue;
    divisionEl.textContent = team.items[3].displayValue;
}


function init(){
	//URLSearchParams provides an easy method for getting data from the querystring e.g. details.html?id=3
	//see https://davidwalsh.name/query-string-javascript for more info
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get("id");
	loadData("https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/types/2/teams/"+id+"/record",populateContent); //request a JSON file e.g. country3.json
}


init();
