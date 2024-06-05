import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import image from "../../public/favicon.ico"
export function Navbar() {
  return (
    <NavigationMenu className=" bg-sky-500 p-4">
      <NavigationMenuList>
        <img src={image} style={{"padding-right": "10px"  }} />
        <h1 className="text-2xl font-bold">Shipyard.build</h1>
        <NavigationMenuItem>
          <span><a>React </a></span>
          <span><a>Express </a></span>
          <span><a>Postgres </a></span>
          <span><a>LocalStack </a></span>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

