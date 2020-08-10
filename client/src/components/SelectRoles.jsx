import React from 'react';
import SelectOptions from './RoleOptions/SelectOption';
import  "./components.css";

const SelectRoles = (props) => {
    return (
        <div id="allignment">
            
           
            <select className="alignRoles" onChange={props.changeValue} >
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
             <button className="alignButton" onClick={props.assignRole} disabled={!(props.disabled) || (props.isRoleSelected=== '') || (props.isRoleSelected=== '-1')}>Update Role</button>
        </div>
    );
}
export default SelectRoles;
