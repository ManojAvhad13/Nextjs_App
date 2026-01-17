"use client";

import { use } from "react";

const SingleProfilePost = (props) => {

    const user = use(props.params);
    console.log(user);

    return <h1>user = {user.empname}, PostId : {user.epostid}</h1>
}

export default SingleProfilePost