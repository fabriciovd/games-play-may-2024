import { useState } from "react";
import { useParams } from "react-router-dom";

import commentsApi from "../../api/comments-api";
import { useGetOneGames } from "../../hooks/useGames";

export default function GameDetails(props) {
  const { gameId } = useParams();
  const [game, setGame] = useGetOneGames(gameId);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const commentSubmitHandler = async (e) => {
    e.preventDefault();
    const newComment = await commentsApi.create(gameId, username, comment);
    setGame((prevState) => ({
      ...prevState,
      comments: {
        ...prevState.comments,
        [newComment._id]: newComment,
      },
    }));
    setUsername("");
    setComment("");
  };

  return (
    <>
      <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">
          <div className="game-header">
            <img className="game-img" src={game.imageUrl} />
            <h1>{game.title}</h1>
            <span className="levels">MaxLevel: {game.maxLevel}</span>
            <p className="type">{game.category}</p>
          </div>

          <p className="text">{game.summary}</p>

          <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
              {game.comments &&
                Object.values(game.comments).map((comment) => {
                  return (
                    <li className="comment" key={comment._id}>
                      <p>
                        {comment.username}: {comment.text}
                      </p>
                    </li>
                  );
                })}
            </ul>
            {/* {Object.keys(game.comments)} */}
            <p className="no-comment">No comments.</p>
          </div>

          <div className="buttons">
            <a href="#" className="button">
              Edit
            </a>
            <a href="#" className="button">
              Delete
            </a>
          </div>
        </div>

        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form" onSubmit={commentSubmitHandler}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <textarea
              name="comment"
              placeholder="Comment......"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            ></textarea>
            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>
      </section>
    </>
  );
}
