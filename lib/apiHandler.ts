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

interface WhereClause {
  marque_id?: {
    in: number[];
  };
}

type PrismaModel = {
  findMany: (options?: { where?: WhereClause }) => Promise<unknown[]>;
  };

// apiHandler.ts
export function createApiHandler<T extends PrismaModelKey>(modelName: T) {
  return async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
      try {
        const { marque_id } = req.query;
        const where = marque_id 
          ? {
              marque_id: {
                in: (marque_id as string).split(',').map(id => parseInt(id))
              }
            }
          : {};
        
        const data = await (prisma[modelName] as PrismaModel).findMany({
          where
        });
        res.status(200).json(data);
      } catch (error) {
        console.error(`Error fetching ${String(modelName)}:`, error);
        res.status(500).json({ error: `Erreur lors de la récupération des ${String(modelName)}` });
      }
    } else {
      res.status(405).json({ error: "Méthode non autorisée" });
    }
  };
}