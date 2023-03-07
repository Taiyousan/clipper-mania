import CareScale from './CareScale'
import '../styles/ClipperItem.css'

function ClipperItem ({id, name, water, light, cover, isBestSale, isSpecialOffer}) {
return (
    <li key={id} className='cm-clipper-item'>
        <img className='cm-clipper-item-cover' src={cover} alt='' />
        {name}
        <div>
        <CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
        </div>
    </li>
)
}

export default ClipperItem