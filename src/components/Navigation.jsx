import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
	Button,
	Image,
} from "@nextui-org/react";

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const menuItems = ["Nosotros", "Eventos", "Formación", "Contacto", "Material"];

	return (
		<Navbar
			shouldHideOnScroll
			onMenuOpenChange={setIsMenuOpen}
			classNames={{
				wrapper: "h-full py-4 sm:py-2",
			}}
		>
			{/* Logo, nombre y toggle button */}
			<NavbarContent className="flex flex-col gap-8 sm:flex-row sm:justify-between">
				<Image
					src="/assets/logo-escuela.png"
					height={96}
					alt="Logo-Escuela-Gimnasia-y-Cultura-China"
				/>
				<NavbarBrand>
					<p className="brand-name whitespace-normal font-bold text-2xl text-inherit text-center lg:text-start lg:w-[70%]  ">
						Escuela de Gimnasia y Cultura China
					</p>
				</NavbarBrand>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="lg:hidden z-40 h-[20px]"
				/>
			</NavbarContent>
			{/* Menu en formato > a mobile */}
			<NavbarContent className="hidden lg:flex gap-8" justify="center">
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link className="w-full link-underline text-black" href="#" size="lg">
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarContent>
			{/* Mobile menu */}
			<NavbarMenu className="pt-[13rem]">
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							// color={
							// 	index === 2
							// 		? "primary"
							// 		: index === menuItems.length - 1
							// 		? "danger"
							// 		: "foreground"
							// }
							className="w-full text-black link-underline mt-6"
							href="#"
							size="lg"
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
