import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const nbportes = await prisma.nbPortes.findMany();
      res.status(200).json(nbportes);
    } catch {
      res.status(500).json({ error: 'Erreur lors de la récupération des catégories' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}