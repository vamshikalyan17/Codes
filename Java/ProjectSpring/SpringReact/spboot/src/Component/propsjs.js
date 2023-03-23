import React from "react";

const Propsjs = ({name, heroName}) => {
    // const {name, heroName} = props
    console.log(name);
    return (
        <div>
    <h1>Hello {name} your favarote hero is {heroName}</h1>
    {/* {children} */}
    </div>
    )
};

export default Propsjs;