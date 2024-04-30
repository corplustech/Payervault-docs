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
      },
      {
        title:"Remove Beneficiary",
        href: "/remove-beneficiary",
      },
      {
        title:"Get Beneficiary History",
        href: "/get-beneficiary-history",
      },
      {
        title:"Get All Beneficiaries",
        href: "/get-all-beneficiaries",
      },
      {
        title:"Get Balance",
        href: "/get-balance",
      },
      {
         title:"Standard Transfer Sync",
         href: "/standard-transfer-sync",
      },
      {
        title:"Standard Transfer Async",
        href: "/standard-transfer-async",
      },
      {
        title:"Direct Transfer",
        href: "/direct-transfer",
      },
      {
        title:"Get Transfer Status",
        href: "/get-transfer-status",
      },
      {
        title:"Get all Transfers",
        href: "/get-all-transfers",
      },
      {
        title:"Request Batch Transfer",
        href: "/request-batch-transfer",
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
