import _ from 'lodash';
import React from 'react';

import { createIdFromTitle } from '../../helpers/utils';
import Loader from '../common/Loader';

interface INewsPageProps {
  history: [];
  location: {};
  match: {
    params: {
      id: string;
    };
  };
  data: never[];
}

interface INewsArticleProps {
  author: any;
  content: any;
  description: any;
  id: any;
  source: {};
  publishedAt: any;
  url: any;
  title: string;
}

interface IExtendedNewsItemProps {
  id: string;
  title: string;
  description: string;
  content: string;
  url: string;
}

const NewsArticlePage: React.FC<INewsPageProps> = (props) => {
  if (props.data && props.data.length) {
      const newArray = props.data.map((item: any) => {
        return {id: createIdFromTitle(item.title), ...item};
      });

      const newsObject = newArray.find((item: IExtendedNewsItemProps) => item.id === props.match.params.id) || {};

      if (_.isEmpty(newsObject)) {
        return <div>Sorry. Could not find the news article.</div>;
      }

      return (
        <div>
          <h2 className="page-title">{newsObject.title}</h2>
          <h5 className="news-page-description">{newsObject.description}</h5>
          <p className="news-page-content">{newsObject.content}</p>
          <p className="news-page-url"><a href={newsObject.url}>{newsObject.url}</a></p>
        </div>
      );
  }

  return <Loader />;

};

export default NewsArticlePage;
