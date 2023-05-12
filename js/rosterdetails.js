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
	titleEl.textContent = player.shortName;

	const fullnameEl=document.querySelector("#fullname");
	fullnameEl.textContent = player.displayName;

	const weightEl=document.querySelector("#weight");
	weightEl.textContent = player.displayWeight;

	const heightEl=document.querySelector("#height");
	heightEl.textContent = player.displayHeight;

	const ageEl=document.querySelector("#age");
	ageEl.textContent = player.age;

	const dobEl=document.querySelector("#dob");
	dobEl.textContent = player.dateOfBirth;

	const bplaceEl=document.querySelector("#bplace");
	bplaceEl.textContent = player.birthPlace.city;

	const positionEl=document.querySelector("#position");
	positionEl.textContent = player.position.name;

	const numberEl=document.querySelector("#number");
	numberEl.textContent = player.jersey;

	const experienceEl=document.querySelector("#experience");
	experienceEl.textContent = player.experience.years;

	const debutEl=document.querySelector("#debut");
	debutEl.textContent = player.debutYear;

	// const pickEl=document.querySelector("#pick");
	// pickEl.textContent = player.draft.selection;

	const imageEl=document.querySelector("#image");
	imageEl.setAttribute("src",player.headshot.href);
	imageEl.setAttribute("alt",player.headshot.alt);	
}

function populateNews(player)
{
	const newsEl=document.querySelector("#news");
	newsEl.textContent = player.items[0].text;

	const headlineEl=document.querySelector("#headline");
	headlineEl.textContent = player.items[0].headline;
}	

// function populateStats(player)
// {
// 	const titleEl=document.querySelector("#");
// 	titleEl.textContent = player.shortName;

// 	const fullnameEl=document.querySelector("#");
// 	fullnameEl.textContent = player.displayName;

// 	const weightEl=document.querySelector("#");
// 	weightEl.textContent = player.displayWeight;

// 	const heightEl=document.querySelector("#");
// 	heightEl.textContent = player.displayHeight;

// 	// // const ageEl=document.querySelector("#age");
// 	// // ageEl.textContent = player.age;

// 	// // const dobEl=document.querySelector("#dob");
// 	// // dobEl.textContent = player.dateOfBirth;

// 	// // const bplaceEl=document.querySelector("#bplace");
// 	// // bplaceEl.textContent = player.birthPlace.city;

// 	// // const positionEl=document.querySelector("#position");
// 	// // positionEl.textContent = player.position.name;

// 	// // const numberEl=document.querySelector("#number");
// 	// // numberEl.textContent = player.jersey;

// 	// // const experienceEl=document.querySelector("#experience");
// 	// // experienceEl.textContent = player.experience.years;

// 	// // const debutEl=document.querySelector("#debut");
// 	// // debutEl.textContent = player.debutYear;

// 	// // // const pickEl=document.querySelector("#pick");
// 	// // // pickEl.textContent = player.draft.selection;

// 	// const imageEl=document.querySelector("#image");
// 	// imageEl.setAttribute("src",player.headshot.href);
// 	// imageEl.setAttribute("alt",player.headshot.alt);	
// }



function init(){
	//URLSearchParams provides an easy method for getting data from the querystring e.g. details.html?id=3
	//see https://davidwalsh.name/query-string-javascript for more info
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get("id");
	loadData("https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/athletes/"+id+"",populateContent); //request a JSON file e.g. country3.json
	loadData("https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/athletes/"+id+"/notes",populateNews);
}

// https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/types/2/athletes/"+id+"/statistics


// https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/athletes/"+id+"/notes

init();
