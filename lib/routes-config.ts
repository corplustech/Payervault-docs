// remove disabled

type Item_Type = {
  title: string,
  href: string,
  disabled?: boolean
  items?: Array<Item_Type>
}
type ROUTES_Type = {
  title: string,
  href: string,
  items: Array<Item_Type>
}



// these routes are controlling the routes in the sidebar and their content as well
export const ROUTES: ROUTES_Type[] = [
  // {
  //   title: "Getting Started",
  //   href: "getting-started",
  //   // sub routes in the getting-started route 
  //   items: [
  //     {
  //       title: "Introduction",
  //       href: "/introduction",
  //     },
  //     {
  //       title: "Installation",
  //       href: "/installation",
  //     },
  //     {
  //       title: "components.json",
  //       href: "/components-json",
  //     },
  //     {
  //       title: "Project Structure",
  //       href: "/project-structure",
  //       disabled: true,
  //     },
  //     {
  //       title: "Theming",
  //       href: "/theming",
  //       disabled: true,
  //     },
  //     {
  //       title: "Typography",
  //       href: "/typography",
  //       disabled: true,
  //     },
  //     {
  //       title: "Changelog",
  //       href: "/changelog",
  //       disabled: true,
  //     },
  //   ],
  // },
  // payout api routes 
  {
    title: "Payout API",
    href: "payout-api",
    items: [
      {
        title: "Introduction",
        href: "/introduction",
      },
      {
        title: "Getting Started",
        href: "/getting-started",
      },
      {
        title: "Add Beneficiary",
        href: "/add-beneficiary",
      },
      {
        title:"Get Beneficiary Details",
        href: "/get-beneficiary-details",
      }
    ]
  },
  {
    title: "Components",
    href: "components",
    items: [
      {
        title: "Accordian",
        href: "/accordian",
      },
      {
        title: "Alert Dialog",
        href: "/alert-dialog",
        disabled: true,
      },
      {
        title: "Breadcrumb",
        href: "/breadcrumb",
        disabled: true,
      },
      {
        title: "Button",
        href: "/button",
        disabled: true,
      },
      {
        title: "Context Menu",
        href: "/context-menu",
        disabled: true,
      },
      {
        title: "Data Table",
        href: "/data-table",
        disabled: true,
      },
      {
        title: "Date Picker",
        href: "/date-picker",
        disabled: true,
      },
      {
        title: "Dialog",
        href: "/dialog",
        disabled: true,
      },
      {
        title: "Dropdown Menu",
        href: "/dropdown-menu",
        disabled: true,
      },
      {
        title: "Form",
        href: "/form",
        disabled: true,
      },
      {
        title: "Hover Card",
        href: "/hover-card",
        disabled: true,
      },
      {
        title: "Input",
        href: "/input",
        disabled: true,
      },
      {
        title: "Input OTP",
        href: "/input-otp",
        disabled: true,
      },
      {
        title: "Label",
        href: "/label",
        disabled: true,
      },
      {
        title: "Menubar",
        href: "/menubar",
        disabled: true,
      },
      {
        title: "Navigation Menu",
        href: "/navigation-menu",
        disabled: true,
      },
      {
        title: "Pagination",
        href: "/pagination",
        disabled: true,
      },
      {
        title: "Radio Group",
        href: "/radio-group",
        disabled: true,
      },
      {
        title: "Resizable",
        href: "/resizable",
        disabled: true,
      },
      {
        title: "Scroll Area",
        href: "/scroll-area",
        disabled: true,
      },
      {
        title: "Toast",
        href: "/toast",
        disabled: true,
      },
    ],
  },
];


// this fuction is combining the routes and their sub routes into a single array
// example href: "getting-started" and href: "/introduction" will be combined into href: "getting-started/introduction"
export const FLATTEND_ROUTES = ROUTES.map(({ href, items }) => {
  // this will return an array that will have arrays as elements [[],[],[]], hence using .flat()
  return items.map((link) => {
    // returns an arrray of obeects [{},{},{}]
    return {
      title: link.title,
      href: href + link.href,
      disabled: link.disabled,
    };
  });
}).flat();
