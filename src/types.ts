export type Language = 'ar' | 'en';

export interface Branch {
  id: string;
  nameAr: string;
  nameEn: string;
  regionAr: string;
  regionEn: string;
  addressAr: string;
  addressEn: string;
  phone: string;
  phoneSecondary?: string;
  timingAr: string;
  timingEn: string;
  coordinates: { x: number; y: number }; // percentage on stylized Oman map
  googleMapsUrl: string;
}

export interface ProductItem {
  id: string;
  category: 'kitchens' | 'wardrobes' | 'windows' | 'living';
  titleAr: string;
  titleEn: string;
  collectionAr: string;
  collectionEn: string;
  descriptionAr: string;
  descriptionEn: string;
  finishes: string[];
  featuresAr: string[];
  featuresEn: string[];
  style: string;
  warranty: string;
  image?: string;
}

export interface ReviewItem {
  id: string;
  authorAr: string;
  authorEn: string;
  branchAr: string;
  branchEn: string;
  rating: number;
  timeAr: string;
  timeEn: string;
  contentAr: string;
  contentEn: string;
  verified: boolean;
  avatarColor: string;
}

export interface CatalogPage {
  pageNumber: number;
  titleAr: string;
  titleEn: string;
  category: string;
  highlightAr: string;
  highlightEn: string;
}
