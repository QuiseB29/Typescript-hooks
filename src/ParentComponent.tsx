import React from 'react';
import StateCounter from './StateCounter'; // Adjust the import path as needed

const ParentComponent: React.FC = () => {
    return (
        <div>
            <h1>Counter Test</h1>
            <StateCounter />
        </div>
    );
};

export default ParentComponent;
