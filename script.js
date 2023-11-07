let heading = document.getElementById("title");
let names = document.getElementById("name-input");
let outputImage = document.getElementById("character");
let output = document.getElementById("detail-result");
let background = document.getElementById("background");



function generate(){
	restyle();
	generateResults();
}



function generateResults() {
	const characterImages = ["Character.png", "Character2.png", "Character3.png", "Character4.png", "Character5.png", "Character6.png", "Character7.png", "Character8.png", "Character9.png", "Character10.png"
	];
	const detailResults = [" ,you're a wise person with tons of knowledge about magic, but unfortunately you can only cast a spell to open doors.", " , what even are you? You're an enigma to everyone, including yourself. You don't even know what you look like because every time you look in a mirror, it's blank.", " is a powerful and cynical being reincarnated and forced to be in the body of something normal and even worse, mortal. May they return to their once former glory!", " is a chef who only makes chicken soup. Yeah, that's all you do, cook soup. At least it's good soup!", " is a being beloved by everyone but beds. For some reason, every time they lay down on a bed, their bed poofs out of existence.", " is a normal person. Yeah, that's all. Continue.", " is secretly an undercover agent trying to steal the secret formula to the ultimate pie. They seem to have forgotten their role though", " is an all powerful being that defies any and all laws. They are a being that should not exist, but they do because they're unfortunately, a mary sue."
	];
	let randomPic = characterImages[Math.floor(Math.random() * characterImages.length)];
	let randomResult = detailResults[Math.floor(Math.random() * detailResults.length)];
	var visitor = document.getElementById("name-input").value;
	outputImage.src = randomPic;
	output.innerText =  visitor + randomResult;
}



function restyle(){
	let randomRed = Math.random() * 255;
	let randomGreen = Math.random() * 255;
	let randomBlue = Math.random() * 255;
	const randomFont = ["Arial", "Roboto", "Times New Roman", "Nothing You Could Do", "Reenie Beanie"];
	const randomBg = ["#d0eda6", "#a6aded", "#eda6cf", "#fc9595", "#fccc95", "#95ddfc", "#000", "#cfa580", "#fff"]

	let outputColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
	let outputBg = randomBg[Math.floor(Math.random() * randomBg.length)];
	heading.style.backgroundColor = outputBg;
	heading.style.color = outputColor;
	names.style.color = outputColor;
	output.style.color = outputColor;
	output.style.fontFamily = randomFont[Math.floor(Math.random() * randomFont.length)];
	output.style.fontSize = Math.random() * (8-0.5) + 0.5 + "vw";
}