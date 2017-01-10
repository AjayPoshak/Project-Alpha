'use strict';

function supportsTemplate() {
    return 'content' in document.createElement('template');
}
/**
 * Attaching the header template to body
 */
function attachHeader() {
    var cloneHeader = document.importNode(document.querySelector("#header").content, true);
    document.querySelector('.wrapper').appendChild(cloneHeader);
}

function attachFooter() {
    let cloneFooter = document.importNode(document.querySelector("#footer").content, true);
    document.querySelector('.wrapper').appendChild(cloneFooter);
}

function nextPage(someData) {
    console.log(someData);
}

function attachMiddleSection(data) {
    data = JSON.parse(data);
    let middleSectionContent = document.querySelector('#middle-section').content;
    let homeContainer = middleSectionContent.querySelector('.home-container');

    for (let i = 0; i < data.length; i++) {
        let section = document.createElement('section');
        section.classList.add("cards");
        let header = document.createElement('header');
        let h2 = document.createElement('h2');
        h2.textContent = data[i].articleheading;
        header.appendChild(h2);
        section.appendChild(header);

        let articleElement = document.createElement('article');
        let p = document.createElement('p');
        p.classList.add('lead');

        let span = document.createElement('span');
        span.textContent = data[i].article;
        p.appendChild(span);

        p.appendChild(document.createElement('br'));
        let anchor = document.createElement('a');
        anchor.href = "javascript: void(0)";
        anchor.textContent = "Read More...";
        anchor.addEventListener('click', function() {
            console.log("data[i].articleid")
        }, false);
        p.appendChild(anchor);
        articleElement.appendChild(p);
        section.appendChild(articleElement);
        homeContainer.appendChild(section);

    }


    let cloneMiddleSection = document.importNode(document.querySelector('#middle-section').content, true);
    document.querySelector('.wrapper').appendChild(cloneMiddleSection);
}
