// all the routes from the lib folder
import { ROUTES } from "@/lib/routes-config";
import Anchor from "./anchor";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger, } from "@/components/ui/sheet";
import { Logo } from "./navbar";
// import { NAVLINKS } from "./navbar";
import { Button } from "./ui/button";
import { AlignLeftIcon } from "lucide-react";
import Details from "./details";



// sidebar for large screens 
export function Leftbar() {
  return (
    <aside className="md:flex hidden flex-[0.9] min-w-[230px] sticky top-16 flex-col h-[92.75vh] overflow-y-auto">
      <ScrollArea className="py-4">
        {ROUTES.map(({ href, items, title }) => {
          return (
            <div className="flex flex-col gap-3 mt-5" key={href}>
              <h4 className="font-extrabold text-sm">{title}</h4>
              <div className="flex flex-col gap-3 text-sm dark:text-neutral-300/85 text-neutral-800 ml-0.5">

                {items.map((subItem) => {
                  // if not subItem.items then retun this , else return a dropdown link
                  if (!subItem.items) {
                    const key = `/docs/${href}${subItem.href}`;
                    return (
                      <Anchor
                        activeClassName="font-medium dark:text-white text-black"
                        href={key}
                        key={key}
                        disabled={subItem.disabled}
                      >
                        {subItem.title}
                      </Anchor>
                    );
                  }
                  else {
                    return (
                      <Details title={subItem.title}>
                        {subItem.items.map((subSubItem) => {
                          const key = `/docs/${href}/${subItem.href}/${subSubItem.href}`
                          return <div className="flex flex-col">
                            <Anchor
                              activeClassName="font-medium dark:text-white text-black"
                              href={key}
                              key={key}
                              disabled={subItem.disabled}
                              className="m-2 ms-8"
                              isNested={true}
                              nestedTitle={subSubItem.href}
                            >
                              {subSubItem.title}
                            </Anchor>
                          </div>
                        })}
                      </Details>
                    )
                  }
                })}


              </div>
            </div>
          );
        })}
      </ScrollArea>
    </aside>
  );
}

// sidebar for small screens opens from a menu 
export function SheetLeftbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden flex">
          <AlignLeftIcon />
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col gap-4 px-0" side="left">
        <SheetHeader>
          <SheetClose className="px-5" asChild>
            <Logo />
          </SheetClose>
        </SheetHeader>
        <ScrollArea className="flex flex-col gap-4">
          {/* <div className="flex flex-col gap-2 mt-3 mx-2 px-8">
            {NAVLINKS.map((item) => {
              return (
                <SheetClose asChild key={item.title + item.href}>
                  <Anchor
                    activeClassName="text-black dark:text-white font-medium"
                    absolute
                    href={item.href}
                  >
                    {item.title}
                  </Anchor>
                </SheetClose>
              );
            })}
          </div> */}
          <div className="mx-2 px-8">
            {ROUTES.map(({ href, items, title }) => {
              return (
                <div className="flex flex-col gap-3 mt-5" key={href}>
                  <h4 className="font-medium">{title}</h4>
                  <div className="flex flex-col gap-3 dark:text-neutral-300/85 text-neutral-800 ml-0.5">
                    {items.map((subItem) => {
                      // if not subItem.items then retun this , else return a dropdown link
                      if (!subItem.items) {
                        const key = `/docs/${href}${subItem.href}`;
                        return (
                          <Anchor
                            activeClassName="font-medium dark:text-white text-black"
                            href={key}
                            key={key}
                            disabled={subItem.disabled}
                          >
                            {subItem.title}
                          </Anchor>
                        );
                      }
                      else {
                        return (
                          <Details title={subItem.title}>
                            {subItem.items.map((subSubItem) => {
                              const key = `/docs/${href}/${subItem.href}/${subSubItem.href}`
                              return <div className="flex flex-col">
                                <Anchor
                                  activeClassName="font-medium dark:text-white text-black"
                                  href={key}
                                  key={key}
                                  disabled={subItem.disabled}
                                  className="m-2 ms-8"
                                  isNested={true}
                                  nestedTitle={subSubItem.href}
                                >
                                  {subSubItem.title}
                                </Anchor>
                              </div>
                            })}
                          </Details>
                        )
                      }
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
