"use client";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const params = useParams(); // Get dynamic route parameters
  const productId = params?.productId || "Unknown"; // Fallback if undefined

  return <>Details about product {productId}</>;
}
