console.log("This is my index js file");

// Initialize the news api parameters
let source = "bbc-news";
let apiKey = "78b45085752c4e7aaa51f2e603be5b64";

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=78b45085752c4e7aaa51f2e603be5b64`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;

    console.log(articles);
    let newsHtml = "";
    articles.forEach(function(element,index){
        //onsole.log(element,index)


      // let news = `     <div class="card" >
      //                       <div class="card-header" id="heading${index}">
      //                       <h2 class="mb-0">
      //                           <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
      //                          <b> BREAKING NEWS <span class="badge badge-secondary"> ${index+1}</span></b> ${element['title']}
      //                           </button>
      //                       </h2>
      //                       </div>

      //                       <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
      //                       <div class="card-body">
      //                       ${element['description']}. <a href="${element ['url']}" target="_blank" >Click for full article</a>
                                
      //                       </div>
      //                       </div>
      //                   </div>`;
      
      let news=`<div class="cont"><div class="card" ">
      <img style="width:370px margin=auto" src="${element['urlToImage']}" class="card-img-top" alt="...">
      <div class="card-body" >
        <h5 class="card-title">${element['title']}</h5>
        <p class="card-text">${element['description']}</p>
        <a href="${element ['url']}" class="btn btn-primary">Read Full article</a>
      </div>
    </div> </div> `
    
    ;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("some error has occured bro");
  }
};
xhr.send();
