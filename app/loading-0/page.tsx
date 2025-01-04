import { ExternalLink } from '#/ui/external-link';
import Image from 'next/image';
import { Gallery } from 'next-gallery';

export default function Page() {
  const images = [
    // { src: 'https://picsum.photos/id/1018/1920/1080/', aspect_ratio: 16 / 9 },
    { src: '/pid_2_1.jpg', aspect_ratio: 16 / 9 },
    { src: '/pid_1_1.jpg', aspect_ratio: 9 / 16 },
    { src: '/pid_0_1.jpg', aspect_ratio: 9 / 16 },
    { src: 'https://picsum.photos/id/1012/1920/1080/', aspect_ratio: 16 / 9 },
    { src: 'https://picsum.photos/id/1013/1080/1920/', aspect_ratio: 9 / 16 },
    { src: 'https://picsum.photos/id/1014/1080/1920/', aspect_ratio: 9 / 16 },
    { src: 'https://picsum.photos/id/1016/1920/1080/', aspect_ratio: 16 / 9 },
    { src: 'https://picsum.photos/id/1020/2560/1080/', aspect_ratio: 21 / 9 },
    { src: 'https://picsum.photos/id/1021/1440/1080/', aspect_ratio: 4 / 3 },
    { src: 'https://picsum.photos/id/1022/1920/1080/', aspect_ratio: 16 / 9 },
    { src: 'https://picsum.photos/id/1023/1440/1080/', aspect_ratio: 4 / 3 },
    { src: 'https://picsum.photos/id/1024/1920/1080/', aspect_ratio: 16 / 9 },
    { src: 'https://picsum.photos/id/1025/1920/1080/', aspect_ratio: 16 / 9 },
    { src: 'https://picsum.photos/id/1026/1920/1080/', aspect_ratio: 16 / 9 },
    { src: 'https://picsum.photos/id/1027/1440/1080/', aspect_ratio: 4 / 3 },
    { src: 'https://picsum.photos/id/1028/1440/1080/', aspect_ratio: 4 / 3 },
    { src: 'https://picsum.photos/id/1029/1920/1080/', aspect_ratio: 16 / 9 },
  ];
  const widths = [500, 1000, 1600];
  const ratios = [2.2, 4, 6, 8];
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Instant Loading States</h1>
      <ul>
        <li>
          这类页面使用 <code>loading.js</code>{' '}
          来展示一个加载骨架，在数据加载完成之前，页面不会被渲染。
        </li>
        <li>共享的layout在获取数据或load中仍然可以交互。可以点击click试试。</li>
        <li>
          导航是可中断的。尝试在一个category页面中导航，然后点击另一个category页面，看看第一个页面是否仍然可以被交互。
        </li>
      </ul>
      {/* <div className="flex flex-col gap-10">
        <Gallery
          {...{ widths, ratios, images }}
          lastRowBehavior="match-previous"
        />
      </div> */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex">
          <Image
            src="/pid_1_1.jpg"
            width={690 / 2}
            height={1035 / 2}
            alt="Picture of the author"
          />
        </div>
        <div className="flex">
          <Image
            src="/pid_0_1.jpg"
            width={2000 / 6}
            height={3006 / 6}
            alt="Picture of the author"
          />
        </div>
        <div className="flex">
          <Image
            src="/pid_2_1.jpg"
            width={2000 / 6}
            height={1282 / 6}
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className="flex gap-10">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming">
          Docs
        </ExternalLink>
        <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/loading">
          Code
        </ExternalLink>
      </div>
    </div>
  );
}
