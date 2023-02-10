function getContent(fragmentId, callback){

    var pages = {
      Inspiration: {
        Heading:"<h1>Inspiration</h1>",
        Para:"Feast your eyes on mesmerizing art and design work, and catch up on the latest creative trends to get inspired and come up with new ideas.",
        Image:"<img src='./index.jpeg'>"
      },
      Tips: {
        Heading:"<h1>Tips</h1>",
        Para:"Professional step-by-step guides to help you in pursuing your creative passions and honing your skills.",
        Image:"<img src='./3d-led-tv.jpg'>"
      }, 
      Work_culture: {
        Heading:"<h1>work culture</h1>",
        Para:"Enhance your creative career with professional advice on everything from building an impressive portfolio, to landing your dream job.",
        Image:"<img src='./mo.jpeg'>"
      }, 
     Resources: {
        Heading:"<h1>Resources</h1>",
        Para:"All the tools you need to ease your creative work processes, from the most useful apps and plugins to recommended online resources.",
        Image:"<img src='./Image (13).png'>"
      }
    }

callback(pages[fragmentId]);
  }
  
  
  
  function loadContent(){
   
    var contentDiv = document.getElementById("app"),
        fragmentId = location.hash.substring(1);
  
    getContent(fragmentId, function (content) {
        contentDiv.innerHTML ="";
        console.log(content);
        for(let i in content){
            contentDiv.innerHTML += content[i];
        }
        
    });
  
  }
  
  if(!location.hash) {
    location.hash = "#Inspiration";
  }
  
  loadContent();
  
 window.addEventListener("hashchange", loadContent)