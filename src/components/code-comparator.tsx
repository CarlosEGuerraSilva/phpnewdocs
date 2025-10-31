import { forwardRef, type ComponentRef } from "react";
import { cn } from "@/utils/cn";
import Typography from "@/components/typography";
import { useBreakpointCondition } from "react-tw-breakpoints";
import Grid from "./grid";

type CodeComparatorElement = ComponentRef<"div">;

interface CodeComparatorProps {
  before: React.ReactNode;
  after: React.ReactNode;
  className?: string;
}

const CodeComparator = forwardRef<CodeComparatorElement, CodeComparatorProps>(
  ({ before, after, className }, forwardedRef) => {
    const isMobile = useBreakpointCondition({ lessThan: "md" });

    return (
      <Grid
        columns={{ xs: 1, md: 2 }}
        className={cn("w-full gap-6 md:gap-8", className)}
        ref={forwardedRef}
      >
        <div className="flex flex-col gap-3 h-full min-w-0">
          <Typography
            variant="subtitle"
            color="tertiary"
            component="h4"
            className="font-semibold"
          >
            {isMobile ? "Before" : "Before"}
          </Typography>
          <div className="flex-1 min-w-0 overflow-hidden">{before}</div>
        </div>

        <div className="flex flex-col gap-3 h-full min-w-0">
          <Typography
            variant="subtitle"
            color="primary"
            component="h4"
            className="font-semibold"
          >
            {isMobile ? "After" : "After"}
          </Typography>
          <div className="flex-1 min-w-0 overflow-hidden">{after}</div>
        </div>
      </Grid>
    );
  }
);
CodeComparator.displayName = "CodeComparator";

export default CodeComparator;
