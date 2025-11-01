import { useState } from "react";
import Button from "./button";
import Card from "./card";
import { DislikeIcon } from "./icons/dislike-icon";
import { LikeIcon } from "./icons/like-icon";
import Typography from "./typography";
import { CheckmarkIcon } from "./icons/checkmark-icon";

interface FeedbackVoteProps extends React.HTMLAttributes<HTMLDivElement> {
  docHref: string;
}

const FeedbackVote: React.FC<FeedbackVoteProps> = ({ docHref, ...props }) => {
  const [voted, setVoted] = useState<boolean>(
    localStorage.getItem("vote_article_" + docHref) !== null
  );
  const handleVote = () => {
    localStorage.setItem("vote_article_" + docHref, "true");
    setVoted(true);
  };
  return (
    <div className={props.className} {...props}>
      <Card>
        <Typography variant="body" textAlign="center" className="mb-3">
          Was this page helpful?
        </Typography>
        {voted ? (
          <div className="text-center text-sm flex items-center justify-center gap-2">
            <CheckmarkIcon className="text-primary" size={16} />
            <span className="ms-1"> Thanks for your feedback</span>
          </div>
        ) : (
          <div className="flex justify-center gap-2">
            <Button
              startContent={<LikeIcon size={20} />}
              color="primary"
              variant="ghost"
              size="sm"
              onClick={() => {
                handleVote();
              }}
            >
              Yes
            </Button>
            <Button
              startContent={<DislikeIcon size={20} />}
              color="primary"
              variant="ghost"
              size="sm"
              onClick={() => {
                handleVote();
              }}
            >
              No
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default FeedbackVote;
