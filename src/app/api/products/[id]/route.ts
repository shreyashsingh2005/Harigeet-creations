import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    await prisma.product.delete({
      where: { id: resolvedParams.id }
    });
    return NextResponse.json({ message: "Product deleted" });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete product" }, { status: 500 });
  }
}