export default function Array()
{
    const things = [
        {id:1, name:"book"},
        {id:2, name:"phone"},
        {id:3, name:"laptop"},
        {id:4, name:"ice"},
        {id:5, name:"phone"}
          
    ];
    const fruits = ["apple","orange","banana","lemon"];
    const fruitsList = fruits.map((fruit,index) => (
        <h3 key={index} >{fruit}</h3>
    ))
    const thingsList = things.map((thing) => (
        <h3 key={thing.id}>{thing.name}</h3>
    ));

    return <div>{fruitsList}</div>
}
