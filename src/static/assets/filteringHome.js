const buttons = document.querySelectorAll('.responsive-tab-button')
let elemnts = document.querySelector('.catalogHome')
let myElement = document.querySelectorAll(".catalogHome-cards-container")
let currentDate = 2
myElement.forEach(el => {
    currentDate++
    currentDate = currentDate.toString()

    el.setAttribute('data-created', currentDate)


})


buttons.forEach(button => {
    button.addEventListener('click', event => {
        const clickedElement = event.target;
        let sortedElements = Array.from(elemnts.children);
        while (elemnts.firstChild) {
            elemnts.removeChild(elemnts.firstChild);
        }
        if (clickedElement.textContent == 'Newest Accommodations') {

            sortedElements = sortedElements.sort((a, b) =>b.dataset.created - a.dataset.created);
            
           
        } else if (clickedElement.textContent == 'Popular Accommodations') {
            sortedElements = sortedElements.sort((a, b) => a.dataset.created - b.dataset.created);
            console.log(sortedElements);
        }
      
        sortedElements.forEach(item => {
            elemnts.appendChild(item);
          });
        // console.log(elemnts);
        // console.log(sortedElements);


    });
});
