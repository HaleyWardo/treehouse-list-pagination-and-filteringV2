/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const totalStudents = document.querySelectorAll('.student-item').length;
const totalPages = Math.ceil(totalStudents / 10);

const page = document.querySelector('.page');

const paginationHTML = `
<div class="pagination">
   <ul>
   </ul>
</div>
`;

page.innerHTML += paginationHTML;
const paginationUl = document.querySelector('.pagination');

for (let i = 0; i < totalPages; i++) {
   const pages = `<li><a href="#">${i + 1}</a></li>`
   paginationUl.innerHTML += pages;
}

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
const showPage = (list, page) => {
   
}



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = () => {

}



// Search HTML
const studentSearchHTML = `
   <div class="student-search">
      <input placeholder="Search for students...">
      <button>Search</button>
   </div>
`;