"use strict";

const members = [
	{
		name: "Călin",
		role: "CFO",
		photo: "calin-ungurean.jpeg",
		mail: "calin@creativemotion.ro",
		desc: {
			ro: "Cu o încredere de neegalat, Călin a fost dintotdeauna partea logică și tehnică a echipei. Unde alții se împiedică, el găsește mereu o cale să ne scoată din încurcătură. Lucrând din greu până în ultimul moment, întotdeauna termină ce își propune, în același timp inspirându-ne cu o stare de bine. Printre abilitățile lui se numără: electronica, designul de produs, inovația și colectarea și manipularea datelor.",
			en: "A strong-willed individual, Calin was always the more technical and logical part of the team. Where others fail, he brings the out-of-the-box solution and puts us back on our path. Always working hard until the very last minute, he finishes the job all the while socialising and having a good time with anyone around him. His skills include: Electronics,Product Design,Innovation and cold, hard Data-wrangling."
		},
		links: [
			{href: "/blinkr", name: "BLINKR"}
		]
	},
	{
		name: "Luca",
		role: "CEO",
		photo: "luca-stirbat.jpg",
		mail: "lucastirbat@creativemotion.ro",
		desc: {
			ro: "Cu o pasiune puternică pentru tot ce funcționează cu electricitate, Luca e un lider persistent și concentrat. Adoră să dezbată și să aducă argumente puternice la masa de negocieri, iar abilitățile sale de public speaking l-au ajutat să crească dintr-un adolescent timid într-un tânăr decis și abil. Principalele sale interese includ robotica, educația, inovația, și construirea caracterelor.",
			en: "With a strong affinity for tech, Luca is a persistent and focused leader. He loves to debate and bring strong arguments to the table, and his presentation skills helped him evolve from a shy geeky teenager into a decisive person-of-action. Main areas of interest include: Robotics, Innovation, Education and “Building people”."
		},
		links: [
			{href: "/blinkr", name: "BLINKR"},
			{href: "/ledjx", name: "LEDJ X"}
		]
	},
	{
		name: "Cristina",
		role: "Media",
		photo: "cristina-martinescu.jpg",
		mail: "cristinamrt@creativemotion.ro",
		desc: {
			ro: "Salut! Mă cheamă Cristina și mă ocup de conținutul paginilor noastre de social media și de pe website. Jocurile video ocupă o mare parte din timpul meu liber, deoarece pentru mine ele reprezintă o formă de artă, de exprimare creativă. Îmi mai place să compun la pian, să explorez și fotografia. Aduc elementele edgy și out-of-the-box în viziunea echipei și îmi place de Ioan.",
			en: "Hey! I’m Cristina and I deal with the content of our social media pages and of our website. Video games take up most of my time, as for me they represent a form of art, of creative expression. I also like writing songs on piano, exploring and photography. I bring the edgy and out-of-the-box elements in the team’s vision and I like Ioan."
		},
		links: [
			{href: "/blinkr", name: "BLINKR"}
		]
	},
	{
		name: "Eduard",
		role: "UI/UX Designer",
		photo: "eduard-bulai.jpg",
		mail: "eduardstefan@creativemotion.ro",
		desc: {
			ro: "Salut, sunt Edi și mă ocup de design și elemente vizuale pentru website-uri, aplicații sau orice altceva mai e nevoie. Am o pasiune pentru tot ce e frumos și îmi place să creez legături puternice între esență și aparență. Nu de multe ori m-am trezit cu foarte multe lucruri de făcut în același timp, dar asta nu mă oprește din a livra muncă de calitate.",
			en: "Hello, I'm Edi and I deal with design and visual elements for websites, apps or anything else that may need my set of skills. I have a passion for everything thoughtful and beautiful, I love creating strong bonds between essence and what’s on the outside. On many occasions I have found myself overwhelmed by my work, but that doesn’t stop me from delivering great assets."
		},
		links: [
			{href: "/taskdone", name: "TaskDone"}
		]
	},
	{
		name: "George",
		role: "Android dev",
		photo: "george-bardas.jpg",
		mail: "georgebardas@creativemotion.ro",
		desc: {
			ro: "Salut, sunt George, lucrez la majoritatea aplicațiilor pe care le vedeți, programând viziunea echipei mele. Android sau IOS, nu contează, eu le fac să meargă. Ador voluntariatul, mai ales dacă mă duce departe de casă, în călătorii noi și interesante. Înainte să intru în Creative Motion lucram la proiecte similare cu Edi, munca noastră complementându-se.",
			en: "Hi there, I’m George, I work on most of the apps you see, programming the vision of my team. Android or IOS, it doesn’t matter to me, I just make it work, simple as that. I love volunteering, especially if it takes me far away from home, on new and inspiring trips. Before joining Creative Motion, I was working on similar projects with Edi, complementing each others work."
		},
		links: [
			{href: "/taskdone", name: "TaskDone"}
		]
	},
	
	{
		name: "Ovidiu",
		role: "Hardware dev",
		photo: "ovidiu-sandru.jpg",
		mail: "contact@creativemotion.ro",
		desc: {
			ro: "Salut, eu sunt Ovidiu, zis și Ovi, iar misiunea mea este să las lumea un pic mai bună decât am găsit-o. Am o pasiune pentru tehnologie, sunt cercetaș, fac voluntariate și îmi place să merg pe munte. Carismatic, optimist, calm, niciodată nu-mi încalc promisiunile. Ne vedem în descrierea următoare. ;)",
			en: "Hey, I’m Ovidiu, a.k.a. Ovi, and my mission is to leave the world a tad better than I found it. I’ve got a passion for technology, I volunteer and I like mountain hikes. Charismatic, optimistic and calm, I never break my promises. See you in the next description. ;)"
		},
		links: [
			{href: "/blinkr", name: "BLINKR"},
			{href: "/oviprinter", name: "Ovi's 3D printer"}
		]
	},
	{
		name: "Victor",
		role: "Software dev",
		photo: "victor-ionescu.jpg",
		mail: "victor.ionescu.razvan@creativemotion.ro",
		desc: {
			ro: "Bonjour, sunt Victor - încântat de cunoștință. Mă ocup de front-end și programare, ador plimbările cu tramvaiul 41 și în cele mai multe din zile practic dansul sportiv (Paso Doble e favoritul meu). Ce mă face diferit de restul, în afară de faptul că citesc lecturile suplimentare la română, este că pot vorbi ore în șir despre orice subiect se ridică la fileu.",
			en: "Buongiorno, I’m Victor, nice to meet you. I deal with front-end and programming, I love rides on tram 41 and most days I do ballroom dancing (Paso Doble is my favorite). What makes me different to the others, other than the fact that I read the extra books for the Romanian class, is that I can talk for hours about any given subject."
		},
		links: [
			{href: "/foodtracc", name: "foodtra.cc"}
		]
	},
	{
		name: "Șerban",
		role: "Product designer",
		photo: "serban-tatarciuc.jpg",
		mail: "contact@creativemotion.ro",
		desc: {
			ro: "Student la Politehnica, Serban ne ajuta sa dezvoltam produsele hardware care ajung in mainile voastre. Studiaza ingineria industriala in cadrul facultatii de inginerie mecanica si mecatronica, fiind pasionat de tot ce presupune creativitate. Serban cauta intotdeauna cea mai buna varianta, nu se opreste la “merge si asa”. Deviza lui: Designul urmareste functiunea. Pe noi ne-a cucerit!",
			en: "Currently a student of Politehnica University, Serban creates the hardware products that end up in your hands. He is currently studying industrial engineering, getting involved in anything that involves creativity. Serban is always looking for the best course of action, he doesn’t settle and he always follows his mantra: Design follows function. He has our vote!"
		},
		links: [
			{href: "/blinkr", name: "BLINKR"}
		]
	},
	{
		name: "Răzvan",
		role: "Web Dev",
		photo: "razvan-mihai.jpg",
		mail: "contact@creativemotion.ro",
		desc: {
			ro: "Ma numesc Razvan si sunt un adevarat iubitor de arta digitala. Am decis sa devin un dezvoltator web pentru a putea lua parte la evolutia trend-urilor din design si, in viitor, poate voi avea ocazia sa dictez cateva dintre ele. De ce nu un simplu designer? Pentru ca paginile web sunt peste tot si oamenii pot vedea astfel mai usor munca mea.",
			en: "Simply put, I consider myself a digital art lover. In consequence, I've decided to become a web developer to be part of the design trends and maybe, in the future, to dictate some of them. So why not a simple designer? Because web pages are everywhere and people can see my work much easier."
		},
		links: [
			{href: "/blinkr", name: "BLINKR"}
		]
	},
].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());

