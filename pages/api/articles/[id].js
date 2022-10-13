import { articles } from "../../../data";

export default function handler(req, res) {
  const { id } = req.query;
  const filteredArticle = articles.filter((article) => article.id === id);

  if (filteredArticle.length > 0) {
    res.status(200).json(filteredArticle);
  } else {
    res.status(404).json({ msg: "Article not found!" });
  }
}
