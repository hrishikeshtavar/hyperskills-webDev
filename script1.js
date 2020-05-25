document.addEventListener("keydown", function (event) {
    if(event.code === "KeyA"){
        console.log("The 'A' key is pressed");
        let audio = new Audio("A.mp3");
        audio.play();
    } else if (event.code === "KeyS"){
        console.log("The 'S' key is pressed");
        let audio = new Audio("S.mp3");
        audio.play();
    } else if (event.code === "KeyD"){
        console.log("The 'D' key is pressed");
        let audio = new Audio("D.mp3");
        audio.play();
    } else if (event.code === "KeyF"){
        console.log("The 'F' key is pressed");
        let audio = new Audio("F.mp3");
        audio.play();
    } else if (event.code === "KeyG"){
        console.log("The 'G' key is pressed");
        let audio = new Audio("G.mp3");
        audio.play();
    } else if (event.code === "KeyH"){
        console.log("The 'H' key is pressed");
        let audio = new Audio("H.mp3");
        audio.play();
    } else if (event.code === "KeyJ"){
        console.log("The 'J' key is pressed");
        let audio = new Audio("J.mp3");
        audio.play();
    }  else if (event.code === "KeyW"){
        console.log("The '' key is pressed");
        let audio = new Audio("W.mp3");
        audio.play();
    }  else if (event.code === "KeyE"){
        console.log("The '' key is pressed");
        let audio = new Audio("E.mp3");
        audio.play();
    }  else if (event.code === "KeyT"){
        console.log("The '' key is pressed");
        let audio = new Audio("T.mp3");
        audio.play();
    }  else if (event.code === "KeyY"){
        console.log("The '' key is pressed");
        let audio = new Audio("Y.mp3");
        audio.play();
    }  else if (event.code === "KeyU"){
        console.log("The '' key is pressed");
        let audio = new Audio("U.mp3");
        audio.play();
    }
    else{
        console.log("unbound key was pressed");
    }
})