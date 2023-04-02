export type ResponseInfo = {
  count: number;
  pages: number;
  next: string; // Next url to search by page
  prev: string | null;
};
