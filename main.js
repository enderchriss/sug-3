const gamesIndex = [
    {
        Name: "Hollow Knight",
        Genre: "Steam",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/d18c832e8c956b4ef8b92862e6bf470d.jpg",
        Link: "https://enderchriss.github.io/hollow-knight-sug-3/",
    },
    {
        Name: "Balatro",
        Genre: "Steam",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/b6e06b28a92115be99a5174a293a288a.jpg",
        Link: "https://enderchriss.github.io/balatro-sug-3/",
    },
    {
        Name: "20 Minutes Till Dawn",
        Genre: "Steam",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/f2decd592b4fc7d1cd131f5b20d27777.jpg",
        Link: "https://enderchriss.github.io/20-minutes-sug-3/",
    },
    {
        Name: "Ultrakill",
        Genre: "Steam",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/4c1b274e8befa9cbcd35ae8bdd5f1085.jpg",
        Link: "https://enderchriss.github.io/ultrakill-sug-3/",
    },
    {
        Name: "REPO",
        Genre: "Steam",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/f4c4eed20e712765c9276ba9ee5bea76.jpg",
        Link: "https://enderchriss.github.io/repo-sug-3/",
    },
    {
        Name: "Hotline Miami",
        Genre: "Steam",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/2ec665f4ab6a47f191ee9ddbd5fe051d.jpg",
        Link: "https://enderchriss.github.io/hotline-sug-3/",
    },
    {
        Name: "OneShot",
        Genre: "Steam",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/eafb53798f7d99f73ec0506ecd221a55.jpg",
        Link: "https://enderchriss.github.io/one-shot-sug-3/",
    },
    {
        Name: "Spaceflight Simulator",
        Genre: "Steam",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/49ebb2e4115474e907b2971bb6383568.jpg",
        Link: "https://enderchriss.github.io/sfs-sug-3/",
    },
    {
        Name: "Your Only Move Is Hustle",
        Genre: "Steam",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/49b21c1790fbce6521d4a2812e747e63.jpg",
        Link: "https://enderchriss.github.io/yomi-sug-3/yomi/",
    },
    {
        Name: "UNDERTALE",
        Genre: "Steam",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/1a68f4f8f9bba5102b63861793900b47.jpg",
        Link: "https://enderchriss.github.io/undertale-sug-3/",
    },
    {
        Name: "Minecraft",
        Genre: "External",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/7344bcd24a4a0393f45cad1a212c62e7.jpg",
        Link: "https://enderchriss.github.io/minecraft-sug-3/minecraft-1.12.2.html",
    },
    {
        Name: "Plague Inc.",
        Genre: "Steam",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/da8a8e9cbcc29f7a06600fc7b6ce72ba.jpg",
        Link: "https://enderchriss.github.io/plague-sug-3/",
    },
    {
        Name: "People Playground",
        Genre: "Steam",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/c4d245ccd50808ad80abfbeb542c3394.jpg",
        Link: "https://enderchriss.github.io/people-sug-3/",
    },
    {
        Name: "Raft",
        Genre: "Steam",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/0d8de77c6e2d3af5ab0e69a92e035d93.jpg",
        Link: "https://enderchriss.github.io/raft-sug-3/",
    },
    {
        Name: "Learn 2 Fly",
        Genre: "Flash",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/d79e00d02d0ceafcef88f9b6c491367b.png",
        Link: "https://enderchriss.github.io/swffiles3/LearnToFly.swf",
    },
    {
        Name: "Brotato",
        Genre: "Steam",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/6d6af712d02a059b358636645c036915.jpg",
        Link: "https://enderchriss.github.io/brotato-sug-3/",
    },
    {
        Name: "Bad Piggies",
        Genre: "Mobile",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/657a31af8fbe8343ec22cbe528c3cbfe.jpg",
        Link: "https://enderchriss.github.io/bad-piggies-sug-3/",
    },
    {
        Name: "Celeste",
        Genre: "Steam",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/8c433a09bd26b943147c4d9bacb15efc.jpg",
        Link: "https://enderchriss.github.io/celeste-sug-3/",
    },
    {
        Name: "Stardew Valley",
        Genre: "Steam",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/996e24639b91722571c81723760023e0.jpg",
        Link: "https://enderchriss.github.io/stardew-sug-3/",
    },
    {
        Name: "Deltarune",
        Genre: "Steam",
        ImageSrc: "https://cdn2.steamgriddb.com/thumb/2ff287f725a4e9d9d7c04b7a819c8f29.jpg",
        Link: "https://enderchriss.github.io/deltarune-sug-3/",
    },
]

const openSound = new Audio('./sounds/deck_ui_show_modal.wav')

document.addEventListener('DOMContentLoaded', () => {
    loopGames()

    const allGenre = document.getElementById("all-genre")
    const mobileGenre = document.getElementById("mobile-genre")
    const steamGenre = document.getElementById("steam-genre")
    const flashGenre = document.getElementById("flash-genre")
    const externalGenre = document.getElementById("external-genre")

    const navButtons = document.getElementsByClassName("nav-button")
    const genreButtons = document.getElementsByClassName("genre-icon")
    const splashContainer = document.getElementById('update-splash-container')
    const splashScreenContainer = document.getElementById("splash-screen-container")
    const gameContainer = document.getElementById("game-container")

    const version = "V1.0"

    splashContainer.style.display = 'none'

    if(version == localStorage.getItem("StoredVersion")){
        
    }else{
        setTimeout(() => {
            splashContainer.style.display = 'block'
        }, 1000)

        setTimeout(() => {
            splashContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
            splashContainer.style.opacity = '0'
            splashContainer.style.transform = 'translateY(20px)'

            setTimeout(() => splashContainer.style.display = 'none', 500)
        }, 5000)

        localStorage.setItem("StoredVersion", version)
    }

    setTimeout(() => {
            splashScreenContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
            splashScreenContainer.style.opacity = '0'
            splashScreenContainer.style.transform = 'translateY(20px)'

            setTimeout(() => splashScreenContainer.style.display = 'none', 500)
        }, 1000)

    for (let nav of navButtons){
        nav.addEventListener("click", function(){
            const tabSound = new Audio('./sounds/deck_ui_tab_transition_01.wav')
            
            tabSound.play()
        })
    }
    for (let genre of genreButtons){
        genre.addEventListener("click", function(){
            const tabSound = new Audio('./sounds/deck_ui_navigation.wav')
            tabSound.play()

            gameContainer.style.transition = 'none'
            gameContainer.style.opacity = '0'
                
            setTimeout(() => {
                gameContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
                gameContainer.style.opacity = '1'
            },500)
        })
    }

    allGenre.addEventListener("click", function(){
        const games = document.querySelectorAll(".game")

        games.forEach(game => {
            const name = game.title.toLowerCase()
            game.style.display = "block"
        })
    })
    mobileGenre.addEventListener("click", function(){
        const games = document.querySelectorAll(".game")

        games.forEach(game => {
            const name = game.title.toLowerCase()
            game.style.display = name.includes("mobile") ? "block" : "none"
        })
    })
    steamGenre.addEventListener("click", function(){
        const games = document.querySelectorAll(".game")

        games.forEach(game => {
            const name = game.title.toLowerCase()
            game.style.display = name.includes("steam") ? "block" : "none"
        })
    })
    flashGenre.addEventListener("click", function(){
        const games = document.querySelectorAll(".game")

        games.forEach(game => {
            const name = game.title.toLowerCase()
            game.style.display = name.includes("flash") ? "block" : "none"
        })
    })
    externalGenre.addEventListener("click", function(){
        const games = document.querySelectorAll(".game")

        games.forEach(game => {
            const name = game.title.toLowerCase()
            game.style.display = name.includes("external") ? "block" : "none"
        })
    })
})


function loopGames(){
    for(let i=0; i < gamesIndex.length; i++){
        addGame(gamesIndex[i].Name, gamesIndex[i].Genre, gamesIndex[i].ImageSrc, gamesIndex[i].Link)
    }
    const searchInput = document.getElementById("search-button")
    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase()
        const games = document.querySelectorAll(".game")

        const typeSound = new Audio('./sounds/deck_ui_typing_test.wav')
        typeSound.play()

        games.forEach(game => {
            const name = game.title.toLowerCase()
            game.style.display = name.includes(query) ? "block" : "none"
        })
})
}

function addGame(Name, Genre, ImageSrc, Url){
    const gameContainer = document.getElementById("game-container")
    
    var newGameObj = document.createElement("div")
    newGameObj.className = "game"

    var newGameImg = document.createElement("img")
    newGameImg.src = ImageSrc
    newGameObj.title = Name+" - "+Genre+" Game"

    newGameObj.appendChild(newGameImg)
    gameContainer.appendChild(newGameObj)

    newGameObj.addEventListener("click", function(){
        openSound.play()
        
        var windowFeatures = "width=1000,height=800,resizable=yes,scrollbars=yes"
        var win = window.open("about:blank", "_blank", windowFeatures)
        if (win){
            if (Genre == "Flash"){
                var object = win.document.createElement('object')
                var embed = win.document.createElement('embed')
                var script = win.document.createElement('script')

                embed.src = Url
                embed.width = "100%"
                embed.height = "100%"

                script.src = "https://unpkg.com/@ruffle-rs/ruffle"

                object.appendChild(embed)

                win.document.body.style.margin = "0"
                win.document.body.appendChild(object)
                win.document.body.appendChild(script)
            }else{
                var iframe = win.document.createElement('iframe')

                iframe.style.width = "100%"
                iframe.style.height = "100vh"
                iframe.style.border = "none"
                iframe.src = Url

                win.document.body.style.margin = "0"
                win.document.body.appendChild(iframe)
            }
            
        }else{
            alert("window cannot be opened, disable your popup blocker in chrome settings, or your browsers settings.")
        }
    })
}