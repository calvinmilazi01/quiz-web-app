document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked')
    };
    
    let resultText = "";
    
    // Basic logic to calculate result based on selected answers
    if (answers.q1 && answers.q2) {
        if (answers.q1.value === "A" && answers.q2.value === "A") {
            resultText = "You are a Type A personality!";
        } else if (answers.q1.value === "B" && answers.q2.value === "B") {
            resultText = "You are a Type B personality!";
        } else {
            resultText = "You have a mixed personality!";
        }
    } else {
        resultText = "Please answer all questions.";
    }
    
    // Show result
    document.getElementById("result-text").innerText = resultText;
    document.getElementById("result").classList.remove("hidden");
});
