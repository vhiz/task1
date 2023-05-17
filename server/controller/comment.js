import axios from "axios";

export const getComments = async (req, res) => {
  try {
    const limit = req.query.limit;
    const postId = parseFloat(req.query.postId);
    const url = "https://jsonplaceholder.typicode.com/comments";

    const response = await axios.get(url);
    const comments = response.data;

    let data;
    if (postId) {
      const filteredComments = comments.filter(
        (comment) => comment.postId === postId
      );
      data = filteredComments.slice(0, limit);
    } else {
      data = comments.slice(0, limit);
    }

    return res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
