let booksTitlesIHaveRead = [
    "bed_passenger",
    "black_looks_good_on_you",
    "a_hundred_years_of_solitude",
    "memory_of_the_body",
    "davinchi_code",
    "animals_farm",
    "anna_of_the_five_towns",
    "arms_and_the_man",
    "hamlet",
    "crime_and_punishment"
]



//this console.log to make sure that every thing is in order 
//console.log(booksTitlesIHaveRead);

let ul = document.createElement("ul");
document.getElementById('myList').appendChild(ul); //myList is div's id ,appendChild to add the <ul> to the div.
booksTitlesIHaveRead.forEach(function (booksTitlesIHaveRead) {
    let li = document.createElement("li");
    li.innerHTML += booksTitlesIHaveRead.replace(/_/g, ' ');
    li.className = "myLi";
    ul.appendChild(li);

});


let booksInfo = {
    bed_passenger: {
        'title': 'Bed passenger',
        'language': 'Arabic',
        'author': 'Ahlam mstghanmi'
    },

    black_looks_good_on_you: {
        'title': 'Black looks good on you',
        'language': 'Arabic',
        'author': 'Ahlam mstghanmi'
    },

    a_hundred_years_of_solitude: {
        'title': 'A hundred years of solitude',
        'language': 'Spanish',
        'author': 'Gabriel garcia marquez'
    },

    memory_of_the_body: {
        'title': 'Memory of the body',
        'language': 'Arabic',
        'author': 'Ahlam mstghanmi'
    },

    davinchi_code: {
        'title': 'Davinci code',
        'language': 'English',
        'author': 'Dan brown'
    },

    animals_farm: {
        'title': 'Animals farm',
        'language': 'English',
        'author': ' George orwell'
    },

    anna_of_the_five_towns: {
        'title': 'Anna of the five towns',
        'language': 'English',
        'author': 'Arnold Bennett'
    },

    arms_and_the_man: {
        'title': 'Arms and the man',
        'language': 'English',
        'author': 'George Bernard Shaw'
    },

    hamlet: {
        'title': 'Hamlet',
        'language': 'English',
        'author': 'William Shakespeare'
    },

    crime_and_punishment: {
        'title': 'Crime and punishment',
        'language': 'Russian',
        'author': 'Fyodor Dostoyevsky'
    }
}

let ul1 = document.createElement('ul');
for (let key in booksInfo) {
    let li1 = document.createElement('li');
    li1.id = key;

    li1.innerHTML += ('Title: ' + '<em>' + booksInfo[key].title + '</em><br>');
    li1.innerHTML += ('Language: ' + booksInfo[key].language + '<br>');
    li1.innerHTML += ('Author:  ' + booksInfo[key].author);
    li1.className = "myStyle";
    ul1.appendChild(li1);

}
document.getElementById("bookDetials").appendChild(ul1);

// 7.
let booksImage = {
    'bed_passenger': 'https://raw.githubusercontent.com/nour25ghazal/javascript2/master/images/abersarir.jpg',
    'black_looks_good_on_you': 'https://raw.githubusercontent.com/nour25ghazal/javascript2/master/images/black%20looks%20good%20on%20you%20.jpg.png',
    'a_hundred_years_of_solitude': 'https://raw.githubusercontent.com/nour25ghazal/javascript2/master/images/one%20hundred%20years%20of%20solitude.jpg',
    'memory_of_the_body': 'https://raw.githubusercontent.com/nour25ghazal/javascript2/master/images/memory%20of%20the%20body.jpg',
    'davinchi_code': 'https://raw.githubusercontent.com/nour25ghazal/javascript2/master/images/da%20vinci%20code.jpg',
    'animals_farm': 'https://raw.githubusercontent.com/nour25ghazal/javascript2/master/images/animals%20farm.jpg',
    'anna_of_the_five_towns': 'https://raw.githubusercontent.com/nour25ghazal/javascript2/master/images/anna%20of%20the%20five%20towns.jpg',
    'arms_and_the_man': 'https://raw.githubusercontent.com/nour25ghazal/javascript2/master/images/arms%20and%20the%20man.jpg',
    'hamlet': 'https://raw.githubusercontent.com/nour25ghazal/javascript2/master/images/hamlet.jpg',
    'crime_and_punishment': 'https://raw.githubusercontent.com/nour25ghazal/javascript2/master/images/crime%20and%20punishment.jpg.png'
}

let ul2 = document.createElement('ul');
for (let key in booksImage) {
    let li2 = document.createElement('li');
    let coverImage = document.createElement('img');
    coverImage.src = booksImage[key];
    coverImage.alt = "book's cover";
    li2.appendChild(coverImage);
    ul2.appendChild(li2);
}
document.getElementById("bookImages").appendChild(ul2);