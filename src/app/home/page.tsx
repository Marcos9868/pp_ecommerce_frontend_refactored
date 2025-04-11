"use client"
import { Header } from "@/components/header";
import { Hero } from "@/components/heroBanner";

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

export default function Home() {
  return(
    <main>
      <Header />
      <Hero products={destaqueProdutos}/>
    </main>
  );
}