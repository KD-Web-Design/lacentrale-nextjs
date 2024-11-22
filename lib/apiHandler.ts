import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

// Helper type to extract Prisma model types
type PrismaModelKey = keyof Omit<
  PrismaClient,
  | "$connect"
  | "$disconnect"
  | "$on"
  | "$transaction"
  | "$use"
  | "$extends"
>;

type PrismaModel = {
    findMany: () => Promise<unknown[]>;
  };

export function createApiHandler<T extends PrismaModelKey>(modelName: T) {
  return async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
      try {
        // Type assertion to handle the dynamic model access
        const data = await (prisma[modelName] as PrismaModel).findMany();
        res.status(200).json(data);
      } catch (error) {
        console.error(`Error fetching ${String(modelName)}:`, error);
        res.status(500).json({ 
          error: `Erreur lors de la récupération des ${String(modelName)}`
        });
      }
    } else {
      res.status(405).json({ error: "Méthode non autorisée" });
    }
  };
}