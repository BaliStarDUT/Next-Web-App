import type { Product } from '#/app/api/products/product';
import { Ping } from '#/ui/ping';
import { ProductEstimatedArrival } from '#/ui/product-estimated-arrival';
import { ProductLowStockWarning } from '#/ui/product-low-stock-warning';
import { ProductPrice } from '#/ui/product-price';
import { ProductSplitPayments } from '#/ui/product-split-payments';
import { ProductUsedPrice } from '#/ui/product-used-price';
import { dinero, type DineroSnapshot } from 'dinero.js';
import { Suspense } from 'react';
import { AddToCart } from './add-to-cart';
import { USD } from '@dinero.js/currencies';

function LoadingDots() {
  return (
    <div className="text-sm">
      <span className="space-x-0.5">
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_infinite] rounded-full">
          &bull;
        </span>
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.2s_infinite] rounded-full">
          &bull;
        </span>
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.4s_infinite] rounded-full">
          &bull;
        </span>
      </span>
    </div>
  );
}

async function UserSpecificDetails({ productId }: { productId: string }) {
  const url = `https://app-dir.vercel.app/api/products?id=${productId}&delay=500&filter=price,usedPrice,leadTime,stock`;
  console.log(url);
  // const data = await fetch(
  // url,{
  // We intentionally disable Next.js Cache to better demo
  // streaming
  // cache: 'no-store',
  // },
  // );
  // console.log(data);

  // const product = (await data.json()) as Product;
  // const price = dinero(product.price as DineroSnapshot<number>);
  const price = dinero({
    amount: 500,
    currency: USD,
  } as DineroSnapshot<number>);
  // type UsedPrice = {
  //   amount: number;
  //   currency: Currency;
  //   scale: number;
  // };
  const discount1 = {
    percent: 9,
    expires: 100,
  };
  const product = {
    usedPrice: { amount: 510, currency: USD, scale: 2 },
    leadTime: 100,
    stock: 12,
    usedPriceRaw: 100,
    discount: discount1,
  };
  return (
    <>
      <ProductSplitPayments price={price} />
      {product.usedPrice ? (
        <ProductUsedPrice usedPrice={product.usedPrice} />
      ) : null}
      <ProductEstimatedArrival leadTime={product.leadTime} hasDeliveryTime />
      {product.stock <= 1 ? (
        <ProductLowStockWarning stock={product.stock} />
      ) : null}
    </>
  );
}

export function Pricing({
  product,
  cartCount,
}: {
  product: Product;
  cartCount: string;
}) {
  const price = dinero({
    amount: 12100,
    currency: USD,
    scale: 2,
  } as DineroSnapshot<number>);
  console.log(product.discount);
  return (
    <div className="space-y-4 rounded-lg bg-gray-900 p-3">
      <ProductPrice price={price} discount={product.discount} />

      <div className="relative">
        <div className="absolute -left-4 top-1">
          <Ping />
        </div>
      </div>

      <Suspense fallback={<LoadingDots />}>
        {/* @ts-expect-error Async Server Component */}
        <UserSpecificDetails productId={product.id} />
      </Suspense>

      <AddToCart initialCartCount={Number(cartCount)} />
    </div>
  );
}
