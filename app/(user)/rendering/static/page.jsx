import { db } from "@/config/db"

export const revalidate = 30; // Auto Update Static Pages Without Rebuild Using ISR (Incremental Static Regeneration)
// if user change database then ISR check after 30 second update database or not

const StaticPage = async () => {

    const [doctors] = await db.execute("select * from doctors");
    console.log("Static doctors");

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

export default StaticPage