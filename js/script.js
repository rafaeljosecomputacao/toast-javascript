// Get elements from DOM
const $divNotifications = document.querySelector(".notifications");
const $buttonSuccess = document.querySelector("#success");
const $buttonInfo = document.querySelector("#info");
const $buttonWarning = document.querySelector("#warning");
const $buttonError = document.querySelector("#error");

// Function to create toast according to parameters
function createToast(type, icon, title, text) {
    // Creating a div element
    let newToast = document.createElement("div");
    // Assigning the content to the created element according to the received parameters
    newToast.innerHTML = `
        <div class="toast ${type}">
            <ion-icon name="${icon}"></ion-icon>
            <div class="content">
                <p class="title">${title}</p>
                <span>${text}</span>
            </div>
            <ion-icon name="close-circle-outline" onclick="(this.parentElement).remove()"></ion-icon>
        </div>`;
    // Adding the div element created inside the notifications div
    $divNotifications.appendChild(newToast);
    // Setting the time for the toast to be removed from the screen
    newToast.timeOut = setTimeout(
        () => newToast.remove(), 5000
    );
}

// Function to call the function named createToast passing the contents of the toast
$buttonSuccess.onclick = function() {
    let type = "success";
    let icon = "checkmark-circle-outline";
    let title = "Success";
    let text = "This is a success toast";
    createToast(type, icon, title, text);
}

$buttonInfo.onclick = function() {
    let type = "info";
    let icon = "information-circle-outline";
    let title = "Info";
    let text = "This is a info toast";
    createToast(type, icon, title, text);
}

$buttonWarning.onclick = function() {
    let type = "warning";
    let icon = "warning-outline";
    let title = "Warning";
    let text = "This is a warning toast";
    createToast(type, icon, title, text);
}

$buttonError.onclick = function() {
    let type = "error";
    let icon = "alert-circle-outline";
    let title = "Error";
    let text = "This is a error toast";
    createToast(type, icon, title, text);
}