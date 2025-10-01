import React, { forwardRef } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

// Styles for the social link container
const socialLinkVariants = cva("flex items-center justify-around", {
  variants: {
    variant: {
      horizontal: "flex-row gap-4 md:gap-6 lg:gap-8",
    
    },
    spacing: {
      large: "gap-4 md:gap-4 lg:gap-12",
    },
    padding: {
      none: "p-0",
      
    },
  },
  defaultVariants: {
    variant: "horizontal",
    padding: "none",
  },
});

// Type for individual social link
type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

// Props for the SocialLinks component
type SocialLinksProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> &
  VariantProps<typeof socialLinkVariants> & {
    links: SocialLink[];
    buttonSize?: "default" | "sm" | "lg" | "icon";
    buttonVariant?:
      | "link"
      | "default"
      | "destructive"
      | "outline"
      | "secondary";
    
  };

// Forward ref component
const SocialLinks = forwardRef<HTMLElement, SocialLinksProps>(
  (
    {
      variant,
      spacing,
      padding,
      buttonSize = "lg",
      buttonVariant = "link",
      className,
      links,
      ...props
    },
    ref
  ) => {
    return (
      <nav
        ref={ref}
        className={cn(
          socialLinkVariants({ variant, spacing, padding }),
          className
        )}
        {...props}
      >
        {links.map((link, index) => (
          <Button
            key={index}
            asChild
            variant={buttonVariant}
            size={buttonSize}
            className="text-foreground hover:text-primary"
          >
            <Link href={link.href} aria-label={link.label}>
              {link.icon}
            </Link>
          </Button>
        ))}
      </nav>
    );
  }
);

// Set display name for better debugging and readability
SocialLinks.displayName = "SocialLinks";

export default SocialLinks;