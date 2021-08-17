var nome = "GEu"

if (nome ==="Gabi") {

    console.log ("Legal seu nome é esse mesmo!!!");
} else {

console.log ("Que pena seu nome não é esse.");
}


var nome = "Tavares";

if (nome ==="Gabi") {

    console.log ("Legal seu nome é esse mesmo!!!");

} else if (nome === "Tavares") {

console.log ("Tudo bem esse também serve..");
} else {
    console.log ("Que pena seu nome não é esse.");
}



var nome = "Gabriela";

switch (nome){
    case "Tavares":
        console.log ("Legal você é Tavares mesmo");
        break;
    case "Gabriela":
        console.log ("Ah! Você também serve.")
        break;
        default:
        console.log ("Que pena, vocÊ não é quem eu estou procurando");
        break;
}