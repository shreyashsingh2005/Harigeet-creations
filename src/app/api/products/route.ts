import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" }
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Calculate discount if price < mrp
    let discount = 0;
    if (data.price < data.mrp) {
      discount = Math.round(((data.mrp - data.price) / data.mrp) * 100);
    }

    const newProduct = await prisma.product.create({
      data: {
        name: data.name,
        category: data.category,
        price: data.price,
        mrp: data.mrp,
        discount: discount > 0 ? discount : null,
        image: data.image,
        isNew: true
      }
    });
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("POST product error:", error);
    return NextResponse.json({ message: "Failed to create product" }, { status: 500 });
  }
}