import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from "react-router-dom";
import "./Tweet.css";

interface TweetProps {
  content: string;
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/GuiGubert.png" alt="Guilherme Gubert" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Guilherme Gubert</strong>
          <span>@gui_gubert</span>
        </div>
        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
          </button>
          <button type="button">
            <ArrowsClockwise />
          </button>
          <button type="button">
            <Heart />
          </button>
        </div>
      </div>
    </Link>
  );
}
