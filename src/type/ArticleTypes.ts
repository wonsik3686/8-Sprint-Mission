import { OptionalPick } from '../lib/utils/OptionalPick';
import { BasicType } from './BasicTypes';

export type Article = OptionalPick<
  BasicType,
  | 'updatedAt'
  | 'createdAt'
  | 'writer'
  | 'title'
  | 'content'
  | 'image'
  | 'likeCount',
  'id'
>;

export type ArticleListResponse = Pick<BasicType, 'totalCount'> & {
  list: Article[];
};

export type ArticleOrderBy = 'recent' | 'like';

export type ArticleListRequest = Pick<
  BasicType,
  'page' | 'pageSize' | 'keyword'
> & { orderBy: ArticleOrderBy };

export type AddArticleRequest = Pick<Article, 'image' | 'content' | 'title'>;

export type ArticleDetailResponse = Article & Pick<BasicType, 'isLiked'>;

export type ArticleDetailRequest = { articleId: number };

export type AddArticleCommentRequest = Pick<BasicType, 'content'>;

export type ArticleComment = Pick<
  BasicType,
  'writer' | 'updatedAt' | 'createdAt' | 'content' | 'id'
>;
