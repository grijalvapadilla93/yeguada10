"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RouteReset({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Hide everything immediately
    document.documentElement.classList.add("route-transitioning");

    // After a tick, remove the class to re-trigger all scroll reveals
    const timer = setTimeout(() => {
      document.documentElement.classList.remove("route-transitioning");
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <main>{children}</main>;
}
