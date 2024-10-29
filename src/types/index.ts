export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  nameList: string[];
  categoryId: string;
}

export interface Page {
  id: string;
  title: string;
  content: string;
  slug: string;
}