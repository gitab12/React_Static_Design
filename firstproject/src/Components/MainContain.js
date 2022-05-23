import React from "react";

function MainComponent()
{

    
    return(
        <main className="Mainpage">
        <h2>About</h2>
        <p className="page1">
        React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 
        It lets you compose complex UIs from small and isolated pieces of code called “components”.
        </p>
        <h2 >Interests</h2>
        <p className="page2">
        Using React Facebook engineers made React Native library for hybrid application development.
        Among Angular, Vuejs and Nodejs, React has high SEO(search engine optimization)
        React takes DOM to the next level by keeping in memory a virtual representation of a UI and synchronizing it with the real DOM.
        </p>
        </main>
    )

}
export default MainComponent