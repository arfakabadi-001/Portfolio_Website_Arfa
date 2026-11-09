/* ========== PROJECT DATA: add or edit your projects here ========== */
const projects = [
  {
    title: "Sortix",
    type: "Industry project · H.G. Hawa & Co.",
    cat: ["upcoming"],
    color: "var(--blue)",
    wide: true,
    soon: "Coming next semester",
    text: "A courier management and sorting solution for small and medium-sized courier hubs and e-commerce operations. I will build the React interface and add machine learning once I cover it in my coursework.",
    tags: ["React.js", "Tailwind CSS"],
    links: []
  },
  {
    title: "ARIN",
    type: "AI product label analyzer",
    cat: ["python", "ai"],
    color: "var(--mint)",
    text: "Scans product labels using OCR and AI, analyses the ingredients and generates a clear product health report.",
    tags: ["Python", "Flask", "OCR", "SQLite", "Bootstrap"],
    links: [["Live site", "https://arin-two.vercel.app"]]
  },
  {
    title: "OptiMat",
    type: "Decision-support software",
    cat: ["python"],
    color: "var(--peach)",
    text: "Evaluates material options against engineering constraints and weighted priorities using normalized scoring, filtering and ranking.",
    tags: ["Python", "Flask", "SQLite", "Git"],
    links: [["GitHub", "https://github.com/arfakabadi-001/OptiMat"]]
  },
  {
    title: "NetPulse",
    type: "Network traffic monitor",
    cat: ["python"],
    color: "var(--butter)",
    text: "Captures and analyses packet-level traffic, tracks active IPs and ports, visualizes traffic and raises real-time anomaly alerts.",
    tags: ["Python", "Flask", "Scapy", "Matplotlib"],
    links: [["GitHub", "https://github.com/arfakabadi-001/Network-Traffic-Analyzer"]]
  },
  {
    title: "Cineverse",
    type: "Movie discovery platform",
    cat: ["frontend"],
    color: "var(--lilac)",
    text: "A responsive, OTT-inspired movie platform with a modern interface and an interactive frontend.",
    tags: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
    links: [
      ["Live site", "https://arfakabadi-001.github.io/cineverse-movieplatform"],
      ["GitHub", "https://github.com/arfakabadi-001/cineverse-movie-platform"]
    ]
  },
  {
    title: "AlpineRiverhill Villa",
    type: "Client website · HertzSoft internship",
    cat: ["frontend"],
    color: "var(--blue)",
    text: "A live, responsive website for a villa business, built during my internship.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    links: [["Live site", "https://alpineriverhill.com"]]
  }
];

/* Draw the project cards. 'filter' decides which ones to show */
const grid = document.getElementById("projectGrid");

function showProjects(filter) {
  grid.innerHTML = "";

  projects
    .filter(p => filter === "all" || p.cat.includes(filter))
    .forEach(p => {
      const col = document.createElement("div");
      // Sortix is full width on "All", every other card is half width
      col.className = p.wide && filter === "all" ? "col-12" : "col-md-6";

      col.innerHTML =
        "<article class='project' style='background:" + p.color + "'>" +
          (p.soon ? "<span class='soon'>" + p.soon + "</span>" : "") +
          "<small>" + p.type + "</small>" +
          "<h3>" + p.title + "</h3>" +
          "<p>" + p.text + "</p>" +
          "<ul class='tags'>" + p.tags.map(t => "<li>" + t + "</li>").join("") + "</ul>" +
          "<div class='plinks'>" +
            p.links.map(l => "<a href='" + l[1] + "' target='_blank' rel='noopener'>" + l[0] + "</a>").join("") +
          "</div>" +
        "</article>";

      grid.appendChild(col);
    });
}
showProjects("all");

/* Filter buttons */
document.getElementById("filters").addEventListener("click", e => {
  if (e.target.tagName !== "BUTTON") return;
  document.querySelectorAll("#filters button").forEach(b => b.classList.remove("on"));
  e.target.classList.add("on");
  showProjects(e.target.dataset.filter);
});

/* Changing words in the hero */
const words = ["responsive React interfaces", "Flask backends", "AI-powered features", "clean, usable designs"];
const wordEl = document.getElementById("word");
let w = 0;
setInterval(() => {
  wordEl.style.opacity = 0;
  setTimeout(() => {
    w = (w + 1) % words.length;
    wordEl.textContent = words[w];
    wordEl.style.opacity = 1;
  }, 300);
}, 2600);

/* Copy email button */
document.getElementById("copy").addEventListener("click", e => {
  navigator.clipboard.writeText("arfakabadi200811@gmail.com");
  e.target.textContent = "Copied!";
  setTimeout(() => (e.target.textContent = "Copy email"), 1800);
});

/* Contact form: opens the visitor's email app with the message filled in */
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("fname").value;
  const email = document.getElementById("femail").value;
  const msg = document.getElementById("fmsg").value;
  const body = msg + "\n\nFrom: " + name + " (" + email + ")";
  window.location.href =
    "mailto:arfakabadi200811@gmail.com?subject=" +
    encodeURIComponent("Portfolio message from " + name) +
    "&body=" + encodeURIComponent(body);
});
