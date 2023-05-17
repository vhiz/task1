import axios from "axios";

export const getUser = async (req, res) => {
  try {
    const userId = parseInt(req.query.userId);
    const url = "https://jsonplaceholder.typicode.com/users";

    const response = await axios.get(url);
    const users = response.data;

    let data;
    if (userId) {
      const filteredUser = users.filter((user) => user.id === userId);
      data = filteredUser;
    } else {
      data = users;
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
