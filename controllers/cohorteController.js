const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createCohorte = async (req, res) => {
    const { nom, date_debut, date_fin } = req.body;
    try {
        const cohorte = await prisma.cohorte.create({
            data: {
                nom,
                date_debut,
                date_fin,
            },
        });
        res.status(201).json(cohorte);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllCohorte = async (req, res) => {
    try {
        const cohorte = await prisma.cohorte.findMany();
        res.status(200).json(cohorte);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCohorteId = async (req, res) => {
    const { id } = req.params;

    try {
        const cohorte = await prisma.cohorte.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (!cohorte) {
            return res.status(404).json({ message: "cohorte non trouvé" });
        }

        res.status(200).json(cohorte);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCohorte = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedCohorte = await prisma.cohorte.update({
            where: { id: parseInt(id) },
            data: updates,
        });

        if (!updatedCohorte) {
            return res.status(404).json({ message: "cohorte non trouver" });
        }

        res.status(200).json(updatedCohorte);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCohorte = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteCohorte = await prisma.cohorte.delete({
            where: { id: parseInt(id) },
        });

        if (!deleteCohorte) {
            return res.status(404).json({ message: "cohorte not found" });
        }

        res.status(200).json({ message: "Cohorte supprimmer avec success!!" }); // Informative message
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
