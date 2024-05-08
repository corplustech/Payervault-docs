import { compileMDX } from "next-mdx-remote/rsc";  // used for compiling MDX content
// helps to manage file directory paths
import path from "path";
import { promises as fs } from "fs"; // for reading the mdx files
// rehype and remark plugins for syntax highlighting and other features
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import { FLATTEND_ROUTES } from "./routes-config";

// custom components imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  IdAndSecTable,
  BodyParams,
  AccessKeyAndSec,
} from "@/components/myComps/Payout";

import {
  POSTBadge,
  DELETEBadge,
  GETBadge,
  PUTBadge,
  TypeBadge,
  RequiredBadge,
  Highlight,
} from "@/components/myComps/Badges"


type MdxFrontmatter = {
  title: string;
  description: string;
};

// add custom components
const components = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  IdAndSecTable,
  POSTBadge,
  DELETEBadge,
  GETBadge,
  PUTBadge,
  BodyParams,
  TypeBadge,
  RequiredBadge,
  Highlight,
  AccessKeyAndSec,
};

// takes the slug and returns the path to the content file in this project
function getContentPath(slug: string) {
  return path.join(process.cwd(), "/contents/docs/", `${slug}.mdx`);
}

// takes a slug, reads the corresponding Markdown file, and compiles it into MDX. 
// It uses the rehype and remark plugins to process the Markdown content and the components object 
// to allow custom components in the Markdown files.
export async function getMarkdownForSlug(slug: string) {
  try {
    const contentPath = getContentPath(slug);
    // reading the file
    const rawMdx = await fs.readFile(contentPath, "utf-8");
    
    // compiling the MDX content
    return await compileMDX<MdxFrontmatter>({
      source: rawMdx,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            rehypeCodeTitles,
            rehypePrism,
            rehypeSlug,
            rehypeAutolinkHeadings,
          ],
          remarkPlugins: [remarkGfm],
        },
      },
      // using the custom components in the MDX content , MDX combines jsx and md.
      components,
    });
  } catch (err) {
    console.log(err);
  }
}


// get the table of contents of the file by reading the file and extracting the headings using regex.
export async function getToc(slug: string) { // Toc = table of contents
  const contentPath = getContentPath(slug);
  const rawMdx = await fs.readFile(contentPath, "utf-8");

  const headingsRegex = /^(#{2,4})\s(.+)$/gm;
  let match;
  const extractedHeadings = [];
  while ((match = headingsRegex.exec(rawMdx)) !== null) {
    const headingLevel = match[1].length;
    const headingText = match[2].trim();
    extractedHeadings.push({ level: headingLevel, text: headingText });
  }
  return extractedHeadings;
}

// get the previous and next routes for the current route
export function getPreviousNext(path: string) {
  // finding the index of the elem in the array where the href field is equal to the path
  const index = FLATTEND_ROUTES.findIndex(({ href }) => href == path);
  return {
    // you will get an undefined, if the index does not 
    prev: FLATTEND_ROUTES[index - 1],
    next: FLATTEND_ROUTES[index + 1],
  };
}

// slugify the text 
// replaces spaces with hyphens, converts the string to lowercase, and removes any characters that are not alphanumeric or hyphens.
export function sluggify(text: string) {
  const slug = text.toLowerCase().replace(/\s+/g, "-");
  return slug.replace(/[^a-z0-9-]/g, "");
}
