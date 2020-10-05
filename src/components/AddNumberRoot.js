import React from 'react';
import AddNumber from './AddNumber';

const AddNumberRoot = (props) => {
    console.log('AddNumberRoot');
    return (
        <div>
            <h1>Add Number Root</h1>
            <AddNumber />
        </div>
    );
};

export default AddNumberRoot;
