// 1. Object
// const arya = {
//     first: "Arya",
//     last: "Stark",
//     origin: "Winterfell",
//     allegiance: "House Stark"
//   };
  
  // CODE BELOW HERE
//   const { first, last, origin, allegiance } = arya
  
  
//   console.log(first); // <= Arya
//   console.log(last); // <= Stark
  
  
//   // 2. Nested Object
//   const john = {
//     first: "John",
//     last: "Snow",
//     title: "Prince",
//     family: {
//       brothers: {
//         brother1: "Rob Stark",
//         brother2: "Rickon Stark"
//       },
//       sisters: {
//         sister1: "Arya Stark",
//         sister2: "Sansa Stark"
//       }
//     }
//   };
  
//   // CODE BELOW HERE
//   const { first, last, title, family } = john;
//   const { brothers, sisters } = family;
//   const { brother1, brother2 } = brothers;
//   const { sister1, sister2 } = sisters;

//   ALTERNATIVE PREFERRED WAY
//  const { brother1, brother2 } = john.family.brothers;
  
//   console.log(brother1); // <= Rob Stark
//   console.log(brother2); // <= Rickon Stark
  
  
//   // 3. Arrays
//   const characters = ["Ned Stark", "The Quiet Wolf", "House Stark"];
  
// const [name, alias, allegiance] = characters;
  
  
//   console.log(name, alias, allegiance);
  
  
//   // 4. Strings
  const skills = 'The Usurper, male, Baratheon, Cersei';
  
  const [alias, gender, family, spouse] = skills.split(",");
  
  
  console.log(alias, gender, family, spouse); // print them by variable name