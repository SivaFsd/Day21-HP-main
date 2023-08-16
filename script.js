try{
   fetch("https://hp-api.onrender.com/api/characters")
.then((response) => {

return response.json()

}).then((val) => {

 let map1 = val.map(function (value)
 {



 

 let resobj = {

    ...value,
    name1 : value.name,
    gender : value.gender,
    house : value.house,
    actor : value.actor,
    image : value.image,


 }
 characters(resobj)
 console.log(resobj);
})

})

}

catch(err){

   console.log(err);

}
function characters ({name1, gender, house, actor, image})
{

    document.body.innerHTML +=
    `<div class ="container">
     <div class = "card">
     <h4 class = "card-header">${name1}</h4>
     <img src = "${image}" class="flag"/>
     <div class = "card-body">
     <p><span> House: </span> ${house}</p>
     <p><span> Gender:</span> ${gender}</p>
     <p><span> Actor:</span> ${actor}</p>
     </div>
     </div>
     </div>`

}