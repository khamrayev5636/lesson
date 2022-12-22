// forEach faqat itaratsiya uchun, return qaytarmaydi arrayni yuqori darajali metidi
// map itaratsiya qiladi yangi array ochadi return qaytaradi yangi ochgan arrayga shartga tushganlarini ham tushmaganlarini ham push qiladi, map asosan biron nimalarni uzgartirish uchun ishlatiladi.
// filter itaratsiya qiladi yangi array ochadi usha arrayga faqatgina true shartlarni push qiladi return qaytaradi.

//     "Title": "Patton Oswalt: Annihilation",
//     "fulltitle": "Patton Oswalt: Annihilation (2017)",
//     "movie_year": 2017,
//     "Categories": "Uncategorized",
//     "summary": "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
//     "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Patton-Oswalt-Annihilation-Movie-Poster.jpg",
//     "imdb_id": "tt7026230",
//     "imdb_rating": 7.3,
//     "runtime": 66,
//     "language": "English",
//     "ytid": "4hZi5QaMBFc"


// const changeMovies = movies.map(movie => {

//     return {
//         title: movie.Title.toString(),
//         fulltitle: movie.fulltitle,
//         movie_year: movie.movie_year,
//         categories: movie.Categories.split("|"),
//         summary: movie.summary,
//         yt_id: movie.ytid,
//         poster_md: `https://i3.ytimg.com/vi/${movie.ytid}/mqdefault.jpg`,
//         yt_iframe: `https://www.youtube-nocookie.com/embed/${movie.ytid}`,
//         imdb_link: `https://www.imdb.com/title/${movie.imdb_id}`,
//         imdb_id: movie.imdb_id,
//         imdb_rating: movie.imdb_rating,
//         runtime: movie.runtime,
//         language: movie.language,
//     }

// })

// console.log(changeMovies);


// const arr = ["c" , "a" , "g" , "t" , "R" , "H" , "v" , "b" , "f"];
// const numbers = [5,685,7,87,2,14,56,-8,69,35,-98,101,365,1456,62]


// const sortArr = arr.sort((a, b) =>{

//     const tolowera = a.toLowerCase();
//     const tolowerb = b.toLowerCase();

//     if(tolowera > tolowerb){
//         return 1
//     }else if(tolowera < tolowerb){
//         return -1
//     }else{
//         return 0
//     }
// })

// console.log(sortArr);
// console.log(arr);

// const sortNumber = numbers.sort((a , b) =>  a - b);

// console.log(sortNumber);


// const people = [
//     {
//         user_name: 'Luke Skywalker',
//         height: 172,
//         mass: 77,
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         user_name: 'Darth Vader',
//         height: 202,
//         mass: 136,
//         eye_color: 'yellow',
//         gender: 'female',
//     },
//     {
//         user_name: 'Leia Organa',
//         height: 150,
//         mass: 49,
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         user_name: 'Anakin Skywalker',
//         height: 188,
//         mass: 39,
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];

//***MAP***

//1. Get array of all user_names

//  const userName = people.map(item => {
//      return (item.user_name);
//  });
//  console.log(userName);

//  people.map(item => {
//     console.log(item.user_name);
//  });



//2. Get array of all heights

// const userName = people.map(item => {
//     return (item.height);
// });
// console.log(userName);

// people.map(item => {
//     console.log(item.height);
// });

//3. Get array of objects with just user_name and height properties

// people.map(item =>{
//     console.log("username: " + item.user_name + "\n" + "height:" + item.height);
// })

// people.map(item => {
//     console.log(item.user_name , item.height);
// })

//4. Get array of all first user_names

// const newArr =  people.map(item =>{
//     return (item.user_name.split(" "));
// })

// console.log(newArr[0].join(" "));



//***REDUCE***

//1. Get total mass of all characters

// const sum = people.reduce((acc , item) =>{

//     acc += item.mass;
//     return acc;

// } ,0);

// console.log(sum);




//2. Get total height of all characters

// const sum = people.reduce((acc , item) =>{

//     acc += item.height;
//     return acc;

// } ,0);

// console.log(sum);


//3. Get total number of characters by eye color

// const numbers = people.reduce((acc , item)=>{

//     if(item.eye_color){
//         acc++
//     }
//     return acc;
// } ,0)

// console.log(numbers);

//4. Get total number of characters in all the character user_names

// const userName = people.reduce((acc , item) =>{

//     if(item.user_name){
//         acc++
//     }
//     return acc;

// } ,0)

// console.log(userName);


//***FILTER***

//1. Get characters with mass greater than 100

// console.log(people.filter(item => item.mass >= 100));



//2. Get characters with height less than 200

// console.log(people.filter(item => item.height < 200));

//3. Get all male characters

// const userMale = people.filter(item => {
//    return item.gender == "male"
// })

// console.log(userMale);

//4. Get all female characters

// console.log(people.filter(item => item.gender == "female"));


//***SORT***

//1. Sort by mass

// console.log(people.sort((a , b)=> a.mass - b.mass));


//2. Sort by height

// console.log(people.sort((a , b)=> b.height - a.height));


//3. Sort by user_name

// const userName = people.sort((a , b) => {

//     if(a.user_name > b.user_name){
//         return 1
//     }else if(a.user_name < b.user_name){
//         return -1
//     }else {
//         return 0
//     }

// })

// console.log(userName);


//4. Sort by gender

// const userName = people.sort((a , b) => {

//     if(a.gender > b.gender){
//         return 1
//     }else if(a.gender < b.gender){
//         return -1
//     }else {
//         return 0
//     }

// })

// console.log(userName);


//***EVERY***

//1. Does every character have blue eyes?

// console.log(people.every(item => item.eye_color === "blue"));


//2. Does every character have mass more than 40?

// console.log(people.every(item => item.mass < 40));


//3. Is every character shorter than 200?

// console.log(people.every(item => item.height < 200));


//4. Is every character male?

// console.log(people.every(item => item.gender === "male"));


//***SOME***

// 1. Is there at least one male character?

// console.log(people.some(item => item.gender === "male"));

// 2. Is there at least one character with blue eyes?

// console.log(people.some(item => item.eye_color === "blue"));


//3. Is there at least one character taller than 210?

// console.log(people.some(item => item.height > 210));


//4. Is there at least one character that has mass less than 50?

// console.log(people.some(item => item.mass < 50));





// const nums = [1, 2, 3, 4, 5, 6, 7, 8];


// function summ(num){
    
//     const total = num.reduce((acc,item)=>{
//         acc += item
//         return acc;
//     },0);

//     return total / num.length;

// }

// console.log(summ(nums));

// CONCAT

// const num1 = [[1]];
// const num2 = [2 , [3]];

// num1.push(10);
// num2[1].push(5)

// const concat = num1.concat(num2);
// console.log(concat);

    






