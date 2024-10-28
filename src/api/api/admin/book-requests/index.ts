/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  get: {
    query?: {
      /** 書籍名での部分検索 */
      book_name?: string | undefined;
    } | undefined;

    status: 200;
    /** Book-requests are fetched */
    resBody: Types.Purchase_request;
  };
}>;
