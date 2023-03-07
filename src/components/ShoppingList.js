import {clipperList} from '../datas/clipperList'
import '../styles/ShoppingList.css'
// import CareScale from './CareScale'
import ClipperItem from './ClipperItem'


//Ce bout de code parcourt la liste des clippers et ne retourne qu'une fois les catégories.
function ShoppingList() {
    
    const categories = clipperList.reduce(
		(acc, clipper) =>
			acc.includes(clipper.category) ? acc : acc.concat(clipper.category),
		[]
	)
    return (
        <div>
            <ul className='cm-categories-container'>
                {categories.map((cat) => (
                    <li className='cm-categories-item' key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='cm-list-container'>
                {clipperList.map((clipper) => (
                    <ClipperItem key={clipper.id} 
                    id={clipper.id}
                    name={clipper.name}
                    water={clipper.water}
                    light={clipper.light}
                    isBestSale={clipper.isBestSale}
                    isSpecialOffer={clipper.isSpecialOffer}
                    cover={clipper.cover}
                    />
                ))}

            </ul>
        </div>
    )
}

export default ShoppingList