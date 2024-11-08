const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]
const courseCardDiv = document.querySelector(".course-cards"); // find the spot to update the course cards
// Dynamically (use JavaScript) to display all the courses in the certificate section as shown in the example with the courses that you have completed clearly marked in a different way and that fits your color scheme. The page should adjust automatically if the data source changes.
// First create a 'card' function
function createCourseCard(courseList) {
    courseCardDiv.innerHTML = ""; // clear any existing content (makes things less buggy later)
    courseList.forEach(function (course) {
        const card = document.createElement("figure");
        card.classList.add("course-card"); // give them all course-card as a class
        if (course.completed == true) {
            card.classList.add("completed"); // if course is completed, give it a class you can style to make the card look different
        }
        card.innerHTML = `
            <p> ${course.subject}${course.number}</p>
        `;
        courseCardDiv.appendChild(card); // add the card to the div
    })
}

createCourseCard(courses); // now call the function for real

//Allow the user to dynamically show only CSE or only WDD courses or all courses when clicking the appropriately labeled button. (filter)
const allButton = document.querySelector("#all");
const cseButton = document.querySelector('#cse');
const wddButton = document.querySelector('#wdd');

allButton.addEventListener('click', () => {
    allButton.classList.toggle('open');
    wddButton.classList.remove('open'); // turn wdd button 'off'
    cseButton.classList.remove('open'); // turn cse button off
    courseCardDiv.classList.toggle('open');
    createCourseCard(courses);
});
cseButton.addEventListener('click', () => {
    cseButton.classList.toggle('open');
    allButton.classList.remove('open'); // turn 'all' button off
    wddButton.classList.remove('open'); // turn 'wdd' button off
    const cseCourses = courses.filter(course => course.subject == "CSE");
    createCourseCard(cseCourses);
});
wddButton.addEventListener('click', () => {
    wddButton.classList.toggle('open');
    cseButton.classList.remove('open'); // turn 'cse' button off
    allButton.classList.remove('open'); // turn 'all' button off
    const wddCourses = courses.filter(course => course.subject == "WDD");
    createCourseCard(wddCourses);
});
//Design the course cards to indicate those courses that you have completed in a complimentary, but different style than the rest.
//Provide a total number of credits required dynamically by using a reduce function (not shown on the screenshots). The number of credits shown should reflect just the courses currently being diplayed.