const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

    function suspect() {
        document.getElementById("bg").style.backgroundColor = "black";
        document.getElementById("id1").style.backgroundColor = "white";
        document.getElementById("id2").style.backgroundColor = "white";
        document.getElementById("id3").style.backgroundColor = "white";
        document.getElementById("title").style.backgroundColor = "white";
        document.getElementById("note").innerHTML = "note: calc";
        document.getElementById("img1").src = "images/suspect.png";
        document.getElementById("id3").innerHTML = "Valkyrie sellers:";

            if (button.value === 'first') {
                button.value === 'second';
            } else {
                location.reload();
            }

        console.log("User activated (function (suspect))");
    }