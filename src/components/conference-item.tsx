import { cn } from "@/utils/cn";
import Card from "./card";
import Button from "./button";
import { ExternalLinkIcon } from "./icons/external-link-icon";
import Typography from "./typography";
import { LocationIcon } from "./icons/location-icon";
import { CalendarIcon } from "./icons/calendar-icon";

export interface ConferenceItemProps extends React.HTMLAttributes<HTMLElement> {
  date: string;
  title: string;
  location: string;
  href: string;
}

const ConferenceItem: React.FC<ConferenceItemProps> = ({
  date,
  title,
  location,
  href,
  className,
  ...props
}) => {
  return (
    <article
      className={cn(
        "bg-surface-container-low rounded-b-2xl overflow-hidden",
        className
      )}
      {...props}
    >
      <Card elevation="highest">
        <div className="flex gap-4 flex-col-reverse md:flex-row">
          <div className="flex-1">
            <time className="inline-block px-1.5 text-sm py-1 bg-surface-container rounded">
              {date}
            </time>
            <a
              href={href}
              className="hover:decoration-dashed underline-offset-4 hover:underline"
            >
              <Typography variant="h2" component="h3" className="mt-2">
                {title}
              </Typography>
            </a>
            <div className="mt-4 text-sm text-on-surface-variant">
              <p>
                <LocationIcon
                  size={26}
                  className="text-tertiary inline-block"
                />
                <span className="ml-1">{location}</span>
              </p>
            </div>
          </div>
          <a href="#" className="block">
            <div className="rounded-2xl bg-surface-container-high flex p-6 py-8 md:py-12 justify-center items-center min-w-48">
              <CalendarIcon size={32} />
            </div>
          </a>
        </div>
      </Card>
      <div className="p-2 text-on-surface flex items-center justify-between">
        <span>+200 attendees</span>
        <Button
          variant="light"
          color="surface"
          href={href}
          endContent={<ExternalLinkIcon />}
        >
          Get tickets
        </Button>
      </div>
    </article>
  );
};

export default ConferenceItem;
