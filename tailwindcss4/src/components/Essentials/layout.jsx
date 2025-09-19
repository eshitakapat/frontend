import { SidebarProvider } from "@/components/ui/sidebar";
import MemberTopNavbar from "../Navbar/navbar";
import { AdminSidebar } from "../SSidebar/dashbaord-sidebar";

export default function Layout({ children }) {
	return (
		<SidebarProvider>
			<div className="flex min-h-screen w-screen">
				<AdminSidebar />
				<div className="flex flex-col h-full w-full">
					<MemberTopNavbar />
					<main className="bg-[#fbf8f3] w-full overflow-clip">{children}</main>
				</div>
			</div>
		</SidebarProvider>
	);
}
