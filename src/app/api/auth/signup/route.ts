import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, password, otp } = await req.json();

    if (!name || !email || !password || !otp) {
      return NextResponse.json({ message: "All fields and OTP are required" }, { status: 400 });
    }

    // Verify OTP
    const verification = await prisma.verificationCode.findUnique({ where: { email } });
    if (!verification || verification.otp !== otp) {
      return NextResponse.json({ message: "Invalid OTP" }, { status: 400 });
    }
    if (new Date() > verification.expiresAt) {
      return NextResponse.json({ message: "OTP has expired" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userCount = await prisma.user.count();
    const role = userCount === 0 ? "ADMIN" : "USER";

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        emailVerified: new Date(),
      },
    });

    // Delete OTP after successful use
    await prisma.verificationCode.delete({ where: { email } });

    return NextResponse.json({ message: "User created successfully", user: { id: newUser.id, email: newUser.email, role: newUser.role } }, { status: 201 });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}