const numArticles = 8;

const fakeArticleInfo = [
	["Learning CSS 101", "From background colors to animations, this article can teach you all you need to know!"],
	["Robotic Soccer", "Just how do they do it? Meet the world champion team and how they got here!"],
	["Black Holes and Beyond!", "Just what does a black hole look like? Learn about the woman who made it her mission to find out and how she used her programming skills to get there!"],
	["Think Fast and React!", "What is React? How do we use it? Why? Learn more in this article!"],
	["All You Need is JavaScript", "Everything there is to know about JavaScript, from where it is used to all it's quirks. Think you know everything? Think again!"],
	["Biggest Tech CEOs", "How does someone get to be the head of a big tech company? Learn more about the journey these CEOs took and what you can do to succeed."],
	["Celebrating the Women in Tech", "Did you know that the first computer programmer was a woman? Click here to learn more about women's contribution to computer science."],
	["Node You Don't!", "The most common errors in Node and how to fix them!"],
];

function createArticles() {
	let articlesWrapper = document.querySelector(".articles");
	
	for (let i = 0; i < numArticles; i++) {
		let article = document.createElement("div");
		article.classList.add("info-block");
		article.setAttribute("position", i);

		if (i % 3 === 0) {
			article.classList.add("c1");
		}
		else if (i % 3 === 1) {
			article.classList.add("c2");
		}
		else {
			article.classList.add("c3");
		}

		let max = fakeArticleInfo.length;
		rand = Math.floor(Math.random() * Math.floor(max));

		let title = document.createElement("div");
		let description = document.createElement("div");
		title.classList.add("art-title");
		title.innerHTML = fakeArticleInfo[rand][0];
		description.classList.add("art-des");
		description.innerHTML = fakeArticleInfo[rand][1];

		article.appendChild(title);
		article.appendChild(description);

		articlesWrapper.appendChild(article);
	}
}

createArticles();