import { Boundary } from '#/ui/boundary';

export default function NotFound() {
  return (
    <Boundary labels={['not-found找不到.tsx']} color="pink">
      <div className="text-vercel-pink space-y-4">
        <h2 className="text-lg font-bold">Not Found</h2>

        <p className="text-sm">Could not find requested resource找不到资源</p>
      </div>
    </Boundary>
  );
}
