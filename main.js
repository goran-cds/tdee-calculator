let gender,
    age,
    height,
    weight,
    activity,
    bodyfat,
    multiplier,
    bmr,
    bmi,
    tdee;

function showSummary()
{
    const genderInput = document.querySelector('input[name="gender"]:checked').value;
    const ageInput = document.getElementById("age-input").value;
    const weightInput = document.getElementById("weight-input").value;
    const heightInput = document.getElementById("height-input").value;
    const activityInput = document.getElementById("dropdown").value;
    const bodyfatInput = document.getElementById("bodyfat-input").value;

    gender = genderInput;
    age = ageInput;
    weight = weightInput;
    height = heightInput;
    activity = activityInput;
    bodyfat = bodyfatInput;

    if(bodyfat !== "")
    {
        bmr = 370 + (21.6 * (weight * (1 - bodyfat / 100))); 
    }
    else if(gender === "male")
    {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    }
    else if(gender === "female")
    {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    switch(activity)
    {
        case "0": return;

        case "1": multiplier = 1.2;
            break;
        
        case "2": multiplier = 1.375;
            break;

        case "3": multiplier = 1.55;
            break;

        case "4": multiplier = 1.752;
            break;

        case "5": multiplier = 1.9;
            break;
    }
    
    tdee = Math.floor(bmr * multiplier);
    bmi = Math.round((weight / ((height / 100) * (height / 100))) * 10) / 10;
    
    localStorage.setItem("tdeeValue", tdee);
    localStorage.setItem("bmiValue", bmi);
    
    location.href = "summary.html";
} 

