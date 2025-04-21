const movies = [
    {
        title: "Annabelle",
        year: 2014,
        genre: "Horror, Supernatural",
        description: "John Form has found the perfect gift for his expectant wife, Mia – a beautiful, rare vintage doll in a pure white wedding dress. But Mia's delight with Annabelle doesn't last long. On one horrific night, their home is invaded by members of a satanic cult, who violently attack the couple. Spilled blood and terror are not all they leave behind. The cultists have conjured an entity so malevolent that nothing they did will compare to the sinister conduit to the damned that is now... Annabelle.",
        image: "annabelle_images/Annabelle (2014).jpg",
        trailer: "https://www.youtube.com/embed/paFgQNPGlsg",
    },
    {
        title: "Barbie",
        year: 2023,
        genre: "Comedy, Kids & Family",
        description: "Satisfied with her accomplishments, Barbie, the impeccable fashion icon and absolute style setter, is basking in her glory, believing she has resolved all issues related to feminism and equality. But life is full of surprises, even in glittery, plastic-fantastic Barbie Land. As a result, her contented life soon takes a detour when irrepressible thoughts and uncertain feelings start to weigh Barbie down. Now, sensing that something strange is happening between her bubblegum-pink home and the mysterious physical world, Barbie has no choice but to take the risk or lose the chance. As the blonde fashionista sets out on a noble quest for enlightenment, Barbie must confront her fears and anxieties to restore balance and make Wednesdays perfect again. However, the journey is long and challenging, and there is no guarantee that Barbie will find the answers she seeks. And what about handsome Ken, sweet Barbie's devoted admirer? Has anyone even bothered to ask him how he feels?",
        image: "barbie_images/Barbie (2023).jpg",
        trailer: "https://www.youtube.com/embed/pBk4NYhWNMM"
    },
    {
        title: "Bite",
        year: 2015,
        genre: "Horror",
        description: "While on her bachelorette party getaway, Casey gets a bite from an unknown insect and begins transforming into something monstrous.",
        image: "bite_images/Bite (2015).jpg",
        trailer: "https://www.youtube.com/embed/2ssS9DmZ8D4"
    },
    {
        title: "Black Panther",
        year: 2018,
        genre: "Action, Adventure",
        description: "T'Challa returns to Wakanda to succeed the throne but faces a powerful enemy threatening his nation and the world.",
        image: "blackpanther_images/Black Panther (2018).jpg",
        trailer: "https://www.youtube.com/embed/xjDjIWPwcPU"
    },
    {
        title: "Brave",
        year: 2012,
        genre: "Animation, Adventure, Fantasy, Kids & Family",
        description: "Princess Merida defies tradition and unleashes chaos, leading her to a journey to reverse a curse and find her destiny.",
        image: "brave_images/Brave (2012).jpg",
        trailer: "https://www.youtube.com/embed/TEHWDA_6e3M"
    },
    {
        title: "Bride of Chucky",
        year: 1998,
        genre: "Horror, Supernatural",
        description: "Chucky is resurrected by Tiffany and together they go on a deadly road trip while trying to regain human form.",
        image: "brideofchucky_images/Bride of Chucky (1998).jpg",
        trailer: "https://www.youtube.com/embed/I-WZYQ6nABA"
    },
    {
        title: "Coco",
        year: 2017,
        genre: "Animation, Kids & Family, Fantasy",
        description: "Miguel dreams of becoming a musician and finds himself in the Land of the Dead, where he uncovers his family's true legacy.",
        image: "coco_images/Coco (2017).jpg",
        trailer: "https://www.youtube.com/embed/Ga6RYejo6Hk"
    },
    {
        title: "Coraline",
        year: 2009,
        genre: "Fantasy, Animation, Kids & Family",
        description: "Coraline discovers a hidden world that mirrors her own but holds dark secrets and eerie dangers.",
        image: "coraline_images/Coraline (2009).jpg",
        trailer: "https://www.youtube.com/embed/XyUwEO7xelY"
    },
    {
        title: "Demon Slayer: Kimetsu no Yaiba - Mugen Train",
        year: 2020,
        genre: "Anime, Animation, Action, Adventure, Fantasy, Supernatural",
        description: "Tanjiro Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar’s head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, board the Infinity Train on a new mission with the Flame Pillar, Kyojuro Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it.",
        image: "demonslayermugentrain_images/Demon Slayer Kimetsu no Yaiba Mugen Train (2020).jpg",
        trailer: "https://www.youtube.com/embed/ATJYac_dORw"
    },
    {
        title: "Elemental",
        year: 2023,
        genre: "Animation, Kids & Family, Fantasy",
        description: "Ember and Wade, fire and water residents of a city of elements, discover how much they actually have in common.",
        image: "elemental_images/Elemental (2023).jpg",
        trailer: "https://www.youtube.com/embed/hXzcyx9V0xw"
    },
    {
        title: "Fractured",
        year: 2019,
        genre: "Thriller",
        description: "Ray's family disappears after a hospital visit, but the staff claim they were never there.",
        image: "fractured_images/Fractured (2019).jpg",
        trailer: "https://www.youtube.com/embed/sCimThZW-Ew"
    },
    {
        title: "Frozen",
        year: 2013,
        genre: "Animation, Adventure, Fantasy, Kids & Family",
        description: "Anna sets out on a journey to find her sister Elsa, who has trapped their kingdom in eternal winter.",
        image: "frozenfrozen2_images/Frozen (2013).jpg",
        trailer: "https://www.youtube.com/embed/FLzfXQSPBOg"
    },
    {
        title: "Frozen II",
        year: 2019,
        genre: "Animation, Adventure, Fantasy, Kids & Family",
        description: "Elsa follows a mysterious voice into the enchanted forest to discover the origin of her magical powers.",
        image: "frozenfrozen2_images/Frozen 2 (2019).jpg",
        trailer: "https://www.youtube.com/embed/Zi4LMpSDccc"
    },
    {
        title: "Gerald's Game",
        year: 2017,
        genre: "Thriller",
        description: "When a harmless game between a married couple in a remote retreat suddenly becomes a harrowing fight for survival, wife Jessie must confront long-buried demons within her own mind—and possibly lurking in the shadows of her seemingly empty house.",
        image: "geraldsgame_images/Geralds Game (2017).jpg",
        trailer: "https://www.youtube.com/embed/twbGU2CqqQU"
    },
    {
        title: "Home",
        year: 2015,
        genre: "Animation, Adventure, Kids & Family, Action, Fantasy",
        description: "When Oh, a loveable misfit from another planet, lands on Earth and finds himself on the run from his own people, he forms an unlikely friendship with an adventurous girl named Tip. Together, they discover the true meaning of the word HOME.",
        image: "home_images/Home (2015).jpg",
        trailer: "https://www.youtube.com/embed/MyqZf8LiWvM"
    },
    {
        title: "I Care A Lot",
        year: 2020,
        genre: "Thriller, Drama",
        description: "Marla Grayson is a professional legal guardian who drains the savings of her elderly wards. But her latest mark comes with a twist: connections to a dangerous gangster. Caught in a deadly game, Marla must fight fire with fire to survive.",
        image: "icarealot_images/I Care A Lot (2020).jpg",
        trailer: "https://www.youtube.com/embed/D40uHmTSPew"
    },    
    {
        title: "Miraculous Ladybug & Cat Noir, the Movie",
        year: 2023,
        genre: "Animation, Kids & Family, Action, Fantasy",
        description: "This exciting origin story follows two Parisian teenagers, Marinette Dupain-Cheng and Adrien Agreste, who transform into the superheroes Ladybug and Cat Noir, respectively, to protect Paris from supervillains led by Hawk Moth.",
        image: "miraculousladybugandcatnoirthemovie_images/Miraculous Ladybug and Cat Noir the Movie (2023).jpg",
        trailer: "https://www.youtube.com/embed/3fzFvZToh8o"
    },
    {
        title: "My Hero Academia: Heroes Rising",
        year: 2019,
        genre: "Action, Adventure, Anime, Animation, Fantasy",
        description: "Class 1-A visits Nabu Island for real hero work—but their peaceful assignment turns deadly when a powerful villain threatens the island. With All Might retired and no backup, Deku and his friends must rise to the occasion to protect everyone.",
        image: "myheroacademiaheroesrising_images/My Hero Academia Heroes Rising (2019).jpg",
        trailer: "https://www.youtube.com/embed/iaMLBWj6HjI"
    },
    {
        title: "My Little Pony: Equestria Girls - Legend of Everfree",
        year: 2016,
        genre: "Animation, Kids & Family, Adventure, Action, Fantasy",
        description: "When Canterlot High goes to Camp Everfree, the girls discover a magical force causing mysterious events. With new powers awakening, they must uncover the truth and stop a hidden threat to save the camp.",
        image: "mlplegendofeverfreerainbowrocks_images/MLP_Legend of Everfree (2016).jpg",
        trailer: "https://www.youtube.com/embed/-SJ8V0QFrPo"
    },    
    {
        title: "My Little Pony: Equestria Girls - Rainbow Rocks",
        year: 2014,
        genre: "Animation, Kids & Family, Action, Fantasy",
        description: "Music rules and rainbows rock as Twilight Sparkle and the girls must rock their way to the top to defeat The Dazzlings, a trio of sirens causing chaos at Canterlot High with dark musical magic.",
        image: "mlplegendofeverfreerainbowrocks_images/MLP_Rainbow Rocks (2014).jpg",
        trailer: "https://www.youtube.com/embed/aH1FFFYR2jI"
    },
    {
        title: "Plankton: The Movie",
        year: 2025,
        genre: "Comedy, Action, Adventure, Kids & Family, Animation",
        description: "When Karen the Computer goes rogue and sets out to take over the world, it's up to Plankton—with a little help from SpongeBob and the Gal Pals—to stop her in this original underwater adventure.",
        image: "plantonthemovie_images/Plankton The Movie (2025).jpg",
        trailer: "https://www.youtube.com/embed/IHRScjhllsQ"
    },
    {
        title: "Puss in Boots: The Last Wish",
        year: 2022,
        genre: "Animation, Action, Adventure, Kids & Family, Fantasy",
        description: "Puss in Boots is down to his last life. To get them back, he embarks on a daring quest for the Wishing Star, facing off against Goldilocks, Jack Horner, and the fearsome Big Bad Wolf.",
        image: "pussinbootsthelastwish_images/Puss in Boots The Last Wish (2022).jpg",
        trailer: "https://www.youtube.com/embed/RqrXhwS33yc"
    },    
    {
        title: "Secret of the Wings",
        year: 2012,
        genre: "Animation, Kids & Family, Adventure, Fantasy",
        description: "When Tinker Bell crosses into the forbidden Winter Woods, her wings sparkle with mysterious magic. There, she meets Periwinkle, a frost fairy who just might be her long-lost sister. Together, they discover a powerful secret and must unite warm and winter fairies to save the Pixie Dust Tree.",
        image: "secretofthewings_images/Secret of the Wings (2012).jpg",
        trailer: "https://www.youtube.com/embed/B2DRnfYqBL8"
    },
    {
        title: "Sing",
        year: 2016,
        genre: "Animation, Kids & Family",
        description: "Set in a world like ours but entirely inhabited by animals, Buster Moon, a dapper koala, presides over a once-grand theater that has fallen on hard times. Buster is an eternal (some might even say delusional) optimist, who loves his theater above all and will do anything to preserve it. Now faced with the crumbling of his life's ambition, he has one final chance to restore his fading jewel to its former glory by producing the world's greatest singing competition.",
        image: "sing_images/Sing (2016).jpg",
        trailer: "https://www.youtube.com/embed/S6S2K4-La_A"
    },
    {
        title: "Smile",
        year: 2022,
        genre: "Horror, Supernatural",
        description: "Dr. Rose Cotter begins experiencing terrifying and inexplicable events after witnessing a traumatic incident involving a patient. As a chilling entity takes hold, Rose must confront her haunting past to survive and escape the curse.",
        image: "smile_images/Smile (2022).jpg",
        trailer: "https://www.youtube.com/embed/BcDK7lkzzsU"
    },
    {
        title: "Terrifier",
        year: 2016,
        genre: "Horror",
        description: "On Halloween night, Art the Clown terrorizes two young women and anyone else unlucky enough to cross his path. A relentless slasher known for his silence, sadism, and blood-soaked rampage.",
        image: "terrifier_images/Terrifier (2016).jpg",
        trailer: "https://www.youtube.com/embed/fN5j1MtGO2Q"
    },
    {
        title: "The Conjuring",
        year: 2013,
        genre: "Horror, Supernatural",
        description: "Paranormal investigators Ed and Lorraine Warren help a family terrorized by a dark presence in their farmhouse. Based on true events, the Warrens face their most horrifying case yet.",
        image: "theconjuring_images/The Conjuring (2013).jpg",
        trailer: "https://www.youtube.com/embed/k10ETZ41q5o"
    },
    {
        title: "The Princess and the Frog",
        year: 2009,
        genre: "Animation, Fantasy, Kids & Family, Adventure",
        description: "Tiana, a hardworking waitress, dreams of owning her own restaurant. But after kissing a frog prince who’s actually a human cursed by voodoo magic, she is transformed into a frog herself and embarks on a wild adventure through the bayous of Louisiana.",
        image: "theprincessandthefrog_images/The Princess and the Frog (2009).jpg",
        trailer: "https://www.youtube.com/embed/uQBy6jqbmlU"
    },
    {
        title: "The Truman Show",
        year: 1998,
        genre: "Drama, Kids & Family",
        description: "Truman Burbank lives a seemingly perfect life—until he begins to suspect that everything around him is a carefully constructed TV show. As his world unravels, Truman must decide whether to keep living the lie or break free into the unknown.",
        image: "thetrumanshow_images/The Truman Show (1998).jpg",
        trailer: "https://www.youtube.com/embed/dlnmQbPGuls"
    },    
    {
        title: "Train to Busan",
        year: 2016,
        genre: "Horror, Supernatural, Action, Adventure",
        description: "Seok-woo and his young daughter board a high-speed train to Busan just as a zombie outbreak sweeps South Korea. Trapped on the moving train, they must fight for survival as the undead close in and society crumbles around them.",
        image: "traintobusan_images/Train to Busan (2016).jpg",
        trailer: "https://www.youtube.com/embed/pyWuHv2-Abk"
    },
    {
        title: "Truth or Dare",
        year: 2017,
        genre: "Horror, Supernatural, Action",
        description: "Eight college friends head to a haunted house to play Truth or Dare on Halloween. But the game takes a deadly turn as supernatural forces enforce each challenge with horrifying consequences. Refuse the dare... and you die.",
        image: "truthordare_images/Truth or Dare (2017).jpg",
        trailer: "https://www.youtube.com/embed/PoP0QokQNH0"
    },
    {
        title: "Unlocked",
        year: 2023,
        genre: "Thriller",
        description: "Na-Mi's life is turned upside down when she loses her phone, and a stranger gains access to her private data, apps, and passwords. Soon, her every move is tracked, and her safety depends on uncovering who’s behind the digital stalking before it’s too late.",
        image: "unlocked_images/Unlocked (2023).jpg",
        trailer: "https://www.youtube.com/embed/k8qGElYoAoU"
    },
];
if (sessionStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "litslogin.html";
}
// Movie modal logic
function openModal(title, genre, imageSrc, description, trailer) {
    const modalImage = document.getElementById("modalImage");
    const colorThief = new ColorThief();

    modalImage.crossOrigin = "Anonymous";
    modalImage.src = imageSrc;

    modalImage.onload = () => {
        let color = [51, 51, 51];
        try {
            color = colorThief.getColor(modalImage);
        } catch (err) {
            console.error("Color extraction failed", err);
        }

        const rgbColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        document.querySelectorAll(".tab-btn").forEach(btn => {
            btn.style.backgroundColor = rgbColor;
            btn.style.color = "#fff";
            btn.style.border = "1px solid #fff";
        });
    };

    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalGenre").textContent = genre;
    document.getElementById("modalDescription").textContent = description;
    document.getElementById("modalTrailer").src = trailer || "";
    document.getElementById("movieModal").style.display = "block";
}

function closeModal() {
    document.getElementById("movieModal").style.display = "none";
    document.getElementById("modalTrailer").src = "";
}

function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    const index = ["detailsTab", "trailerTab"].indexOf(tabId);
    document.querySelectorAll(".tab-buttons .tab-btn")[index].classList.add('active');
}

// Filter functionality
function filterMovies() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const selectedGenre = document.getElementById("genreFilter").value.toLowerCase();
    const cards = document.querySelectorAll(".movie-card");

    cards.forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();
        const genreList = card.getAttribute("data-genre").toLowerCase().split(",").map(g => g.trim());

        const matchesTitle = title.includes(search);
        const matchesGenre = selectedGenre === "" || genreList.includes(selectedGenre);

        card.style.display = (matchesTitle && matchesGenre) ? "block" : "none";
    });
}

// Sort functionality
function sortMovies() {
    const sortValue = document.getElementById("sortFilter").value;
    let sortedMovies = [...movies];

    switch (sortValue) {
        case "az":
            sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case "za":
            sortedMovies.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case "oldest":
            sortedMovies.sort((a, b) => a.year - b.year);
            break;
        case "newest":
            sortedMovies.sort((a, b) => b.year - a.year);
            break;
    }

    renderMovies(sortedMovies);
}

// Render movie grid
function renderMovies(movieList) {
    const movieGrid = document.getElementById("movieGrid");
    movieGrid.innerHTML = "";

    movieList.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.setAttribute("data-genre", movie.genre);

        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title} (${movie.year})</h3>
        `;

        card.addEventListener("click", () => {
            openModal(
                movie.title,
                movie.genre,
                movie.image,
                movie.description,
                movie.trailer
            );
        });

        movieGrid.appendChild(card);
    });
    filterMovies();
}

// Back to top button
document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    renderMovies(movies); // make sure your `movies` array is loaded beforehand

    const params = new URLSearchParams(window.location.search);
    const movieParam = params.get("movie");

    if (movieParam) {
        const decodedTitle = decodeURIComponent(movieParam).toLowerCase();

        setTimeout(() => {
            const movieCard = Array.from(document.querySelectorAll(".movie-card"))
                .find(card => card.querySelector("h3")?.innerText.toLowerCase().includes(decodedTitle));

            if (movieCard) {
                movieCard.scrollIntoView({ behavior: "smooth", block: "center" });
                movieCard.click(); // trigger modal
            } else {
                console.warn("Movie not found:", decodedTitle);
            }
        }, 500);
    }
});

// Close modal on outside click or Esc key
window.onclick = e => {
    if (e.target.id === "movieModal") closeModal();
};
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
});

