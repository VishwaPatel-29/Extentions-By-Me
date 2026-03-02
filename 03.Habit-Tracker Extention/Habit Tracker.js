const habitSelect = document.getElementById("habitSelect");
const dayButtons = document.querySelectorAll(".day-btn");
const streakText = document.querySelector(".streak");
const reminderCheckbox = document.querySelector(".reminder");

let habitData = JSON.parse(localStorage.getItem("habitData")) || {};
let currentHabit = habitSelect.value;
habitSelect.addEventListener("change", () => {
    currentHabit = habitSelect.value;
    if (!habitData[currentHabit]) {
        habitData[currentHabit] = {};
    }
    renderDays();
    calculateStreak();
});

dayButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (!currentHabit) {
            alert("Please select a habit first!");
            return;
        }
        const day = button.textContent;
        if (!habitData[currentHabit]) {
            habitData[currentHabit] = {};
        }
        habitData[currentHabit][day] = !habitData[currentHabit][day];
        saveData();
        renderDays();
        calculateStreak();
    });
});

function saveData() {
    localStorage.setItem("habitData", JSON.stringify(habitData));
}

function renderDays() {
    dayButtons.forEach(button => {
        const day = button.textContent;
        if (
            currentHabit &&
            habitData[currentHabit] &&
            habitData[currentHabit][day]
        ) {
            button.style.backgroundColor = "green";
            button.style.color = "white";
        } else {
            button.style.backgroundColor = "";
            button.style.color = "";
        }
    });
}

function calculateStreak() {
    if (!currentHabit || !habitData[currentHabit]) {
        streakText.innerHTML = "🔥 Streak: 0";
        return;
    }

    let streak = 0;

    const today = new Date().getDate();

    for (let i = today; i >= 1; i--) {
        if (habitData[currentHabit][i]) {
            streak++;
        } else {
            break;
        }
    }

    streakText.innerHTML = `🔥 Streak: ${streak}`;
}

reminderCheckbox.addEventListener("change", () => {
    if (reminderCheckbox.checked) {
        alert("Reminder Enabled (Demo Only)");
    } else {
        alert("Reminder Disabled");
    }
});

renderDays();
calculateStreak();