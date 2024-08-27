import React from 'react';
import ParentComponent from './ParentComponent'; 
import StateCounter from './StateCounter';
import ShoppingCart from './ShoppingCart';

const App: React.FC = () => {
    return (
        <div>
            <h1>React TypeScript Counter Example</h1>
            <ParentComponent />
            <StateCounter />

            <ShoppingCart />

        </div>
    );
};

export default App;
