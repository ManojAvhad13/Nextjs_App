import { db } from "@/config/db"

export const dynamic = "force-dynamic"; // create dynamic component page

const DynamicPage = async () => {

    const [doctors] = await db.execute("select * from doctors");
    console.log("Dynamic doctors");

    return (
        <>
            <div>
                Hii Fullstack (Database)
            </div>

            <ul>
                {doctors.map((doctors) => {
                    return <li key={doctors.doctor_id}>{doctors.first_name} {doctors.last_name} </li>
                })}
            </ul>

        </>
    )
}

export default DynamicPage