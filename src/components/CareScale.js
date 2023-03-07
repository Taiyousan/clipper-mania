function CareScale (props) {
    const range = [1, 2, 3]
    //J'établis un tableau 

    const {scaleValue, careType} = props 
    // const scaleValue = props.scaleValue
    // const careType = props.careType
    // Je définis ce que récupèrent les props



    const scaleType = careType === 'light' ? '☀' : '💧'
    // Je définis scaletype, nouvelle constante, en fonction de ce qui est récupéré dans les props

    return (
        <div>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
        //Je parcours range. A chaque itération, je vérifie si la valeur récupérée en props est supérieure ou égale à là ou j'en suis dans le tableau.
        
    )
}

export default CareScale