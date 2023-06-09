import Footer from "@/components/footer";
import Header from "@/components/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
