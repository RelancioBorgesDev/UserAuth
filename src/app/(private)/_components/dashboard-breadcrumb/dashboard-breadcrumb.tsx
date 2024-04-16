"use client";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import React from "react";

export default function DashboardBreadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const formattedSegments = pathSegments.map((segment, index) => {
    const capitalizedSegment =
      segment.charAt(0).toUpperCase() + segment.slice(1);

    if (segment === "dashboard" && index === pathSegments.length - 1) {
      return "Dashboard  /  Inicio";
    }

    return capitalizedSegment;
  });

  return (
    <Breadcrumb className="text-xl">
      <BreadcrumbList>
        {formattedSegments.map((segment, index) => (
          <React.Fragment key={segment}>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/${pathSegments.slice(0, index + 1).join("/")}`}
              >
                {segment}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index !== formattedSegments.length - 1 && (
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
