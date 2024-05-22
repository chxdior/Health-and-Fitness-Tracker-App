document.getElementById('nutritionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateNutrition();
});

function calculateNutrition() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    console.log('Weight:', weight);
    console.log('Height:', height);
    console.log('Age:', age);
    console.log('Gender:', gender);

    if (!weight || !height || !age || !gender) {
        alert('Please fill in all fields');
        return;
    }

    let calories, protein, fat, carbs;

    if (gender === 'male') {
        calories = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        calories = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    protein = weight * 1.6; // 1.6 grams per kg of body weight
    fat = (calories * 0.25) / 9; // 25% of calories from fat, 9 calories per gram of fat
    carbs = (calories - (protein * 4 + fat * 9)) / 4; // remaining calories from carbs, 4 calories per gram of carbs

    console.log('Calories:', calories);
    console.log('Protein:', protein);
    console.log('Fat:', fat);
    console.log('Carbs:', carbs);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Daily Nutrient Recommendations</h2>
        <p>Calories: ${calories.toFixed(2)} kcal</p>
        <p>Protein: ${protein.toFixed(2)} grams</p>
        <p>Fat: ${fat.toFixed(2)} grams</p>
        <p>Carbohydrates: ${carbs.toFixed(2)} grams</p>
    `;
}
