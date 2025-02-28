/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.addEventListener("DOMContentLoaded", function () {
    // Находим все кнопки с классом .view-more
    const buttons = document.querySelectorAll(".view-more");

    // Добавляем обработчик клика
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const url = this.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank");
            } else {
                console.error("URL not found for button");
            }
        });
    });
});