export interface Executive {
  name: string;
  role: string;
  image: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price?: string; //this is option cos they might request for a quote instead of a fixed price
  image: string;
  specs: ProductSpec[];
  features: string[];
  videos?: string[];
}