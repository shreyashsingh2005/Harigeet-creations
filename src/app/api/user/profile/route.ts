import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();
    const { name, phone, address, city, state, pincode } = data;

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name,
        phone,
        address,
        city,
        state,
        pincode,
      },
    });

    return NextResponse.json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Profile Update Error:", error);
    return NextResponse.json({ message: "Failed to update profile" }, { status: 500 });
  }
}
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    const user = await prisma.user.findUnique({ where: { email: session.user.email } });
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
