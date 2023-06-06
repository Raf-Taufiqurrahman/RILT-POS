import React from 'react'
import makeAnimated from 'react-select/animated';
import Select from 'react-select'

export default function MultiSelect({...props}) {
    // animate components
    const animatedComponents = makeAnimated();

    return (
        <Select
            isMulti
            className="basic-multi-select"
            classNamePrefix="select"
            components={animatedComponents}
            {...props}
        />
    )
}
