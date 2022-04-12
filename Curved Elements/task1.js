const data = [
  {
    "title": "Market & research analysis",
    "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quod maxime a iusto veritatis expedita?",
  },
  {
    "title": "Concept Presentation",
    "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quod maxime a iusto veritatis expedita?",
  },
  {
    "title": "UI/UX Wireframes",
    "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quod maxime a iusto veritatis expedita?",
  },
  {
    "title": "Prototype Testing",
    "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quod maxime a iusto veritatis expedita?",
  },
  {
    "title": "Frontend Development",
    "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quod maxime a iusto veritatis expedita?",
  },
  {
    "title": "UI Testing Process",
    "desc": "We Kick Start the UX process by collecting, analyzing and defining requirements to understand the user's desires and goal ",
  },
]




const allServicesListEle = [];
//   Adding Element in array and Provides Click listener to each  Element
document.querySelectorAll('.service-item').forEach(el => {
  allServicesListEle.push(el);
  el.addEventListener('click', function (serviceEle) {
    allServicesListEle.forEach((serviceEle) => serviceEle.classList.remove('active'));
    el.classList.add('active');
    let clickedServiceIndex;
    Array.from(el.parentNode.children).every((sEle, serviceIndex) => {
      const found = sEle.className === el.className;
      if (found) {
        console.log('index found', serviceIndex);
        clickedServiceIndex = serviceIndex;
      }
      return !found;
    });
    document.querySelector('.highlighted-service .service-title').innerHTML = data[clickedServiceIndex - 1].title;
    document.querySelector('.highlighted-service .service-desc').innerHTML = data[clickedServiceIndex - 1].desc;
  });
});


// Changing the  highlighted service item at the interval of 5 seconds 
let initialServiceIndex = -1;
setInterval(() => {
  let currentServiceIndex = (++initialServiceIndex % 6);
  // console.log(currentServiceIndex);
  allServicesListEle.forEach(serviceEle => serviceEle.classList.remove('active'));
  const selectedService = document.querySelector(`.service-item:nth-child(${currentServiceIndex + 2})`);
  selectedService.classList.add('active');
  document.querySelector('.highlighted-service .service-title').innerHTML = data[currentServiceIndex].title;
  document.querySelector('.highlighted-service .service-desc').innerHTML = data[currentServiceIndex].desc;
}, 5000);