import React, { FC, SetStateAction, useState } from 'react'

type FilterProps = {
    type: string,
    min?: number,
    max: number,
    default: number,
    unit?: string,
    src: string,
}

export const Editer: FC<FilterProps> = (props: FilterProps) => {

    const { type, min, max, unit, src } = props;
    
    const [filterVal, setFilterVal] = useState(props.default)
    const filterCSS = { filter: `${type}(${filterVal}${unit ? unit : ''})`}


    return(
        <li className="filter-group">
            <div className="flex-wrapper" >
                <label htmlFor={type}>{type}</label>
                <input
                    type="range"
                    id={type}
                    min={min ? min : 0 }
                    max={max}
                    step="0.01"
                    onChange={(e) => setFilterVal(Number(e.target.value))}
                    value={filterVal}
                />
            </div>

            <div id="image-group">
                <img
                    src={`${src}?w=248&fit=crop&auto=format`}
                    srcSet={`${src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    loading="lazy"
                    style={filterCSS}
                />
            </div>
        </li>
    )

}
