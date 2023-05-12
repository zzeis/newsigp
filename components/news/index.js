import React, { useEffect, useState } from "react";
import axios from "axios";

function NewsComponent() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    var apiKey = "1dedd9779c69492b8f6b827b84be5334";
    var type = "iguape sp";
    var date = "2023-05-10";
    var sortBy = "publishedAt";
    const url = `https://newsapi.org/v2/everything?q=${type}&sortBy=${sortBy}&apiKey=${apiKey}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setNews(response.data.articles);
   
      } catch (error) {
        
      }
    };

    fetchData();

    
  }, []);

  return (
    <div className="news">
      <h2 className="text-3xl font-bold">Últimas notícias</h2>

      <ul className="p-2">
        {news.map((article) => (
          <li className="mt-1 list-none hover:bg-100 hover:bg-neutral-200" key={article.author}><a href={article.url} target="_blank">{article.title}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default NewsComponent;
