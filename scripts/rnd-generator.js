var txtField = document.querySelector(".footer-block-rnd-generator-result");

document.querySelector(".footer-block-rnd-generator-btn").onclick = function() {
    let num = Math.round(Math.random() * (100000 - 1) + 1);
    txtField.textContent = "Рандомное число: " + num;
}