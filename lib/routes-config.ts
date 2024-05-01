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
            href: "/add",
          },
          {
            title:"Get Beneficiary Details",
            href: "/get-details",
          },
          {
            title:"Remove Beneficiary",
            href: "/remove",
          },
          {
            title:"Get Beneficiary History",
            href: "/get-history",
          },
          {
            title:"Get All Beneficiaries",
            href: "/get-all",
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

    // if items contain a sub item then href will be combined with the sub item href
    if(!link.items){
      // if does not contain sub item then return the object with its detaiis as it is a clickable link
      return {
        title: link.title,
        href: href + link.href,
        disabled: link.disabled,
      };
    }
    else{
      const arrayOFSubLinkOBjs =  link.items.map((subLink) => {
        return {
          title: subLink.title,
          href: href + link.href + subLink.href,
          disabled: subLink.disabled,
        };
      });
      return arrayOFSubLinkOBjs;
    }
  });
}).flat(2);
