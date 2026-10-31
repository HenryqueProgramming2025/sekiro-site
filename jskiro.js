function ShuraAwakening() {

    let userInput = document.getElementById("shurainput").value;
    if (userInput.toLowerCase() == "shura") {

        document.body.classList.add("ShuraMode")
        document.getElementById("SekiroTitle").textContent = `Sekiro: Shura Awakened`
        document.getElementById("SekiroSubtitle").textContent = `Forget your honor. Betray your master. Kill everyone.`;
        document.getElementById("MainTitle").textContent = `You have awakened the demon!`
        document.getElementById("shurap").textContent = `No longer a shinobi. No longer loyal to your master. No longer an honorable fighter. No longer human. Now, you are what everyone fears: a SHURA!`;

        document.getElementById("musicIcon").src = "SekiroImages/ShuraMusic.jpg"
        document.getElementById("p1").textContent = `Ookami-Dono no longer exists,`
        document.getElementById("p2").textContent = `All that is left is hatred, evilness and destruction,`
        document.getElementById("p3").textContent = `Celebrate slaughter with this song.`

        let song = document.getElementById("SekiroSong")
        song.src = "Songs/ShuraSong.mp3";
        song.play();

        window.alert(`Demon Awakened!`)

    } else {
        alert("Wrong Command, Ookami!")
    }

}