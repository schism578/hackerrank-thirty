function solve(meal_cost, tip_percent, tax_percent) {
    let mealCost = Math.round(meal_cost + (meal_cost * tip_percent/100) + (meal_cost * tax_percent/100));

console.log(mealCost);
}

console.log(solve());