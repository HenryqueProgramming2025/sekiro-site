function ShuraAwakening() {

    let userInput = document.getElementById("shurainput").value;
    if (userInput.toLowerCase() == "shura") {

        document.body.classList.remove("PalaceMode")
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

// Counter Logic

let counter = 0;

function Idol() {
    counter++;

    if (counter == 5) {
        counter = 0;

        document.body.classList.remove("ShuraMode");
        document.body.classList.add("PalaceMode");

        document.getElementById("SekiroTitle").textContent = `Sekiro: Otherwordly Realm`;
        document.getElementById("SekiroSubtitle").textContent = `A realm of eternal beauty. A beauty that hides a deadly secret.`;
        document.getElementById("MainTitle").textContent = `Hidden secred discovered!`;
        document.getElementById("shurap").textContent = `Congratulations, brave Shinobi! Reaching the ethereal homeland of the Divine Dragon is not for everyone. It is easy to become a Shura, but it is not easy to find inner peace. You are one of those who found it!`;
        document.getElementById("ShuraImage").src = "SekiroImages/SekiroFinalArea.jpg"

        document.getElementById("musicIcon").src = "SekiroImages/OkamiWarrior.jpg";
        document.getElementById("p1").textContent = `You have reached the final area,`
        document.getElementById("p2").textContent = `Take a break and dance with us, Okami Warriors,`
        document.getElementById("p3").textContent = `Treat yourself to a break with this song`

        let song = document.getElementById("SekiroSong")
        song.src = "Songs/PalaceSong.mp3";
        song.play();

        window.alert(`Palace found!`)

    } else {
    }
}

// Gyoubu Voice

function GyoubuVoiceline() {

    let voiceline = new Audio("Songs/MY NAME IS GYOUBU MASATAKA ONIWA (Japanese).f251.mp3");
    voiceline.volume = 1.0;
    voiceline.play()
}

// Lady B Voice

function LadybVoiceline() {

    let voiceline = new Audio("Songs/Sekiro - You were still just a puppy (Japanese).f251 (1).mp3");
    voiceline.volume = 1.0;
    voiceline.play()
    
}



