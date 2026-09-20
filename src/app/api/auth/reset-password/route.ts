export const dynamic = 'force-dynamic';
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, otp, newPassword } = await req.json();

    if (!email || !otp || !newPassword) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const verificationRecord = await prisma.verificationCode.findUnique({
      where: { email },
    });

    if (!verificationRecord) {
      return NextResponse.json({ message: "No verification code requested" }, { status: 400 });
    }

    if (verificationRecord.otp !== otp) {
      return NextResponse.json({ message: "Invalid OTP code" }, { status: 400 });
    }

    if (new Date() > verificationRecord.expiresAt) {
      return NextResponse.json({ message: "OTP has expired. Please request a new one." }, { status: 400 });
    }

    // OTP is valid, hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user password
    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    // Delete OTP record
    await prisma.verificationCode.delete({ where: { email } });

    return NextResponse.json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Reset Error:", error);
    return NextResponse.json({ message: "Failed to reset password" }, { status: 500 });
  }
}