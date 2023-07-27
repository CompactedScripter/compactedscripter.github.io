document.addEventListener("DOMContentLoaded", function () {
    const thing = document.querySelector(".recipes");
    
    const img = thing.querySelectorAll("img");
    
    const recipes = document.getElementById("recipeStuff");
    
    recipes.textContent = img.length;
  });

  // go big kid, get money