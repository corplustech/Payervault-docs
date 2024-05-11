import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { FLATTEND_ROUTES } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getMarkdownForSlug } from "@/lib/markdown";
import { cache } from "react";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
// it is a higher order function which takes a function as an argument and returns a function
const cachedGetMarkdownForSlug = cache(getMarkdownForSlug);
// its  purpose is to render the page only in case of cashe miss, else server from the cache

// this function generates metadata for the page, i.e the title and description of the page using the params of the url
export async function generateMetadata({ params: { slug = [] }, }: { params: { slug: string[] }; }) {
  const pathName = slug.join("/");
  const data = FLATTEND_ROUTES.find((value) => value.href == pathName);


  if (!data) {
    return null;
  }
  // console.log(FLATTEND_ROUTES)

  return {
    title: data.title,
    // description: frontmatter.description,
  };
}

export function generateStaticParams() {
  return FLATTEND_ROUTES.filter((item) => item.disabled != true).map(
    (item) => ({
      slug: item.href.split("/"),
    })
  );
}

export default async function DocsPage({params: { slug = [] },}: {params: { slug: string[] };}) {
  // join the slug array to get the path of the content file
  const pathName = slug.join("/");

  // getting the contents for the file readng teh md and compiling it,
  // by using the getMarkdownForSlug function and checking the cache first if availiable

  const res = await cachedGetMarkdownForSlug(pathName);

  // notFound is a special function that returns a 404 page
  if (!res) notFound();
  
  return (
    <Theme>
    <div className="flex items-start gap-12 ">
      <div className="flex-[3] py-10 ps-4">
        <DocsBreadcrumb paths={slug} />
        <div className="prose prose-zinc dark:prose-invert prose-code:font-code prose-code:bg-zinc-900 prose-pre:bg-zinc-900 prose-headings:scroll-m-20 w-[85vw] sm:w-full sm:mx-auto">
          <h1 className="break-all">{res.frontmatter.title}</h1>
          <p className="-mt-5 text-muted-foreground text-lg mb-2">
            {res.frontmatter.description}
          </p>
            {res.content}
          {/* pagination for prev and next pages */}
          <Pagination pathname={pathName} />
        </div>
      </div>
      {/* table of contents */}
      <Toc path={pathName} />
    </div>
    </Theme>
  );
}

