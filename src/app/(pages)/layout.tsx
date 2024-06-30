import Navbar from "@/components/shared/navbar";

export default function PagesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}