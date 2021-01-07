
let labels = [
	{
		name: 'Walk',
		id: '',
		task: []
	},
	{
		name: 'Stretch',
		id: '',
		task: []
	},
	{
		name: 'Smoke',
		id: '',
		task: []
	}
];
const mainViewCont = document.querySelector('.main-view-cont');


function createNewLabel() {
	const newLabel = {
		name: document.getElementById('new-label-input').value,
		id: '',
		task: []
	}

	labels.push(newLabel)
	renderLabelViewHTML();
	document.getElementById('new-label-input').value = "";
	console.log('labels - ', labels)
}


function labelViewTemplate(label) {
	return `
		<div class="label-name-cont">
			<div class="label-name">
				<h2 class="title is-1">${label.name}</h2>
			</div>
			<div class="label-btn">
				<button value="${label.name}" onclick="filterByName(event)" class="label-btn btn-font button is-large is-primary-color">
					Go!
				</button>
			</div>
		</div>
	`
}



function renderLabelViewHTML() {
	let labelsToView = labels.map(label => labelViewTemplate(label)).join('')

	mainViewCont.innerHTML = labelsToView;
}

// ---Side Bar---

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

// ---- END Side Bar


// ---- Entry
// document.querySelector('.label-btn').addEventListener("click", filterByName)

function filterByName(event) {

	let name = event.target.value
	const filteredName = labels.filter(label => label.name === name);

	console.log('name- ', name, 'filtered Name- ', filteredName)
	renderEntryViewHTML(filteredName)

}


function entryViewTemplate(label) {
	return `
		<div class="entry-view-cont">
			<div class="home-btn-cont">
				<button onclick="renderLabelViewHTML()" class="button btn-font is-primary-color home-btn">Home</button>
			</div>
			<div class="entry-cont">
				<div class="entry-name-cont">
					<h1 class="title is-1">${label.name}</h1>
				</div>
				<div class="btn-cont">
					<div class="entry-btn-cont">
						<button class="entry-yes-btn btn-font button is-primary-color is-large">Yes</button>
					</div>
					<div class="entry-btn-cont">
						<button class="entry-no-btn btn-font button is-primary-color is-large">No</button>
					</div>
				</div>
			</div>
		</div>
	`
}


function renderEntryViewHTML(filteredName) {
	let entryToView = filteredName.map(label => entryViewTemplate(label)).join('')

	mainViewCont.innerHTML = entryToView;
}



renderLabelViewHTML();

