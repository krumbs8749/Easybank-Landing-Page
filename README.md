# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The Project

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

This project is broken down to a few components:
  - Topbar (Menu - only avalaible on mobile view)
  - Hero
  - Features
  - Articles
  - Contact

These components are then imported to the App.jsx (main component) and finally rendered to the DOM in index.js 

### Screenshot

**Desktop View**
[](./public/assets/Desktop_View.png)
**Tablet View**
[](./public/assets/Tablet_View.png)
**Mobile View**
[](./public/assets/Mobile_View_1.png) [](./public/assets/Mobile_View_2.png)
[](./public/assets/Mobile_View_3.png)
**Mobile View with Menu Opened**
[](./public/assets/Mobile_View_Menu_Open.png)


## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:


```scss
.proud-of-this-scss {
  // Breakpoints to use the media query

    @media (min-width: 64em){
        // styles  go here
    }

    // 640px, 1024px, 1440px
    $breakpoints-up: ("medium" : "40em", "large": "64em", "xlarge" : "90em");
    // 639px, 1023px, 1439px
    $breakpoints-down: ("small":"39.9375em", "medium": "63.9375em", "large" : "89..9375em");

    @mixin breakpoint-up($size){
        @media (min-width: map-get($breakpoints-up, $size)){
            @content;
        }
    }
    @mixin breakpoint-down($size){
        @media (max-width: map-get($breakpoints-down, $size)){
            @content;
        }
    }
  // CSS Grid for the footer in Contact
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 3fr;
    grid-template-rows: 1fr auto;
    gap: 1rem;
    grid-template-areas: 

      "logo links1 links2 cta"
      "social links1 links2 copyright";

    text-align: left;
    justify-items: start;

  // Button design
    padding: 0.875rem 2.875rem;
    border-radius: 50px;
    background: linear-gradient(to right, $limeGreen, $brightCyan);
    color: white;
    font-weight: 400;
    font-size: 0.875rem;
    border: none;
    cursor: pointer;
    transition: opacity 300ms ease-in-out;

    &:hover{
      opacity: 0.6;
    }
}
```
```js
const proudOfThisFunc = () => {
  // using React hooks (useState, useEffect) to open the mobile menu while silmutaneously add/remove a class from the 'body' tag
    const [open, setOpen] = useState(false);
    const openMenu = () => {
      setOpen(open => !open);
    }
    useEffect(() => {
      if(open){
        document.body.classList.add("no-scroll")
      }else{
        document.body.classList.remove("no-scroll")
      }
    }, [open]
}
```


### Continued development




### Useful resources

- [Codepen](https://codepen.io/) - This helped me for searchin a way to produce a specific design by looking at other people's previous work. I really liked using this website and will use it going forward.
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - This is an amazing article which helped me multiple times in trying to figure out the CSS Grid various functionality.


## Author

- Twitter - [@krumbs8749](https://twitter.com/krumbs8749)



