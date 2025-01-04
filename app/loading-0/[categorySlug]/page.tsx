import type { Category } from '#/app/api/categories/category';
import { SkeletonCard } from '#/ui/skeleton-card';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const url = `https://app-router-api.vercel.app/api/categories?delay=1000&slug=${params.categorySlug}`;
  console.log(url);
  const res = await fetch(
    // We intentionally delay the response to simulate a slow data
    // request that would benefit from `loading.js`
    url,
    {
      // We intentionally disable Next.js Cache to better demo
      // `loading.js`
      cache: 'no-cache',
    },
  );
  console.log('====' + res);
  // console.log(res)

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong! I throw A Error');
  }
  const category = (await res.json()) as Category;
  console.log(res.json);

  if (!category) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }
  console.log(category);

  console.log(category.count);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-100">{category.name}</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: category.count }).map((_, i) => (
          <div className="flex">
            {/* <SkeletonCard key={i} /> */}
            <Image
              src="/pid_0_1.jpg"
              width={2000 / 6}
              height={3006 / 6}
              alt="Picture of the author"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
