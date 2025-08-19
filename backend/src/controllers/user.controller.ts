import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export async function listUsers(_req: Request, res: Response) {
  const users = await prisma.user.findMany();
  res.json(users);
}

export async function createUser(req: Request, res: Response) {
  try {
    const { email, name } = req.body as { email: string; name?: string };
    const user = await prisma.user.create({ data: { email, name } });
    res.status(201).json(user);
  } catch (err: unknown) {
    res.status(400).json({ error: (err as Error).message });
  }
}


