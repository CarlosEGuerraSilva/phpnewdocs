import { useState } from "react";
import Button from "./button";
import Card from "./card";
import { DislikeIcon } from "./icons/dislike-icon";
import { LikeIcon } from "./icons/like-icon";
import Typography from "./typography";
import { CheckmarkIcon } from "./icons/checkmark-icon";
import TextArea from "./text-area";
import Modal from "./modal";
import Checkbox from "./checkbox";

interface FeedbackVoteProps extends React.HTMLAttributes<HTMLDivElement> {
  docHref: string;
}

const FeedbackVote: React.FC<FeedbackVoteProps> = ({ docHref, ...props }) => {
  const [voted, setVoted] = useState<boolean>(
    localStorage.getItem("feedback-vote-" + docHref) === "voted"
  );
  const [liked, setLiked] = useState<boolean | null>(null);
  const [reasons, setReasons] = useState<string[]>([]);
  const [invalid, setInvalid] = useState<boolean>(false);

  const handleVote = (isLiked: boolean) => {
    setLiked(isLiked);
    if (isLiked) {
      setVoted(true);
      localStorage.setItem("feedback-vote-" + docHref, "voted");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setReasons([...reasons, value]);
      setInvalid(false);
    } else {
      setReasons(reasons.filter((reason) => reason !== value));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (reasons.length === 0) {
      setInvalid(true);
      return;
    }
    const formData = new FormData(e.currentTarget);
    const causes = formData.getAll("reason");
    const additionalComments = formData.get("additionalComments");
    console.log("Feedback submitted:", { liked, causes, additionalComments });
    setVoted(true);
    localStorage.setItem("feedback-vote-" + docHref, "voted");
    setLiked(null);
  };

  function VoteSurvey() {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="flex justify-center gap-2">
          <Button
            startContent={<LikeIcon size={20} />}
            color="primary"
            variant="ghost"
            size="sm"
            onClick={() => {
              setVoted(true);
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
              handleVote(false);
            }}
          >
            No
          </Button>
        </div>
      </div>
    );
  }

  function ThanksForFeedback() {
    return (
      <div className="text-center text-sm flex items-center justify-center gap-2">
        <CheckmarkIcon className="text-primary" size={16} />
        <span className="ms-1"> Thanks for your feedback</span>
      </div>
    );
  }

  return (
    <div className={props.className} {...props}>
      <Card>
        <Typography variant="body" textAlign="center" className="mb-3">
          Was this page helpful?
        </Typography>
        {voted ? <ThanksForFeedback /> : <VoteSurvey />}
        <Typography
          className="mt-2"
          variant="caption"
          color="secondary"
          textAlign="center"
        >
          Your feedback helps us improve our documentation
        </Typography>
      </Card>
      <Modal
        isOpen={liked === false}
        onClose={() => setLiked(null)}
        position="Center"
        size="md"
        dialogTitle="Submit feedback"
      >
        <Typography variant="body" className="mb-2">
          Why was this page not helpful to you?
        </Typography>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="hidden" name="reason" required />
          <div>
            <Checkbox
              className="me-2"
              name="reason"
              onChange={(e) => handleInputChange(e)}
              label="Missing information"
            />
            <Checkbox
              className="me-2"
              onChange={(e) => handleInputChange(e)}
              name="reason"
              label="Lack of examples"
            />
            <Checkbox
              className="me-2"
              name="reason"
              onChange={(e) => handleInputChange(e)}
              label="Code snippets not working"
            />
            <Checkbox
              className="me-2"
              name="reason"
              onChange={(e) => handleInputChange(e)}
              label="Hard to understand"
            />
            <Checkbox className="me-2" name="reason" label="Other" />
          </div>
          <TextArea
            variant="bordered"
            className="mt-2"
            placeholder="Additional comments (optional)"
          />
          {invalid && (
            <Typography variant="caption" color="danger">
              Please select at least one reason.
            </Typography>
          )}
          <div className="flex justify-end mt-4">
            <Button variant="ghost" type="submit" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default FeedbackVote;
