/*
 * @Date: 2024-05-08 22:50:33
 * @LastEditors: james
 * @LastEditTime: 2024-08-15 00:02:43
 * @FilePath: /Next-Web-App/app/layouts/page.tsx
 * @Description: Copyright (c) 2024 by ${user.name}, All Rights Reserved.
 */
import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Layouts</h1>

      <ul>
        <li>
          A layout is UI that is shared between multiple pages. On navigation,
          layouts preserve state, remain interactive, and do not re-render. Two
          or more layouts can also be nested.
        </li>
        <li>Try navigating between categories and sub categories.</li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="">Help</ExternalLink>
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts">
          Docs
        </ExternalLink>
        <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/layouts">
          Code
        </ExternalLink>
      </div>
    </div>
  );
}
