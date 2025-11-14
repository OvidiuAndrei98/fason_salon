"use client";

import { ShoppingBasketIcon } from "lucide-react";

import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { bookCheckout } from "@/service/stripe/bookCheckout";

const FloatingPopover = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="px-3 py-2 bg-foreground rounded shadow rounded-full"
            aria-label="Open cart"
          >
            <ShoppingBasketIcon className="w-5 h-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="mr-6">
          <div className="flex flex-col gap-3">
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
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FloatingPopover;
