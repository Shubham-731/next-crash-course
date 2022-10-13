import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const Article = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  );
};

export default Article;
