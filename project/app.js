// https://www.youtube.com/watch?v=Vh70JL7ukKc

const ratingButton = document.querySelectorAll('.radio-button');
const form = document.querySelector('.form')
// selecting the space it want to change
const ratingCard = document.querySelector('#rating-card')
let ratingValue;
// user clicks the rating button
// add a listener to each button
ratingButton.forEach((button) =>{
    // listening for any changes and storing it in the value variable
    button.addEventListener('change', (e) => {
        ratingValue = e.target.value
    })
})

// event listener for the submition of the form event
form.addEventListener('submit', e => {
    // prevent the default of buttons in a form
    e.preventDefault()
    // if there is no rating value stop and return
    if (!ratingValue) return
    render(ratingCard, ratingValue)
})

// render function (content I want to render, rating value that is stored)
function render(content, ratingValue) {
    // render this into the document
    content.innerHTML = 
                `<img src="/interactive-rating-component-main/images/illustration-thank-you.svg" alt="Credit Swipe">
                <p> You selected ${ratingValue} out of 5</p>
                <h2>Thank You!</h2>
                <p>We appreciate you taking the time to give rating. if you ever need more support, don't hesitate to get in touch!</p>`;
}

console.log(ratingButton)

