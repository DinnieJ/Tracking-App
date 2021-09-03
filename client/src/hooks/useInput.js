import React, { useState, useEffect } from 'react';

const useInput = ({ type, defaultValue = '' }) => {
    const [ value, setValue ] = useState(defaultValue)
    const input = <input type={type} value={value} onChange={e => setValue(e.target.value)}/>
    return [ value, input ];
}
 
export default useInput;