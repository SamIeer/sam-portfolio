// workign on left aside lmid
const mid = document.getElementById('lmid').firstElementChild;
console.log(mid);
const mid2 = document.getElementById('lmid').lastElementChild;
console.log(mid2);

mid.addEventListener('click', () => {
   const style = document.createElement('style');
    style.textContent = `
        #lmid ul li:nth-child(odd) {
            transform: translateX(-70px);
            transition-delay: 100ms;}
            
        #lmid ul li:nth-child(even) {
            transform: translateX(30px);
            transition-delay: 100ms;
        }
        #left  li img{
            display: block;
        }
`;
    document.head.appendChild(style);
})

//working on right container
const nav = document.getElementById('navbar');
const optn = nav.children;
const rhead = document.getElementById('rhead');
const rmid = document.getElementById('box');

console.log(optn);

for (let i = 0; i < optn.length; i++) {
    optn[i].addEventListener('click', () => {
        // Reset styles for all options
        for (let j = 0; j < optn.length; j++) {
            optn[j].style.transform = '';
            optn[j].style.marginLeft = '';
            if (optn[j].firstElementChild) {
                optn[j].firstElementChild.style.fontSize = '';
            }
            if (optn[j].lastElementChild) {
                optn[j].lastElementChild.style.fontSize = '';
            }
        }

        if (i == 0) {
            optn[i].style.transform = 'rotateY(45deg)';
            optn[i].style.marginLeft = '130px';
            if (optn[i].firstElementChild) {
                optn[i].firstElementChild.style.fontSize = '35px';
            }
            if (optn[i + 1] && optn[i + 1].lastElementChild) {
                optn[i + 1].lastElementChild.style.fontSize = '15px';
                optn[i+1].style.marginRight = '20px';
            }
            rhead.style.background = 'radial-gradient(circle, rgb(251 216 74), rgb(255, 255, 255) 100%)';
            rmid.style.background = 'radial-gradient(circle, rgb(251 216 74), rgb(255, 255, 255) 100%)';
        } else {
            optn[i].style.transform = 'rotateY(45deg)';
            optn[i].style.marginRight = '120px';
            if (optn[i].firstElementChild) {
                optn[i].firstElementChild.style.fontSize = '35px';
            }
            if (optn[i - 1] && optn[i - 1].lastElementChild) {
                optn[i - 1].lastElementChild.style.fontSize = '15px';
            }
            rhead.style.background = 'radial-gradient(circle, rgb(255 157 56), rgb(255 255 255) 100%)';
            rmid.style.background = 'radial-gradient(circle, rgb(255 157 56), rgb(255 255 255) 100%)';
        }
    });
}


fetch('/api/skills/')
.then(res => res.json())
.then(data => {
  const container = document.getElementById('skills');
  container.innerHTML = ''; // Clear existing content

  data.forEach(skill => {
    container.innerHTML += `
      <div class="skill-box" style="
  background-image: url('${skill.iimage_url}');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.1);  /* translucent layer */
  backdrop-filter: blur(10px);                 /* blur effect */
  -webkit-backdrop-filter: blur(10px);         /* Safari support */
  border: 1px solid rgba(255, 255, 255, 0.2);   /* soft border */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);    /* subtle shadow */
">
        <h3>${skill.name}</h3>
        <p>${skill.description}</p>
      </div>
    `;
  });
});


fetch('/api/projects/')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('projects');
    container.innerHTML = ''; // Clear previous content

    data.forEach(project => {
      container.innerHTML += `
        <div class="project-card">
          <img src="${project.image}" alt="${project.title}">
          <a href="${project.url}" target="_blank">${project.title}</a>
          <p>${project.description}</p>
        </div>
      `;
    });
  })
  .catch(error => console.error("Error fetching projects:", error));



