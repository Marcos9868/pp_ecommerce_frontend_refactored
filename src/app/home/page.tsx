"use client"
import { Header } from "@/components/header";
import { Hero } from "@/components/heroBanner";
import { IProduct } from "@/components/productCard/types";
import { ProductGrid } from "@/components/productGrid";

const destaqueProdutos = [
  {
    id: "1",
    title: "Novo Tênis X",
    imageUrl: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
  },
  {
    id: "2",
    title: "Coleção Verão 2025",
    imageUrl: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
  },
];

const mockProducts: IProduct[] = [
  {
    id: '1',
    name: 'Camiseta Básica',
    imageUrl: 'https://images.pexels.com/photos/16069737/pexels-photo-16069737/free-photo-of-homem-modelo-jeans-preto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: 20,
    price: 79.90,
    categories: ['Masculino', 'Verão']
  },
  {
    id: '2',
    name: 'Tênis Esportivo',
    imageUrl: 'https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: 0,
    price: 299.99,
    categories: ['Esportes']
  },
  {
    id: '3',
    name: 'Calça Jeans',
    imageUrl: 'https://images.pexels.com/photos/603022/pexels-photo-603022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: 10,
    price: 149.99,
    categories: ['Masculino', 'Casual']
  },
  {
    id: '4',
    name: 'Camiseta Básica',
    imageUrl: 'https://images.pexels.com/photos/16069737/pexels-photo-16069737/free-photo-of-homem-modelo-jeans-preto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: 20,
    price: 79.90,
    categories: ['Masculino', 'Verão']
  },
  {
    id: '5',
    name: 'Tênis Esportivo',
    imageUrl: 'https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: 0,
    price: 299.99,
    categories: ['Esportes']
  },
  {
    id: '6',
    name: 'Calça Jeans',
    imageUrl: 'https://images.pexels.com/photos/603022/pexels-photo-603022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: 10,
    price: 149.99,
    categories: ['Masculino', 'Casual']
  },
];

export default function Home() {
  return(
    <main>
      <Header />
      <Hero products={destaqueProdutos}/>
      <ProductGrid products={mockProducts}/>
    </main>
  );
}