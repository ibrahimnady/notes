import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return ( 
        <Typewriter
            options={{
                strings: [
                    "Welcome to my website. Here you can write any note and save it or modify it at a later time" ,
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;