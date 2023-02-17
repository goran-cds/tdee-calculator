const tdee = localStorage.getItem("tdeeValue");
const bmi = localStorage.getItem("bmiValue");

document.getElementById("calories").innerHTML = tdee;
document.getElementById("bmi-score").innerHTML = bmi;

if(bmi <= 18.5)
{
    document.getElementById("bmi-category").innerHTML = "underweight";
}
else if(bmi > 18.5 && bmi <= 24.99)
{
    document.getElementById("bmi-category").innerHTML = "normal weight";
}
else if(bmi >= 25 && bmi <= 29.99)
{
    document.getElementById("bmi-category").innerHTML = "overweight";
}
else
{
    document.getElementById("bmi-category").innerHTML = "obese";
}

function showHomePage() {
    location.href = "index.html";
}