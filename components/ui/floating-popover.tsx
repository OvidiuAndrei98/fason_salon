"use client";

import { ShoppingBasketIcon } from "lucide-react";

import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { bookCheckout } from "@/service/stripe/bookCheckout";
import { useCart } from "@/app/core/cartContext";

const FloatingPopover = () => {
  const cart = useCart();
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="p-2 bg-foreground rounded shadow-xl rounded-full hover:bg-accent active:bg-accent hover:text-secondary-background cursor-pointer"
            aria-label="Open cart"
          >
            <ShoppingBasketIcon className="w-6 h-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="mr-6">
          {/* <div className="flex flex-col gap-3">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <span className="text-lg text-muted-foreground line-through">
                  49.99 lei
                </span>
                <span className="text-3xl font-extrabold text-accent">
                  29.99 lei
                </span>
              </div>
            </div>
            <span className="text-sm text-muted-foreground text-center">
              Cartea va fi livrata in format digital (PDF) prin email.
            </span>
            <Button
              className="p-7 rounded self-center text-xl bg-foreground text-background hover:bg-accent active:bg-accent hover:text-secondary-background"
              onClick={async () =>
                await bookCheckout("price_1SQnRKK51mlAswumsjF5JEKH")
              }
            >
              Cumpară
            </Button>
          </div> */}
          <div>
            {cart?.totalItems === 0 ? (
              "Cosul este gol"
            ) : (
              <div>
                <h2>Cosul tau</h2>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                        Produs
                      </th>
                      <th className="px-4 py-2 text-right text-sm font-medium text-gray-500">
                        Cantitate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cart?.items.map((item) => (
                      <tr key={item.id}>
                        <td className="px-4 py-2 text-sm text-gray-700">
                          {item.name}
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-700 text-right">
                          {item.quantity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="px-4 py-2 text-sm font-bold text-gray-900">
                        Total articole
                      </td>
                      <td className="px-4 py-2 text-sm font-bold text-gray-900 text-right">
                        {cart.totalItems}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-bold text-gray-900">
                        Total preț
                      </td>
                      <td className="px-4 py-2 text-sm font-bold text-gray-900 text-right">
                        {cart.totalPrice.toFixed(2)} lei
                      </td>
                    </tr>
                  </tfoot>
                </table>
                <Button
                  className="p-6 rounded self-center bg-foreground text-background hover:bg-accent active:bg-accent hover:text-secondary-background"
                  onClick={async () => {
                    await bookCheckout(
                      "price_1SQnRKK51mlAswumsjF5JEKH",
                      cart.items
                    );
                  }}
                >
                  Cumpară
                </Button>
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FloatingPopover;
