import { Suspense } from "react"
import DataFetchServer from "./servercomp/page"
import loading from "./loading"

const DataFetch = async () => {
    return (
        <>
            <div>
                <h1>Data Fetch</h1>
            </div>

            <div className="grid grid-cols-2 gap-3 h-full">
                <div className="h-full flex justify-center items-center">
                    <h2>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod iusto officia aspernatur? Earum quae dolorem deleniti unde necessitatibus corrupti vel fugiat dicta officiis nam in, laborum iusto aspernatur vero iure ex inventore eveniet. A, consequuntur! Tenetur quam atque veniam possimus.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod iusto officia aspernatur? Earum quae dolorem deleniti unde necessitatibus corrupti vel fugiat dicta officiis nam in, laborum iusto aspernatur vero iure ex inventore eveniet. A, consequuntur! Tenetur quam atque veniam possimus.
                    </h2>
                </div>
            </div>

            <Suspense fallback={<loading />}>
                <DataFetchServer userName={userName} />
            </Suspense>

        </>
    )
}

export default DataFetch
