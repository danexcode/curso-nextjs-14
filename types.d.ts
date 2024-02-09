interface ErrorPageProps {
  error: Error;
  reset: () => void
}

interface Collection {
  id: number;
  handle: string;
  title: string,
  updated_at: string,
  body_html: string,
  published_at: string,
  sort_order: string,
  template_suffix: string,
  disjunctive: false,
  rules: [ [Object] ],
  published_scope: string,
  admin_graphql_api_id: string
}

interface CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}


type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
};

interface Product { 
  id: number; 
  title: string; 
  body_html: string; 
  vendor: string; 
  product_type: string; 
  created_at: string; handle: 
  string; updated_at: string; 
  published_at: string; 
  template_suffix: null | string; 
  published_scope: string; tags: string; 
  status: string; admin_graphql_api_id: string; 
  variants: Array<{ /* Detalles de las opciones */ }>; 
  // Necesitarías definir el tipo para las opciones 
  images: Array<{ /* Detalles de las imágenes */ }>; 
  // Necesitarías definir el tipo para las imágenes 
  image: { 
    id: number; 
    alt: null | string; 
    position: number; 
    product_id: number; 
    created_at: string; 
    updated_at: string; 
    admin_graphql_api_id: string; 
    width: number; 
    height: number; 
    src: string; 
    variant_ids: number[]; 
  }; 
}

type CartItem = {
  title: string;
  price: number;
  quantity: number;
  id: string;
  image: string;
  merchandiseId: string;
}

interface Customer {
  id: number,
  email: string,
  role: string,
  firstName: string,
  lastName: string,
  phone: string,
  recoveryToken: string | null,
  createdAt: string,
  updatedAt: string
}

