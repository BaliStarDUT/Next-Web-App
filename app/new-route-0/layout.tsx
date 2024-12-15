/*
 * @Date: 2024-05-08 22:50:33
 * @LastEditors: james
 * @LastEditTime: 2024-08-15 00:01:23
 * @FilePath: /Next-Web-App/app/layouts/layout.tsx
 * @Description: Copyright (c) 2024 by yz, All Rights Reserved.
 */
import { getCategories } from '#/app/api/categories/getCategories';
import { ClickCounter } from '#/ui/click-counter';
import { TabGroup } from '#/ui/tab-group';
import React from 'react';

const title = 'Nested Layouts=====';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        {/* <TabGroup
          path="/layouts"
          items={[
            {
              text: 'Home',
            },
            ...categories.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        /> */}
        <div>
          <h1>This is a page</h1>
        </div>

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
