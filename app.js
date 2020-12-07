const result = document.getElementById("result");
const boccacio = document.getElementById("boccacio");
const mcdo = document.getElementById("mcdo");
const kingMarcel = document.getElementById("km");

const restaurants = [
	{ id: "boccacio", nom: "Il Boccacio" },
	{ id: "mcdo", nom: "McDo" },
	{ id: "km", nom: "King Marcel" },
];
const choixBoccacio = [
	"Pizza Peperoni",
	"Pizza Prosciutto Crudo",
	"Lasagnes Bolognaises",
	"Linguine Carbonara",
	"Spaghetti Bolognaise",
];
const choixKingMarcel = [
	"Marcel Cerdan",
	"Marcel Michelin",
	"Marcel Duchamp",
	"Marcel Jackson",
	"Marcel du marché",
	"Le Marcel",
	"Burger du jour",
];

const getRandomNumber = (max) => {
	return Math.floor(Math.random() * Math.floor(max));
};

let i;
let resultat;
boccacio.addEventListener("click", () => {
	i = getRandomNumber(choixBoccacio.length);
	resultat = choixBoccacio[i];
	result.innerHTML = resultat;
});

kingMarcel.addEventListener("click", () => {
	i = getRandomNumber(choixKingMarcel.length);
	resultat = choixKingMarcel[i];
	result.innerHTML = resultat;
});
