// Define the lyrics as an array of strings
const lyrics = [
    " bottles of beer on the wall, ",
    " bottles of beer.\n",
    "Take one down, pass it around, ",
    " bottles of beer on the wall.\n"
];

// Loop through the lyrics and generate the full song
for (let i = 99; i > 0; i--) {
    if (i === 1) {
        lyrics[0] = " bottle of beer on the wall, ";
        lyrics[1] = " bottle of beer.\n";
        lyrics[2] = "Take it down, pass it around, ";
        lyrics[3] = " bottle of beer on the wall.\n";
    }
    let li = document.createElement("li");
    let lyric = i + lyrics[0] + i + lyrics[1] + lyrics[2] + (i - 1) + lyrics[3];
    li.innerText = lyric;
    document.querySelector("#lyrics").appendChild(li);
}