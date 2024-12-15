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
          一个layout是一个UI，它被多个页面共享。在导航时，布局会保持状态，保持交互，但不会重新渲染。两个或多个布局还可以嵌套。
        </li>
        <li>尝试在不同的路径之间导航，看看布局如何保持状态。</li>
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
