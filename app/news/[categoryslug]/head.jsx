import { getSlugCategory } from "lib/news";

export default async function Head({ params }) {
  let title = "Ubtimes.mn - Мэдээ мэдээлэл";
  const { category } = await getSlugCategory(params.categoryslug);
  if (category) {
    title = "Ubtimes.mn" + " - " + category.name;
  }
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={title} />
      <meta property="og:image" content={""} />
    </>
  );
}
