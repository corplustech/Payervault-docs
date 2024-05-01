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
        title:"Beneficiary",
        href: "/beneficiary",
        items:[
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
        ]
      },
      {
        title:"Account",
        href: "/account",
        items:[
          {
            title:"Get Balance",
            href: "/get-balance",
          },
        ]
      },
      {
        title:"Transfer",
        href: "/transfer",
        items:[
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
        ]
      },
      {
        title:"Batch Transfer",
        href: "/batch-transfer",
        items:[
          {
            title:"Request Batch Transfer",
            href: "/request-batch-transfer",
          },
          {
            title:"Get Batch Transfer Status",
            href: "/get-batch-transfer-status",
          },
          {
            title:"Get All Batch Transfers",
            href: "/get-all-batch-transfers",
          },
        ]
      },
      {
        title:"Payout Pricing",
        href: "/payout-pricing",
      }
    ]
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
