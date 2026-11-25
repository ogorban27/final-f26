const songs = [
    {
        title: "she's all i wanna be",
        artist: "Tate McRae",
    },
    {
        title: "Holy Ground",
        artist: "Taylor Swift",
    },
    {
        title: "I'm Trying (Not Friends)",
        artist: "Maisie Peters",
    },
    {
        title: "Cigarette Daydreams",
        artist: "Cage The Elephant",
    },
    {
        title: "Red",
        artist: "Taylor Swift",
    },
    {
        title: "Telepath",
        artist: "Conan Gray",
    },
    {
        title: "Everybody Talks",
        artist: "Neon Trees",
    },
    {
        title: "People Watching",
        artist: "Conan Gray",
    },
    {
        title: "good 4 u",
        artist: "Olivia Rodrigo",
    },
    {
        title: "Brokenhearted",
        artist: "Karmin",
    },
    {
        title: "Someone To You",
        artist: "BANNERS",
    },
    {
        title: "Little Talks",
        artist: "Of Monsters and Men",
    },
    {
        title: "Can't Hold Us",
        artist: "Macklemore, Ryan Lewis, Ray Dalton",
    },
    {
        title: "Counting Stars",
        artist: "OneRepublic",
    },
    {
        title: "Payphone",
        artist: "Maroon 5, Wiz Khalifa",
    },
    {
        title: "Glad You Came",
        artist: "The Wanted",
    },
    {
        title: "Maps",
        artist: "Maroon 5",
    },
    {
        title: "Me And My Broken Heart",
        artist: "Rixton",
    },
    {
        title: "Classic",
        artist: "MKTO",
    },
    {
        title: "Tongue Tied",
        artist: "GROUPLOVE",
    },
    {
        title: "Numb Little Bug",
        artist: "Em Beihold",
    },
    {
        title: "Stereo Hearts",
        artist: "Gym Class Heros, Adam Levine",
    },
    {
        title: "10 Things I Hate About You",
        artist: "Leah Kate",
    },
    {
        title: "Maniac",
        artist: "Conan Gray",
    },
    {
        title: "Out of My League",
        artist: "Fitz and The Tantrums",
    },
    {
        title: "Sunroof",
        artist: "Nicky Youre, hey daisy",
    },
    {
        title: "Electric Love",
        artist: "BØRNS",
    },
    {
        title: "18",
        artist: "One Direction",
    },
    {
        title: "Something That I Want",
        artist: "Grace Potter, Disney",
    },
    {
        title: "The Other Side",
        artist: "Hugh Jackman, Zac Efron",
    },
    {
        title: "Late Night Talking",
        artist: "Harry Styles",
    },
    {
        title: "Keep Driving",
        artist: "Harry Styles",
    },
    {
        title: "Cough Syrup",
        artist: "Young the Giant",
    },
    {
        title: "Remember When",
        artist: "Wallows",
    },
    {
        title: "Talk Too Much",
        artist: "COIN",
    },
    {
        title: "ceilings",
        artist: "Lizzy McAlpine",
    },
    {
        title: "Let It Go",
        artist: "James Bay",
    },
    {
        title: "Scatterbrain",
        artist: "Emei",
    },
    {
        title: "Crash My Car",
        artist: "COIN",
    },
    {
        title: "Almost (Sweet Music)",
        artist: "Hoizer",
    },
    {
        title: "Sour Patch Kids",
        artist: "Bryce Vine",
    },
    {
        title: "I Lived",
        artist: "OneRepublic",
    },
    {
        title: "You Know It",
        artist: "Colony House",
    },
    {
        title: "Cruel Summer",
        artist: "Taylor Swift",
    },
    {
        title: "Wildest Dreams",
        artist: "Taylor Swift",
    },
    {
        title: "Mine",
        artist: "Taylor Swift",
    },
    {
        title: "Time of Our Lives",
        artist: "Pitball, Ne-Yo",
    },
    {
        title: "Not Over You",
        artist: "Gavin DeGraw",
    },
    {
        title: "Part of Me",
        artist: "Noah Kahan",
    },
    {
        title: "22",
        artist: "Taylor Swift",
    },
    {
        title: "Buttercup",
        artist: "Hippo Campus",
    },
    {
        title: "Shut Up and Dance",
        artist: "WALK THE MOON",
    }
];

let currentSong = 0;

// Update the dashboard
function updateDashboard() {
    const song = songs[currentSong];

    document.getElementById("song-title").textContent =
        song.title;

    document.getElementById("artist-name").textContent =
        song.artist;

    document.getElementById("song-number").textContent =
        String(currentSong + 1).padStart(2, "0") +
        " / " + String(songs.length).padStart(2, "0");

    currentSong = (currentSong + 1) % songs.length;
}

// Create the full song list
function createPlaylist() {
    const songList = document.getElementById("song-list");

    songs.forEach((song, index) => {
        const card = document.createElement("div");

        card.classList.add("song-card");

        card.innerHTML = `
            <div>
                <h3>${String(index + 1).padStart(2, "0")}</h3>
            </div>

            <div>
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;

        songList.appendChild(card);
    });
}

// Start the page
createPlaylist();
updateDashboard();

// Change the dashboard every 10 seconds
setInterval(updateDashboard, 10000);