import React from 'react';
import SelectOptions from './Options/SelectOption';

const SelectRoles = (props) => {
    return (
        <div>
           <button onClick={props.assignRole} disabled={props.disabled}>Assign</button>
            <select onChange={props.changeValue} value={props.value}>
            {
                props.roles.map(data => (
                    <SelectOptions
                            text={data.role_name}
                            key={data._id}
                            value={data.role_code}
                            changeValue={props.changeValue}
                    />
                ))
            }
        </select>
        </div>
       
    );
}
export default SelectRoles;