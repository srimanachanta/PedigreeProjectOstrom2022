function navigatePage(location) {
    switch(location) {
        case 'mainPage':
            window.location.href="./home.html"
            break;
        case 'pedigreePage':
            window.location.href="./pedigrees.html"
            break;
        case 'spotifyPage':
            window.location.href="./spotify.html"
            break;
        default:
            alert("Not Found")

    }
}