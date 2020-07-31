import React from 'react';
import SelectCompOptions from './CompanyOptions/SelectCompOptions';
import  "./components.css";

const SelectCompany = (props) => {
    return (
        <div>
            {/* <button className="alignButton" onClick={props.assignRole} disabled={!(props.disabled) || (props.isRoleSelected=== '') || (props.isRoleSelected=== '-1')}>Update Role</button> */}
            <select className="alignCompany" onChange={props.changeValue} >
                {
                    props.company.map(data => (
                        <SelectCompOptions
                            text={data.item}
                            key={data._id}
                            value={data.code}
                            changeValue={props.changeValue}
                        />
                    ))
                }
            </select>
        </div>
    );
}
export default SelectCompany;