const hikeList = [
    
    {
      name: 'Halley Woods',
      imgSrc: 'Halley-woods.jpg',
      imgAlt: 'Image of woods',
      distance: '4 miles',
      difficulty: 'Easy',
      description:
        "Beautiful short hike through Halley's Forest, with amazing views of a lake. ",
      directions:
        'near the lonely mountain, traversing through the mines of moria'
    },
    {
        name: 'Mountain Mountain',
        imgSrc: 'mountain.jpg',
        imgAlt: 'Image of mountain',
        distance: '3 miles',
        difficulty: 'Easy',
        description:
          'Beautiful short hike along the trail that leads to narnia.',
        directions:
          'It is easily found crossing the wardrobe and 20 minutes on horseback along the path until you see a lion.'
      },
    {
      name: 'Teton Canyon',
      imgSrc: 'complete.jpg',
      imgAlt: 'Image of Bechler Falls',
      distance: '3 miles',
      difficulty: 'Easy',
      description: 'Beautiful short (or long) hike through Teton Canyon.',
      directions:
        'Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.'
    },
    {
      name: 'Denanda Falls',
      imgSrc: 'bike-ride.jpg',
      imgAlt: 'Image of Bechler Falls',
      distance: '7 miles',
      difficulty: 'Moderate',
      description:
        'Beautiful hike through Bechler meadows river to Denanda Falls',
      directions:
        'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.'
    }
  ];
  
  const imgBasePath = 'https://papafrity.github.io/portfolio/week5/group/images/';

export default class Hikes{
    constructor(Id){
        this.parentElement = document.getElementById(Id);

        this.backBtn = this.builBackBtn();
        
    }


    getAllHikes(){
        return hikeList;
    }
    getHikesByName(hikeName){
       return this.getAllHikes().find( hike => hike.name == hikeName);
    }
    showHikeList(){
        this.parentElement.innerHTML = '';
        renderHikeList(this.parentElement,this.getAllHikes())
        this.addHikeListener();
        this.backBtn.classList.add('hidden')
        

    }
    showOneHike(hikeName){
        const hike = this.getHikesByName(hikeName);
        this.parentElement.innerHTML= '';
        this.parentElement.appendChild(renderOneHikeFull(hike));
        this.backBtn.classList.remove('hidden');
        this.parentElement.classList.toggle('x');
        


    }
    addHikeListener(){
        const children = Array.from( this.parentElement.children);
        children.forEach( hike=> {
            hike.addEventListener('click',(e)=>{
                this.showOneHike( e.currentTarget.dataset.name)
            } )
        })

    }
    builBackBtn(){
        const btn = document.createElement('button');
        btn.innerHTML = '&lt;- All Hikes';
        btn.classList.add('btn-style')
        btn.addEventListener('click', () => {
          this.showHikeList();
          this.parentElement.classList.toggle('x');
        });
        btn.classList.add('hidden');
        this.parentElement.classList.toggle('x');
        this.parentElement.before(btn);
        return btn;
        

    }
}

function renderHikeList(parent, hikes) {
    hikes.forEach(hike => {
      parent.appendChild(renderOneHikeLight(hike));
    });
  }
  function renderOneHikeLight(hike) {
      const item = document.createElement('li')
      item.setAttribute('data-name', hike.name)
      item.innerHTML= `
      <h2>${hike.name}</h2>
<div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
<div>
        <div>
            <h3>Distance</h3>
            <p>${hike.distance}</p>
        </div>
        <div>
            <h3>Difficulty</h3>
            <p>${hike.difficulty}</p>
        </div>
</div>
      `
      return item
    
  }
  function renderOneHikeFull(hike) {
    const item = document.createElement('li');
    item.innerHTML = ` 
      
          <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
          <h2>${hike.name}</h2>
          <div>
              <h3>Distance</h3>
              <p>${hike.distance}</p>
          </div>
          <div>
              <h3>Difficulty</h3>
              <p>${hike.difficulty}</p>
          </div>
          <div>
              <h3>Description</h3>
              <p>${hike.description}</p>
          </div>
          <div>
              <h3>How to get there</h3>
              <p>${hike.directions}</p>
          </div>
      
      `;
   
    return item;
  }
