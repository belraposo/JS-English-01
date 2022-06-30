let comedy = [
    {
        title: 'Mean Girls',
        director: 'Mark Waters',
        year: 2004
    }, 
    {
        title: 'Sausage Party',
        director: ['Conrad Vernon', 'Greg Tiernan'],
        year: 2016
    }, 
    {
        title: 'Superbad',
        director: 'Greg Motolla',
        year: 2007
    }
]

console.log(comedy);

let action = [
    {
        title: 'Black Widow',
        director: 'Cate Shortland',
        year: 2021
    }, 
    {
        title: 'Black Panther',
        director: 'Ryan Coogler',
        year: 2018
    }, 
    {
        title: 'Hansel and Gretel: Witch Hunters',
        director: 'Tommy Wirkola',
        year: 2013
    }
]

console.log(action);

let fantasy = [
    {
        title: 'Avengers: Infinity War',
        director: ['Anthony Russo', 'Joe Russo'],
        year: 2018
    }, 
    {
        title: 'Shang-Chi and the Legend of the Ten Rings',
        director: 'Destin Cretton',
        year: 2021
    }, 
    {
        title: 'Spider-Man: No Way Home',
        director: 'Jon Watts',
        year: 2021
    }
]

console.log(fantasy);

if(fantasy[1].title === 'Shang-Chi and the Legend of the Ten Rings'){
    console.log('My favorite movie is:', fantasy[1].title);
}else{
    console.log('Not even 5 stars:', fantasy[0].title);
}
