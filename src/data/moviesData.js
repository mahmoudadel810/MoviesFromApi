// const moviesData = [
//   {
//     id: 1,
//     title: "Inception",
//     details: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
//     date: "2010-07-16",
//     image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
//     rating: 8.8,
//     category: "Sci-Fi"
//   },
//   {
//     id: 2,
//     title: "The Dark Knight",
//     details: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
//     date: "2008-07-18",
//     image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
//     rating: 9.0,
//     category: "Action"
//   },
//   {
//     id: 3,
//     title: "Interstellar",
//     details: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     date: "2014-11-07",
//     image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
//     rating: 8.6,
//     category: "Sci-Fi"
//   },
//   {
//     id: 4,
//     title: "The Shawshank Redemption",
//     details: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
//     date: "1994-10-14",
//     image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
//     rating: 9.3,
//     category: "Drama"
//   },
//   {
//     id: 5,
//     title: "The Godfather",
//     details: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
//     date: "1972-03-24",
//     image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//     rating: 9.2,
//     category: "Crime"
//   },
//   {
//     id: 6,
//     title: "Pulp Fiction",
//     details: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
//     date: "1994-10-14",
//     image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//     rating: 8.9,
//     category: "Crime"
//   },
//   {
//     id: 7,
//     title: "The Matrix",
//     details: "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.",
//     date: "1999-03-31",
//     image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
//     rating: 8.7,
//     category: "Sci-Fi"
//   },
//   {
//     id: 8,
//     title: "Forrest Gump",
//     details: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
//     date: "1994-07-06",
//     image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
//     rating: 8.8,
//     category: "Drama"
//   },
//   {
//     id: 9,
//     title: "Fight Club",
//     details: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much more dangerous.",
//     date: "1999-10-15",
//     image: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
//     rating: 8.8,
//     category: "Drama"
//   },
//   {
//     id: 10,
//     title: "Goodfellas",
//     details: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
//     date: "1990-09-19",
//     image: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//     rating: 8.7,
//     category: "Crime"
//   },
//   {
//     id: 11,
//     title: "Schindler's List",
//     details: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
//     date: "1993-12-15",
//     image: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
//     rating: 9.0,
//     category: "History"
//   },
//   {
//     id: 12,
//     title: "The Lord of the Rings: The Return of the King",
//     details: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
//     date: "2003-12-17",
//     image: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//     rating: 9.0,
//     category: "Fantasy"
//   },
//   {
//     id: 13,
//     title: "Gladiator",
//     details: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
//     date: "2000-05-05",
//     image: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
//     rating: 8.5,
//     category: "Action"
//   },
//   {
//     id: 14,
//     title: "Saving Private Ryan",
//     details: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
//     date: "1998-07-24",
//     image: "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
//     rating: 8.6,
//     category: "War"
//   },
//   {
//     id: 15,
//     title: "The Silence of the Lambs",
//     details: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
//     date: "1991-02-14",
//     image: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
//     rating: 8.6,
//     category: "Thriller"
//   },
//   {
//     id: 16,
//     title: "The Green Mile",
//     details: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
//     date: "1999-12-10",
//     image: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg",
//     rating: 8.6,
//     category: "Fantasy"
//   },
//   {
//     id: 17,
//     title: "Jurassic Park",
//     details: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
//     date: "1993-06-11",
//     image: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg",
//     rating: 8.2,
//     category: "Adventure"
//   },
//   {
//     id: 18,
//     title: "The Departed",
//     details: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
//     date: "2006-10-06",
//     image: "https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?userID=LVCCLD702&password=CC89101&Value=012569736740&content=L&Return=1&Type=L",
//     rating: 8.5,
//     category: "Crime"
//   },
//   {
//     id: 19,
//     title: "Memento",
//     details: "A man with short-term memory loss attempts to track down his wife's murderer.",
//     date: "2000-10-11",
//     image: "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
//     rating: 8.4,
//     category: "Thriller"
//   },
//   {
//     id: 20,
//     title: "Seven",
//     details: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
//     date: "1995-09-22",
//     image: "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
//     rating: 8.6,
//     category: "Thriller"
//   },
//   {
//     id: 21,
//     title: "The Usual Suspects",
//     details: "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
//     date: "1995-08-16",
//     image: "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
//     rating: 8.5,
//     category: "Mystery"
//   }
// ];

// export default moviesData;
