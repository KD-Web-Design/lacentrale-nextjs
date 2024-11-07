import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const marques = await prisma.marques.findMany();
      res.status(200).json(marques);
    } catch {
      res.status(500).json({ error: 'Erreur lors de la récupération des catégories' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}