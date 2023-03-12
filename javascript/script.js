//1//
const a = [7,22,96,27]

for ( let i=0; i<a.length; i++){
    console.log(a[i])
}

const b = ["S", "L", "K" ]
let i=0

while (i<b.length){
    console.log(b[i])
    i++;
}

//2//
function display(x,secondfunc){
    let message = secondfunc(x)
    document.write(message)
}

function shefasebisfunc(price){
    if(price>50)
    return "ძვირია"
    else if(20<price<50)
    return "საშუალოა"
    else if (price<50)
    return "იაფია"
}
display(40,shefasebisfunc)


//3//
const c = [ 15,53,22,198,10,28,16,70,33,951 ] 

for(let i=0; i<c.length; i++){
    if(c[i] % 2 == 1)
    console.log("კენტი", c[i])
    else
    console.log("ლუწი", c[i])
}

//3//
const cinema = {
    cinemaname: "Rustaveli",
    languages: ["Georgian", "English"],
    address: "Rustaveli 5",
    film1: [
        {filmname1: "banshees of inisherin"},
        {rating: "7.8"}
],
    film2: [
        {filmname2: "triangle of sadness"},
        {rating: "7.4"}
    ]
  
}
document.write("<h2>languages of films</h2>")

for(let i=0; i<cinema.languages.length; i++){
    document.write(cinema.languages[i] + "<br>")
}

document.write("<h3>Films</h3>")

for(let i=0; i<cinema.film1.length; i++){
    document.write(cinema.film1[i].filmname1 + "<br>")
};
for(let i=0; i<cinema.film2.length; i++){
    document.write(cinema.film2[i].filmname2 + "<br>")
}
