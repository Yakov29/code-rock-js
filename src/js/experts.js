const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    url: "../img/albert.jpg",
    alt: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    url: "../img/isaac.jpg",
    alt: "Isaac Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    url: "../img/galileo.jpg",
    alt: "Galileo",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    url: "../img/curie.jpg",
    alt: "Marie Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    url: "../img/kepler.jpg",
    alt: "Johannes Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    url: "../img/copernicusn.webp",
    alt: "Nicolaus Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    url: "../img/plank.jpg",
    alt: "Max Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    url: "../img/katherine.jpg",
    alt: "Katherine Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    url: "../img/ada.jpg",
    alt: "Ada Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    url: "../img/sarah.webp",
    alt: "Sarah E. Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Lise",
    surname: "Meitner",
    url: "../img/lisa.jpg",
    alt: "Lise Meither",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    url: "../img/hanna.jpg",
    alt: "Hanna Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];
const refs = {
  galleryEl: document.querySelector("[data-experts]"),
  galleryElems: document.querySelectorAll(".gallery__item"),
  btnsListEl: document.querySelector("[data-experts-controls]"),
  controlsEl: document.querySelectorAll("[data-experts-btn]"),
};
const { galleryEl, controlsEl, btnsListEl, galleryElems } = refs;

render(scientists);

//# Btns functions begin

function render(arrayOfScientists) {
  galleryEl.innerHTML = "";
  arrayOfScientists.forEach((scientist) => {
    galleryEl.innerHTML += `<li class="gallery__item"><img src="${scientist.url}" alt="${scientist.alt}" class="experts__img" /><div class="gallery-box"><h3>${scientist.name} ${scientist.surname}</h3><p>${scientist.born} - ${scientist.dead}</p></div></li>`;
  });
}

function findExpertsBornedIn() {
  const resOfFlter = scientists.filter(
    (scientist) => scientist.born >= 1801 && scientist.born <= 1900
  );
  render(resOfFlter);
}

function findYearsOfAlbert() {
  const indexOfAlbert = scientists.findIndex(
    (scientist) =>
      scientist.name === "Albert" && scientist.surname === "Einstein"
  );
  render([scientists[indexOfAlbert]]);
}

function scientistByAlpabet() {
  const sortedScientists = scientists.toSorted((scientist, nextScientist) => {
    const scientistName = scientist.name.toUpperCase();
    const nextScientistName = nextScientist.name.toUpperCase();
    if (scientistName > nextScientistName) {
      return 1;
    }
    if (scientistName < nextScientistName) {
      return -1;
    }
    return 0;
  });
  render(sortedScientists);
}

function filterSurnameLetter() {
  const filteredScientists = scientists.filter(
    (expert) => expert.surname.split("")[0].toUpperCase() === "C"
  );
  render(filteredScientists);
}

function sortScientistsByYears() {
  const sortedScientists = scientists.toSorted((scientist, nextScientist) => {
    const scientistLived = scientist.dead - scientist.born;
    const nextScientistLived = nextScientist.dead - nextScientist.born;
    return scientistLived - nextScientistLived;
  });
  render(sortedScientists);
}

function filterScientistsByName() {
  const filteredScientists = scientists.filter(
    (elem) => elem.name[0].toUpperCase() !== "A"
  );
  render(filteredScientists);
}

function findLatestScientist() {
  let latestScientist = scientists[0];
  scientists.forEach((elem) => {
    if (elem.born > latestScientist.born) {
      latestScientist = elem;
    }
  });
  render([latestScientist]);
}

function findTwoScientists() {
  let maxScientist = scientists[0];
  let minScientist = scientists[0];
  const maxScientistLived = maxScientist.dead - maxScientist.born;
  const minScientistLived = minScientist.dead - minScientist.born;
  scientists.forEach((elem) => {
    const currentScientistLived = elem.dead - elem.born;
    if (currentScientistLived > maxScientist.dead - maxScientist.born) {
      maxScientist = elem;
    }
    if (currentScientistLived < minScientist.dead - minScientist.born) {
      minScientist = elem;
    }
  });
  render([maxScientist, minScientist]);
}

function filterExpertsByFullname() {
  const filteredExperts = scientists.filter(
    (elem) => elem.name[0] === elem.surname[0]
  );
  render(filteredExperts);
}

//# Btns functions end

btnsListEl.addEventListener("click", (e) => {
  const indexOfClikedElem = Array.from(controlsEl).findIndex(
    (btn) => btn === e.target
  );

  if (indexOfClikedElem !== -1) {
    if (indexOfClikedElem === 0) {
      findExpertsBornedIn();
    } else if (indexOfClikedElem === 1) {
      findYearsOfAlbert();
    } else if (indexOfClikedElem === 2) {
      scientistByAlpabet();
    } else if (indexOfClikedElem === 3) {
      filterSurnameLetter();
    } else if (indexOfClikedElem === 4) {
      sortScientistsByYears();
    } else if (indexOfClikedElem === 5) {
      filterScientistsByName();
    } else if (indexOfClikedElem === 6) {
      findLatestScientist();
    } else if (indexOfClikedElem === 7) {
      findTwoScientists();
    } else if (indexOfClikedElem === 8) {
      filterExpertsByFullname();
    }
  }
});
