function getLyrics()
{
    const inputArtist =document.getElementById("artist");
    const valueArtist= inputArtist.value;
    const inputSong =document.getElementById("song");
    const valueSong= inputSong.value;
    const para = document.querySelector("pre");
    fetch(`https://api.lyrics.ovh/v1/${valueArtist}/${valueSong}/`)
    .then(response =>response.json())
    .then(response=>para.textContent=response.lyrics)
    .catch(error =>alert("Lyrics not found", error));
    
}