console.log("hello back to School");

// #1 create a variable to store the vizContainer

const vizContainer = document.getElementById("vizContainer");

// #2 create a variable to store the dashboard option

const options = {
	device: "desktop",
	height: "800px",
	width: "1100px",
};

// #3create a vaiable to share the URL

const url =
	"https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia";

// #4 creating the function to display our viz

function initViz() {
	const viz = new tableau.Viz(vizContainer, url, options);
}

// #5 actually run the function

initViz();

// #6
