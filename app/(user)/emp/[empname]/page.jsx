const SingleProfile = async (props) => {

    const user = await props.params;
    console.log(user);

    return <h1>user = {user.empname}</h1>
}

export default SingleProfile        