//1.get the header element
const headerElement = document.querySelector("header");
    console.log(headerElement);

//2. get all the section elements
const sectionElements = document.querySelectorAll("section");
    console.log(sectionElements);

//3. get the section element with class="current"
const currentSectionElement = document.querySelector("section.current");
    console.log(currentSectionElement);

//4. get the section that comes after the current section
const nextSectionElement = currentSectionElement.nextElementSibling;
    console.log(nextSectionElement);

//5. get the h2 node from the section before the current section
const previousSectionElement = currentSectionElement.previousElementSibling;
const h2Element = previousSectionElement.querySelector("h2");
    console.log(h2Element);

//6. et the div that contains the section that has an h2 with a class of highlight
const divElement = document.querySelector("section.highlight").parentNode.parentNode;
    console.log(divElement);

//7. get all the sections that contain an H2 (using a single statement)
const sectionsWithH2Elements = document.querySelectorAll("section:has(h2)");
    console.log(sectionsWithH2Elements);