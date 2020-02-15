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
		name: "Cristi",
		role: "Software dev",
		photo: "cristi-kaz.jpeg",
		mail: "cristikaz@creativemotion.ro",
		desc: {
			ro: "Cristi este sfătuitorul nostru când vine vorba de ce e cool și ce nu pe piață. Întotdeauna cu ochii pe noile tehnologii, el ne pune în temă cu viziunea și dorințele clientului astfel încât să ne apropiem cât de tare putem de canalele de comunicare potrivite. Printre pasiunile sale se numără gadget-urile, noutățile din lumea tech și evenimentele de prezentare, fiind cunoscut în echipă drept un adevărat vânător de tehnologie.",
			en: "Our trusted advisor on anything that is cool or not, Cristi is the go-to-guy when we need the clients vision. He sees it just as any other future costumer would and gives us appropriate feedback. He follows all the tech channels and keeps us up to date on what’s cool and what’s not, giving us that extra edge. His passions include: Gadgets, Tech news and events, Innovation and is a renown “Tech Hunter”."
		},
		links: [
			{href: "/blinkr", name: "BLINKR"}
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
		name: "Laura",
		role: "Software dev",
		photo: "laura-pircalaboiu.jpg",
		mail: "laurapirca@creativemotion.ro",
		desc: {
			ro: "Laura, programatoare ca ocupație, sare în ajutor oricând apare oportunitatea, fie vorba de sfaturi și ajutor pentru cod sau construirea unui robot de la zero. Participă încontinuu la concursuri de robotică precum First Tech Challenge unde își pune în practică abilitățile inginerești și dezvoltă prototipuri relevante.",
			en: "Laura, a programmer at heart, jumps at every opportunity to offer her help, whether it’s expertise and advice on some code or building something from scratch. Her past experience with Robotics in the First Tech Challenge competition makes her the perfect engineer for our tech-savvy prototypes. Among her interests you will find: Robotics, Programming and Innovation."
		},
		links: [
			{href: "/blinkr", name: "BLINKR"},
			{href: "/ledjx", name: "LEDJ X"}
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
		name: "Ioan",
		role: "Software dev",
		photo: "ioan-dragomir.jpg",
		mail: "ioan@creativemotion.ro",
		desc: {
			ro: "Salut, numele meu este Ioan. Programez că să evit responsabilități și, deși am participat la ONI de nu știu câte ori, cel mai mult îmi place la Hackathoane, pentru că trebuie să-mi folosesc mai mult creativitatea decât abilitățile în algoritmică. Sunt o persoană introvertită, curioasă și pragmatică, atât în vorbe cât și în acțiuni. Nu-mi place să pierd timpul (al meu sau al altora - Ovi approves) și abia aștept următoarea provocare.",
			en: "Hello, my name is Ioan. I code to avoid responsibilities and, although I’ve been to the National Olympiad for Informatics plenty of times, I like attending Hackathons the most, because they require my creativity more than my abilities in algorithmics. I’m an introverted person, curious and pragmatic, both in speech as well as in actions. I don’t like wasting time (not mine nor others’ - Ovi approves) and I can’t wait for the next challenge."
		},
		links: [
			{href: "/foodtracc", name: "foodtra.cc"}
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
		name: "Vlad",
		role: "Hardware dev",
		photo: "vlad-isuf.jpg",
		mail: "contact@creativemotion.ro",
		desc: {
			ro: "Bună, numele meu e Vlad, sunt student la Unversitatea Politehnica acum și mă ocup în mare parte de programarea hardware în Creative Motion. Consider codul doar o unealtă care mă ajută să termin treaba, iar ambițiile mele nu se limitează doar la sectorul tehnic. Îmi place să sar în acțiune și să ajut cât de mult pot astfel încât cei din jurul meu să știe că se pot baza pe mine.",
			en: "Hey there, my name is is Vlad, im a student right now in Politehnica University and i mostly take care of the hardware programming around here. I think of code as just a tool which helps me get the job done, and my ambitions stretch way beyond the tech sector. I love jumping into action and helping out as much as I can so others know they can always count on me."
		},
		links: [
			{href: "/blinkr", name: "BLINKR"}
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
].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());

