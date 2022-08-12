async function foo(){
  const res = await fetch("https://www.anapioficeandfire.com/api/books")
   data = await res.json()
   for(var i=0;i<data.length;i++){
          var div= document.createElement("div");
          
          div.innerHTML=
          
          `<div class="container">
             <div class="row">
              <div class=".col-md-4">
              <div class="card-group">
          <div class="card" >
             <div class="card-body">
         
             <h5 class="card-text"> Book Name: ${data[i].name}</h5>
             <h5 class="card-text">isbn: ${data[i].isbn}</h5>
             <h5 class="card-text">Number of Pages: ${data[i].numberOfPages}</h5>
             <h5 class="card-text">Authors: ${data[i].authors}</h5>
             <h5 class="card-text">Publisher: ${data[i].publisher}</h5>
             <h5 class="card-text">Released: ${data[i].released}</h5>
             <h5 class="card-text">Characters: ${data[i].characters[i]}</h5><br>
             <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="https://www.anapioficeandfire.com/api/characters/12">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="https://www.anapioficeandfire.com/api/characters/2">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="https://www.anapioficeandfire.com/api/characters/41">3</a></li>
    <li class="page-item"><a class="page-link" href="https://www.anapioficeandfire.com/api/characters/6">4</a></li>
    <li class="page-item"><a class="page-link" href="https://www.anapioficeandfire.com/api/characters/47">5</a></li>
    <li class="page-item">
      <a class="page-link" href="http://127.0.0.1:5500/index.html">Next</a>
    </li>
  </ul>
</nav>
             
             
          </div>
          
          </div>`
          document.body.append(div);
           
       }
      }
      foo();

      