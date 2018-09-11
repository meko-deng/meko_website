# Personal Website

## Things to improve on:
* Header: nav-links don't have them so close to the top (make them lower in general) -- maybe make the blog start lower too (shouldn't be hard)
* back to top shouldn't be present if content fits into the window
* check on different devices/ browsers

* Clicking on something then when you click back , the intro page doesn't show up anymore... this is because the intro page only loads once... UGH try to fix this!
* icon next to Meko Deng
* refactor the code : 

``` Wow, you certainly are not using the features of VueJS :slight_smile:

Regarding your issue - you have not shared code where you try to override original router-link component from vue-router.

Lot of your code is manual work.

Possible improvements:

your router links can be rewritten use the tag attribute:
https://router.vuejs.org/api/#applying-active-class-to-outer-element

vue-router has API for managing URL, even navigation guards to execute some code before URL has changed

element classes can be dynamically toggled with simple Vue properties:
https://jsfiddle.net/jarmenz/pfoc1r88/ 1

references to elements can be found easier using references ($refs) 1

You should seriously think about refactoring your whole code.```

