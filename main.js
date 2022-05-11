//Changing hover color of About Me
const aboutMe = document.getElementById('aboutme');
aboutMe.addEventListener('mouseover', changeColor);
function changeColor(ev){
    ev.target.style.color = "green";
    
};
aboutMe.addEventListener('mouseleave', returnColor);
function returnColor(ev){
    ev.target.style.color = 'black';
    
};

//Changing hover color of My Projects
const myProjects = document.getElementById('myprojects');
myProjects.addEventListener('mouseover', changeColor);
myProjects.addEventListener('mouseleave', returnColor);

//Changing hover color of Skils
const skills = document.getElementById('skills');
skills.addEventListener('mouseover', changeColor);
skills.addEventListener('mouseleave', returnColor);

//Changing hover color of Contact Me
const contactMe = document.getElementById('contactme');
contactMe.addEventListener('mouseover', changeColor);
contactMe.addEventListener('mouseleave', returnColor);

const skillsImg = document.getElementsByClassName('skillsimg');
function increaseImg(ev){
    ev.target.style.width = "55px";
};

for(let i=0; i<skillsImg.length; i++){
    skillsImg[i].addEventListener('mouseover', increaseImg);
}

function decreaseImg(ev){
    ev.target.style.width = '40px';
};
for(let i=0; i<skillsImg.length; i++){
    skillsImg[i].addEventListener('mouseleave', decreaseImg);
}