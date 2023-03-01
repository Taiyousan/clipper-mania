const clipperList = [
    'boardgames',
    'poo',
    'eyes',
]

const ShoppingList = () => 
    <ul>
        {clipperList.map((clipper, index) => (
            <li key={`${clipper}-${index}`}>{ clipper }</li>
        ))}
    </ul>

export default ShoppingList