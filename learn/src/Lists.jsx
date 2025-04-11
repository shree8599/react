const data =[
    {id:1, name:"rohit", age:20},
    {id:2, name:"shree", age:20},
    {id:3, name:"rahul", age:20},
    {id:4, name:"viraj", age:20},
    {id:5, name:"sejal", age:20},
]
function Lists(){
    return(
        <>
            <h1>Lists</h1>
            <ul>
                {data.map((item) => {
                    return(
                        <li key={item.id}>
                            {item.name}  {item.age}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}


export default Lists;