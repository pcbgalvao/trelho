
use trelho
var boardName="Todos";
var listName="Clean House";

db.boards.insertOne({name:boardName});
db.lists.insertOne(
  {
    name:"clean house", 
    boardname:boardName, 
  }
);

db.cards.insertOne(
  {
    listname:listName,
    cardTitle:"clean floor",
    descprition: "Steps to follow",
    checkList : [
      {
        status:false,
        title:"Living Room"
      },
      {
        status:false,
        title:"Living Room"
      },
      {
        status:false,
        title:"Living Room"
      },
    ]

   }   
)



