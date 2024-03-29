const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createCoach = async (req, res) => {
    const {
        nom,
        prenom,
        sexe,
        email,
        adresse,
        expertise,
        date_de_naissance,
        telephone,
    } = req.body;
    try {
        const coach = await prisma.coach.create({
            data: {
                nom,
                prenom,
                sexe,
                email,
                adresse,
                expertise,
                date_de_naissance,
                telephone,
            },
        });
        res.status(201).json(coach);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllCoach = async (req, res) => {
    try {
        const coach = await prisma.coach.findMany();
        res.status(200).json(coach);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCoachId = async (req, res) => {
    const { id } = req.params;

    try {
        const coach = await prisma.coach.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (!coach) {
            return res.status(404).json({ message: "coach non trouvé" });
        }

        res.status(200).json(coach);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCoach = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedCoach = await prisma.coach.update({
            where: { id: parseInt(id) },
            data: updates,
        });

        if (!updatedCoach) {
            return res.status(404).json({ message: "coach non trouver" });
        }

        res.status(200).json(updatedCoach);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCoach = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteCoach = await prisma.coach.delete({
            where: { id: parseInt(id) },
        });

        if (!deleteCoach) {
            return res.status(404).json({ message: "coach not found" });
        }

        res.status(200).json({ message: "coach supprimmer avec success!!" }); // Informative message
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
