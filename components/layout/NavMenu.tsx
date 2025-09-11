// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";


// export default function NavMenu() {
//   return (
//     <NavigationMenu viewport={false}>
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//             <Link className="text-lg" href="/docs">Docs</Link>
//           </NavigationMenuLink>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>List</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-[300px] gap-4">
//               <li>
//                 <NavigationMenuLink asChild>
//                   <Link href="#">
//                     <div className="font-medium">Components</div>
//                     <div className="text-muted-foreground">
//                       Browse all components in the library.
//                     </div>
//                   </Link>
//                 </NavigationMenuLink>
//                 <NavigationMenuLink asChild>
//                   <Link href="#">
//                     <div className="font-medium">Documentation</div>
//                     <div className="text-muted-foreground">
//                       Learn how to use the library.
//                     </div>
//                   </Link>
//                 </NavigationMenuLink>
//                 <NavigationMenuLink asChild>
//                   <Link href="#">
//                     <div className="font-medium">Blog</div>
//                     <div className="text-muted-foreground">
//                       Read our latest blog posts.
//                     </div>
//                   </Link>
//                 </NavigationMenuLink>
//               </li>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// }
