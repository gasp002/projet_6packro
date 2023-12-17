document.getElementById("foodForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var food = document.getElementById("food").value;
    var ingredient = document.getElementById("ingredient").value;
    var weight = document.getElementById("weight").value;
    var date = document.getElementById("date").value;
    console.log("Food: " + food);
    console.log("Ingredient: " + ingredient);
    console.log("Weight: " + weight);
    console.log("Date: " + date);

    document.getElementById("foodForm").reset();
});

document.getElementById("food").addEventListener("change", function() {
    var food = this.value;
    var ingredientSelect = document.getElementById("ingredient");
    ingredientSelect.innerHTML = "";

    var foodLists = {
        "Fruits": [
            "Apple",
            "Banana",
            "Orange",
            "Grapes",
            "Strawberries"
        ],
        "Vegetables": [
            "Broccoli",
            "Carrot",
            "Spinach",
            "Bell Pepper",
            "Cucumber"
        ],
        "Proteins": [
            "Chicken Breast",
            "Salmon",
            "Tofu",
            "Eggs",
            "Lean Beef"
        ],
        "Carbohydrates": [
            "Brown Rice",
            "Quinoa",
            "Sweet Potato",
            "Oats",
            "Whole Wheat Bread"
        ],
        "Dairy": [
            "Milk",
            "Cheese",
            "Yogurt",
            "Cottage Cheese",
            "Butter"
        ],
        "Sweets": [
            "Chocolate",
            "Ice Cream",
            "Cookies",
            "Cakes",
            "Fruit Sorbet"
        ]
    };

    if (food in foodLists) {
        foodLists[food].forEach(function(ingredient) {
            var option = document.createElement("option");
            option.value = ingredient;
            option.textContent = ingredient;
            ingredientSelect.appendChild(option);
        });
    }
});
