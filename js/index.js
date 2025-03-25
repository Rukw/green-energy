// Preload images on page load
function preloader() {
    const imagesList = [
        "./img/solar-panels.jpg",
        "./img/energy-efficiency.jpg",
        "./img/community-power.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);

/* 
Get all buttons in a NODE LIST of buttons (array like structure) */
const buttons = document.querySelectorAll('.solution-btn');

/* 
Complete your resource-object that will store the dynamic content.
Resource object should 3 sub-objects. Give your sub-objects
meaningful names. Every sub-object should have the following
properties headingContent, bodyText, imgUrl and imgAlt. */
const resourceObject = {
    solarSolution: {
        headingContent: "Affordable Solar Solutions",
        bodyText: "Commodo consectetur sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        imgUrl: "./img/photovoltaic-system-2742302_1280.jpg",
        imgAlt: "Affordable solar panel installation"
    },
    energyEfficiency: {
        headingContent: "Energy Efficiency Upgrades",
        bodyText: "Commodo consectetur sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        imgUrl: "./img/geothermal-7422241_1280.jpg",
        imgAlt: "Home energy efficiency upgrades"
    },
    communityPower: {
        headingContent: "Community Renewable Energy",
        bodyText: "Commodo consectetur sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        imgUrl: "./img/field-6535598_1280.jpg",
        imgAlt: "Community solar garden" 
    }
};

/* 
Get the reference to your HTML-container
that will be dynamically loaded from the resource-object. */
const contentContainer = document.querySelector('.solution-content');

/* 
The first button in a NODE LIST of buttons will initially 
have the id: active-button - this will uniquely style 
the active button (CSS rule). 

The first content from the
resource-object will be loaded on the page load:
`<h1>${headingContent}</h1>
 <img src="${imgUrl}" alt="${imgAlt}">
 <p>${bodyText}</p>` */
window.addEventListener('DOMContentLoaded', function() {
    // First content is already hardcoded in HTML
});

/* 
Start your handleSelection function here. */ 
function handleSelection(event) {
    /* 
    Remove the id active-button from the element that
    contains it prior to the click-event. 

    This will require the loop through the NODE LIST of buttons. 
    Inside the loop, use conditional and the element object method
    hasAttribute() to check if the current button in the loop contains the id.
    If it does, use element-object property removeAttribute()
    to remove the id. */
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].hasAttribute('id')) {
            buttons[i].removeAttribute('id');
        }
    }

    /*
    Element-object method setAttribute() to set the id active-button 
    to the currently clicked button. */
    event.target.setAttribute('id', 'active-button');

    /* 
    Conditional and event-object to check which button is clicked
    and based on that, create HTML with the data inside the backticks:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>`
    Assign this content to to your HTML-container that will 
    be dynamically loaded (you already got the reference to 
    this container before you started the function handleSelection) */ 
    const buttonIndex = event.target.getAttribute('data-solution');
    
    let selectedContent;
    if (buttonIndex === '0') {
        selectedContent = resourceObject.solarSolution;
    } else if (buttonIndex === '1') {
        selectedContent = resourceObject.energyEfficiency;
    } else if (buttonIndex === '2') {
        selectedContent = resourceObject.communityPower;
    }
    
    contentContainer.innerHTML = `
        <article class="solution-article">
            <img src="${selectedContent.imgUrl}" alt="${selectedContent.imgAlt}">
            <h3>${selectedContent.headingContent}</h3>
            <p>${selectedContent.bodyText}</p>
            <a href="#" class="learn-more">Learn More →</a>
        </article>
    `;
}
/* 
HandleSelection function ends here. */  

/* 
Register all buttons to click event. The event-handler handleSelection will listen 
for this event to happen. */
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleSelection);
}