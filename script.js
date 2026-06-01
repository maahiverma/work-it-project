// Welcome Message
console.log("Welcome to WORK-FIT Gym Website!");

function joinGym() {

    alert("Choose a membership plan to get started!");

    window.location.href = "plans.html";
}
window.onload = function(){

    document.querySelector(".hero-content").style.opacity = "1";

};
document.getElementById("contactForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || phone === "" || message === ""){
        alert("Please fill all fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been sent successfully.");

    document.getElementById("contactForm").reset();
});

// plans
function selectPlan(planName, price) {

    let confirmPlan = confirm(
        `Do you want to purchase ${planName} for ₹${price}?`
    );

    if(confirmPlan){

        document.getElementById("planMessage").innerHTML =
            `✅ Successfully selected ${planName}`;

    } else {

        document.getElementById("planMessage").innerHTML =
            `❌ Plan selection cancelled`;
    }
}
// training
function joinTraining(program){

    let confirmJoin = confirm(
        `Do you want to join the ${program} program?`
    );

    if(confirmJoin){

        document.getElementById("trainingMessage").innerHTML =
        `✅ You have successfully enrolled in <strong>${program}</strong> training.`;

    }else{

        document.getElementById("trainingMessage").innerHTML =
        `❌ Enrollment cancelled.`;
    }
}