import { ComponentSizes } from "@/types/variants";
import { cn } from "@/utils/cn";
import { forwardRef } from "react";

const GridColumns = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
} as const;

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: Partial<Record<ComponentSizes, keyof typeof GridColumns>>;
}

const GRID_BASE_CLASSES = "w-full grid";

const GRID_RESPONSIVE_COLUMN_CLASSES: Record<
  ComponentSizes,
  Record<keyof typeof GridColumns, string>
> = {
  xs: {
    1: GridColumns[1],
    2: GridColumns[2],
    3: GridColumns[3],
    4: GridColumns[4],
    5: GridColumns[5],
    6: GridColumns[6],
    7: GridColumns[7],
    8: GridColumns[8],
    9: GridColumns[9],
    10: GridColumns[10],
    11: GridColumns[11],
    12: GridColumns[12],
  },
  sm: {
    1: "sm:grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-4",
    5: "sm:grid-cols-5",
    6: "sm:grid-cols-6",
    7: "sm:grid-cols-7",
    8: "sm:grid-cols-8",
    9: "sm:grid-cols-9",
    10: "sm:grid-cols-10",
    11: "sm:grid-cols-11",
    12: "sm:grid-cols-12",
  },
  md: {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
    7: "md:grid-cols-7",
    8: "md:grid-cols-8",
    9: "md:grid-cols-9",
    10: "md:grid-cols-10",
    11: "md:grid-cols-11",
    12: "md:grid-cols-12",
  },
  lg: {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
    7: "lg:grid-cols-7",
    8: "lg:grid-cols-8",
    9: "lg:grid-cols-9",
    10: "lg:grid-cols-10",
    11: "lg:grid-cols-11",
    12: "lg:grid-cols-12",
  },
  xl: {
    1: "xl:grid-cols-1",
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
    5: "xl:grid-cols-5",
    6: "xl:grid-cols-6",
    7: "xl:grid-cols-7",
    8: "xl:grid-cols-8",
    9: "xl:grid-cols-9",
    10: "xl:grid-cols-10",
    11: "xl:grid-cols-11",
    12: "xl:grid-cols-12",
  },
};

const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ columns, className, ...props }, forwardedRef) => {
    const columnClasses = columns
      ? Object.entries(columns).map(
          ([size, cols]) =>
            GRID_RESPONSIVE_COLUMN_CLASSES[size as ComponentSizes][
              cols as keyof typeof GridColumns
            ]
        )
      : [];

    return (
      <div
        ref={forwardedRef}
        className={cn(GRID_BASE_CLASSES, ...columnClasses, className)}
      >
        {props.children}
      </div>
    );
  }
);

Grid.displayName = "Grid";

export default Grid;
