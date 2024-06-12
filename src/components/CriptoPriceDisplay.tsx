import { useMemo } from "react"
import { useCryptoStore } from "../store"

export default function CriptoPriceDisplay() {
    const result = useCryptoStore((state) => state.result)
    const hasResult = useMemo(() => Object.keys(result).length, [result])
        
    return (
        <div className="result-wrapper">
            {hasResult > 0 && (
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Imagen criptomoneda" />
                        <div>
                            <p>El precio es de: <span>{result.PRICE}</span></p>
                            <p>Precio mas alto del día: <span>{result.HIGHDAY}</span></p>
                            <p>Precio mas bajo del día: <span>{result.LOWDAY}</span></p>
                            <p>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Última actualización:  <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}