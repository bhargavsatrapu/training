

let fifthPageContent = document.querySelector(".fifth-page-heading");

export function displayTestmonial(data) {
    let HTMLMarkup = data.map(cValue => ` <div class="col-sm-4 mx-auto">
        <div class="card card-css" style="background-color: rgb(255, 255, 255);">
            <img src=${cValue.component_image_URL} class="card-img">
            <div class="card-body card-body-css">
                <p class="card-text content">${cValue.content}</p>
            </div>
            <div class="row">
                <div class="col-sm-2">
                    <img class="testmonial-image" src=${cValue.image_URL} alt="haio">
                </div>
                <div class="col-sm-6">
                    <p class="testmonial-heading">${cValue.heading}</p>
                    <p class="testmonial-type">${cValue.type}T</p>

                </div>
                <div class="col-sm-4">
                    <img src=${cValue.quot_URL} alt="hai">
                </div>
            </div>
        </div>
    </div>`)

    fifthPageContent.innerHTML += HTMLMarkup.join("")
}
