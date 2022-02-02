const myObj = [
  { name: "shark", likes: "ocean" },
  { name: "whale", likes: "ocean" },
  { name: "turtle", likes: "pond" },
  { name: "otter", likes: "fish biscuits" },
  { name: "lion", likes: "land" },
  { name: "nemo", likes: "ocean" },

]
const ObjBylikes = myObj.map(item => {
  const container ={};

  container[item.name] = item.likes;
  container.age = item.name.length * 6;
  return container
})
console.log(ObjBylikes);

