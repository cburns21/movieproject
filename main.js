var movies = [
    {
      name: 'Shape of Water',
      year: 2017,
      director:  'Guillermo de Toro',
      summary: '“At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.”',
      rottenTomatoScore: '92%',
      image: 'shapeWater.jpg',
    },
  
    {
      name: 'Moonlight',
      year: 2016,
      director: 'Barry Jenkins',
      summary: '“A chronicle of the childhood, adolescence and burgeoning adulthood of a young, African-American, gay man growing up in a rough neighborhood of Miami.”',
      rottenTomatoScore: '98%',
      image: 'moonlight.jpg',
    },
  
    {
      name: 'Spotlight',
      year: 2016,
      director: 'Tom McCarthy',
      summary: '“The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.”',
      rottenTomatoScore: '97%',
      image: 'spotlight.jpg',
    },
  
    {
      name: 'Birdman',
      year: 2014,
      director: 'Alejandro González Iñárritu',
      summary: '“A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.”',
      rottenTomatoScore: '91%',
      image: 'birdman.jpg',
    },
  
    {
      name: 'Twelve Years a Slave',
      year: 2013,
      director: 'John Ridley',
      summary: '“In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.”', 
      rottenTomatoScore: '95%' ,
      image: 'yearsSlave.jpg',
    },
  
    {
      name: 'Argo',
      year: 2012,
      director: 'Ben Affleck',
      summary: '“CIA agent launches a dangerous operation to rescue six Americans in Tehran during the U.S. hostage crisis in Iran in 1979.”',
      rottenTomatoScore: '96%',
      image: 'argo.jpg',
    },
  
    {
      name: 'The Artist' ,
      year: 2011,
      director: 'Michel Hazanavicius',
      summary: '“An egomaniacal film star develops a relationship with a young dancer against the backdrop of Hollywoods silent era.”',
      rottenTomatoScore: '95%',
      image: 'artist.jpg',
    },
  
    {
      name: "The King’s Speech",
      year: 2010,
      director: 'Tom Hooper',
      summary: '“The story of King George VI, his impromptu ascension to the throne of the British Empire in 1936, and the speech therapist who helped the unsure monarch overcome his stammer.”',
      rottenTomatoScore: '95%',
      image: 'kingSpeech.jpg',
    },
  
    {
      name: 'Hurtlocker',
      year: 2009,
      director: 'Kathryn Bigelow',
      summary: '“During the Iraq War, a Sergeant recently assigned to an army bomb squad is put at odds with his squad mates due to his maverick way of handling his work.”' ,
      rottenTomatoScore: '97%',
      image: 'hurtLocker.jpg',
    },
  
    {
      name: 'Slumdog Millionaire',
      year: 2008,
      director: 'Danny Boyle',
      summary: '“A Mumbai teen reflects on his upbringing in the slums when he is accused of cheating on the Indian Version of Who Wants to be a Millionaire?”',
      rottenTomatoScore: '91%',
      image: 'slumdog.jpg',
    },
  
    {
      name: 'No Country for Old Men',
      year: 2007,
      director: 'Ethan Coen and Joel Coen',
      summary: '“Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.”',
      rottenTomatoScore: '93%',
      image: 'oldMen.jpg',
    },
  ]
  
var card = document.getElementById('card')

    for(let i=0; i <movies.length; i++){
        var cardbody= document.createElement('div')
        card.classList.add('card');
        var h1 = document.createElement('h1')
        h1.classList.add('card-title')
        h1.innerHTML = movies[i].name;
        var h2 = document.createElement('h2')
        h2.classList.add('card-title')
        h2.innerHTML = movies[i].year
        var h3= document.createElement('h3')
        h3.classList.add('card-title')
        h3.innerHTML = movies[i].director
        var p= document.createElement('p')
        p.classList.add('card-text')
        p.innerHTML = movies[i].summary
        var p2 = document.createElement('p')
        p2.classList.add('card-text')
        p2.innerHTML = movies[i].rottenTomatoScore

        cardbody.appendChild(h1)
        cardbody.appendChild(h2)
        cardbody.appendChild(h3)
        cardbody.appendChild(p)
        cardbody.appendChild(p2)
        card.appendChild(cardbody)
      
    }
  
  console.log(cardbody)