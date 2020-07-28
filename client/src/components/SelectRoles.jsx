import React from 'react';
import SelectOptions from './Options/SelectOption';
import  "./components.css";

const SelectRoles = (props) => {
    return (
        <div>
            <button className="alignButton" onClick={props.assignRole} disabled={!props.disabled}>Update Role</button>
            <select className="alignRoles" onChange={props.changeValue} value={props.value}>
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