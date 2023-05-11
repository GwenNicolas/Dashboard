import React, { useState } from 'react';
import Input from "./components/Input";
import Submit from "./components/submit";

function Page() {
    return(
        <div>
            <h1>Page</h1>
            < Input />
            < Input />
            < Submit />
        </div>
    );
}

export default Page;