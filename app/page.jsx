import { Suspense } from "react";
import DynamicSection from "@/components/DynamicSection";
import StaticSection from "@/components/StaticSection";

export default function HomePage() {
    return (
        <div className="grid grid-cols-2 gap-6 p-6">

            {/* Static Side */}
            <StaticSection />

            {/* Dynamic Side with Suspense */}
            <Suspense fallback={<p>Loading dynamic data...</p>}>
                <DynamicSection />
            </Suspense>

        </div>
    );
}
