import { create } from 'zustand';
import { Category, Subcategory, Page } from '../types';

interface Store {
  categories: Category[];
  pages: Page[];
  addCategory: (category: Category) => void;
  updateCategory: (id: string, category: Partial<Category>) => void;
  deleteCategory: (id: string) => void;
  addSubcategory: (categoryId: string, subcategory: Subcategory) => void;
  updateSubcategory: (categoryId: string, id: string, subcategory: Partial<Subcategory>) => void;
  deleteSubcategory: (categoryId: string, id: string) => void;
  addPage: (page: Page) => void;
  updatePage: (id: string, page: Partial<Page>) => void;
  deletePage: (id: string) => void;
}

export const useStore = create<Store>((set) => ({
  categories: [],
  pages: [],
  addCategory: (category) =>
    set((state) => ({ categories: [...state.categories, category] })),
  updateCategory: (id, category) =>
    set((state) => ({
      categories: state.categories.map((c) =>
        c.id === id ? { ...c, ...category } : c
      ),
    })),
  deleteCategory: (id) =>
    set((state) => ({
      categories: state.categories.filter((c) => c.id !== id),
    })),
  addSubcategory: (categoryId, subcategory) =>
    set((state) => ({
      categories: state.categories.map((c) =>
        c.id === categoryId
          ? { ...c, subcategories: [...c.subcategories, subcategory] }
          : c
      ),
    })),
  updateSubcategory: (categoryId, id, subcategory) =>
    set((state) => ({
      categories: state.categories.map((c) =>
        c.id === categoryId
          ? {
              ...c,
              subcategories: c.subcategories.map((s) =>
                s.id === id ? { ...s, ...subcategory } : s
              ),
            }
          : c
      ),
    })),
  deleteSubcategory: (categoryId, id) =>
    set((state) => ({
      categories: state.categories.map((c) =>
        c.id === categoryId
          ? {
              ...c,
              subcategories: c.subcategories.filter((s) => s.id !== id),
            }
          : c
      ),
    })),
  addPage: (page) => set((state) => ({ pages: [...state.pages, page] })),
  updatePage: (id, page) =>
    set((state) => ({
      pages: state.pages.map((p) => (p.id === id ? { ...p, ...page } : p)),
    })),
  deletePage: (id) =>
    set((state) => ({ pages: state.pages.filter((p) => p.id !== id) })),
}));