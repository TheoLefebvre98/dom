    let elementById = document.getElementById("super-id");
    let elementsByClass = document.getElementsByClassName("class-cool");
    let elementsByTag = document.getElementsByTagName("a");

    console.log("-----------------------------------");
    console.log("Afficher grâce à l'id :");
    elementById.innerText = "Test";
    console.log("-----------------------------------");
    console.log("Afficher grâce à la class :");
    console.log(elementsByClass);
    console.log("-----------------------------------");
    console.log("Afficher grâce à au tag :");
    console.log(elementsByTag);
    console.log("-----------------------------------");