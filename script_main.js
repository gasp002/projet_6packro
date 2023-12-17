function toggleList(listId, clickedItem) {
    var list = document.getElementById(listId);
    var container = document.querySelector('.lists-container');

    // Hide all nested lists
    var allLists = document.querySelectorAll('.nested-list');
    allLists.forEach(function(nestedList) {
        if (nestedList.id !== listId) {
            nestedList.style.display = 'none';
        }
    });

    if (list.style.display === 'none' || list.style.display === '') {
        positionList(list, clickedItem);
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
}

function positionList(list, clickedItem) {
    var rect = clickedItem.getBoundingClientRect();
    var containerRect = document.querySelector('.lists-container').getBoundingClientRect();
    list.style.top = rect.top - containerRect.top + 'px';
    list.style.left = rect.right - containerRect.left + 'px';
}



document.getElementById("workoutForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var workout = document.getElementById("workout").value;
    var exercise = document.getElementById("exercise").value;
    var repetitions = document.getElementById("repetitions").value;
    var weight = document.getElementById("weight").value;
    var date = document.getElementById("date").value;
    console.log("Workout: " + workout);
    console.log("Exercise: " + exercise);
    console.log("Repetitions: " + repetitions);
    console.log("Weight: " + weight);
    console.log("Date: " + date);

    document.getElementById("workoutForm").reset();
});

document.getElementById("workout").addEventListener("change", function() {
    var workout = this.value;
    var exerciseSelect = document.getElementById("exercise");
    exerciseSelect.innerHTML = "";

    var exerciseLists = {
        "Shoulder Workout": [
            "Overhead Press",
            "Lateral Raises",
            "Front Raises",
            "Face Pulls",
            "Shrugs"
        ],
        "Chest Workout": [
            "Bench Press",
            "Dumbbell Flyes",
            "Push-Ups",
            "Incline Bench Press",
            "Chest Dips"
        ],
        "Back Workout": [
            "Deadlifts",
            "Pull-Ups",
            "Bent Over Rows",
            "Lat Pulldowns",
            "Face Pulls"
        ],
        "Arms Workout": [
            "Bicep Curls",
            "Tricep Dips",
            "Hammer Curls",
            "Tricep Kickbacks",
            "Preacher Curls"
        ],
        "Abs Workout": [
            "Plank",
            "Russian Twists",
            "Leg Raises",
            "Bicycle Crunches",
            "Hanging Leg Raises"
        ],
        "Legs Workout": [
            "Squats",
            "Lunges",
            "Leg Press",
            "Calf Raises",
            "Deadlifts"
        ]
    };

    if (workout in exerciseLists) {
        exerciseLists[workout].forEach(function(exercise) {
            var option = document.createElement("option");
            option.value = exercise;
            option.textContent = exercise;
            exerciseSelect.appendChild(option);
        });
    }
});

document.getElementById("workoutForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Add your code to handle the form submission, e.g., collecting form data and processing it.
    console.log("Form submitted!");
});


