import React from 'react'

const Products = async ({ searchParams }) => {

    const params = await searchParams;   // unwrap Promise
    // const searchParams = await props.searchParams;
    // console.log(searchParams);

    const category = params?.category || "all";
    const sort = params?.sort || "default";
    const page = params?.page || 1;

    return (
        <div>
            Showing {category} products, sorted by {sort}, page {page}
        </div>
    )
}
export default Products
