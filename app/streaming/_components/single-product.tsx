import { Pricing } from '#/app/streaming/_components/pricing';
import type { Product } from '#/app/api/products/product';
import { ProductRating } from '#/ui/product-rating';
import { cookies } from 'next/headers';
import Image from 'next/image';

export const SingleProduct = async ({ data }: { data: Promise<Response> }) => {
  const product = (await data.then((res) => res.json())) as Product;
  // as Product;
  // const product = {
  //   id: 1,
  //   stock: 1,
  //   rating: 5,
  //   name: "相机📷Praesent tincidunt lectus",
  //   description: "单反相机📷Morbi eu ullamcorper urna, a condimentum massa. In fermentum ante non turpis cursus fringilla. Praesent neque eros, gravida vel ante sed, vehicula elementum orci. Sed eu ipsum eget enim mattis mollis.",
  //   price: {
  //     "amount": 4100,
  //     "currency": {
  //       "code": "USD",
  //       "base": 10,
  //       "exponent": 2
  //     },
  //     "scale": 2
  //   },
  //   isBestSeller: true,
  //   leadTime: 12,
  //   image: "patrick-OIFgeLnjwrM-unsplash.jpg",
  //   imageBlur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAAqgAwAEAAAAAQAAAAoAAAAA/8AAEQgACgAKAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAf/aAAwDAQACEQMRAD8AwNV+KvwHs7vSNLi8faJoy2VtcQatFLaSz3X2shBGyuUKjy23kgKwY4HStq5j0O4uZZ9Lfz7KR2aCQArviJyjYIyMrg4NXY7Cxddz20bE9SUU/wBKfsQcBQAPav6Gyrh+vQq1pyxMpKTuk+mr0Wr7/gf568TeI2DxlDDUqWXwpumrNpr3tIq7tFa6X67n/9k=",
  //   discount: {
  //     "percent": 90,
  //     "expires": 2
  //   },
  //   usedPrice: {
  //     "amount": 29200,
  //     "currency": {
  //       "code": "USD",
  //       "base": 10,
  //       "exponent": 2
  //     },
  //     "scale": 2
  //   }
  // }
  // Get the cart count from the users cookies and pass it to the client
  // AddToCart component
  const cartCount = cookies().get('_cart_count')?.value || '0';

  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-full lg:col-span-1">
        <div className="space-y-2">
          <Image
            src={`/${product.image}`}
            className="hidden rounded-lg grayscale lg:block"
            alt={product.name}
            height={400}
            width={400}
          />
          <div></div>
          <div className="flex gap-x-2">
            <div className="w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg grayscale"
                alt={product.name}
                height={180}
                width={180}
              />
            </div>
            <div className="w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg grayscale"
                alt={product.name}
                height={180}
                width={180}
              />
            </div>
            <div className="w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg grayscale"
                alt={product.name}
                height={180}
                width={180}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-full space-y-4 lg:col-span-2">
        <div className="truncate text-xl font-medium text-white lg:text-2xl">
          {product.name}
        </div>

        <ProductRating rating={product.rating} />

        <div className="space-y-4 text-sm text-gray-200">
          <p>{product.description}</p>
          <p>{product.description}</p>
        </div>
      </div>

      <div className="col-span-full lg:col-span-1">
        <Pricing product={product} cartCount={cartCount} />
      </div>
    </div>
  );
};
