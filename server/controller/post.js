import axios from "axios";

export const getPosts = async (req, res) => {
  try {
    const limit = req.query.limit;
    const userId = parseFloat(req.query.userId);
    const url = "https://jsonplaceholder.typicode.com/posts";

    const response = await axios.get(url);
    const posts = response.data;

    let data;
    if (userId) {
      const filteredPosts = posts.filter((post) => post.userId === userId);
      data = filteredPosts.slice(0, limit);
    } else {
      data = posts.slice(0, limit);
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
