// friends - um array de objetos
// onde o campo "books" é a lista de livros favoritos
var friends = [
    {
      name: "Anna",
      books: ["Bible", "Harry Potter"],
      age: 21,
    },
    {
      name: "Bob",
      books: ["War and peace", "Romeo and Juliet"],
      age: 26,
    },
    {
      name: "Alice",
      books: ["The Lord of the Rings", "The Shining"],
      age: 18,
    },
  ];
  
  // allbooks - lista que contém todos os livros de friends +
  // lista adicional contida em valorInicial
  var allbooks = friends.reduce(
    function (prev, curr) {
      return [...prev, ...curr.books];
    },
    ["Alphabet"],
  );
  
  // allbooks = [
  //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
  //   'Romeo and Juliet', 'The Lord of the Rings',
  //   'The Shining'
  // ]
console.log(allbooks);