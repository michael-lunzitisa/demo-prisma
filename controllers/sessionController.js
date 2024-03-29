const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createSession = async (req, res) => {
    const { nom, ville, duree, creneau, date, place_disponible, heure } =
        req.body;
    try {
        const session = await prisma.session.create({
            data: {
                nom,
                ville,
                duree,
                creneau,
                date,
                place_disponible,
                heure,
            },
        });
        res.status(201).json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllSession = async (req, res) => {
    try {
        const session = await prisma.coach.findMany();
        res.status(200).json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getSessionId = async (req, res) => {
    const { id } = req.params;

    try {
        const session = await prisma.session.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (!session) {
            return res.status(404).json({ message: "session non trouvé" });
        }

        res.status(200).json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateSession = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedSession = await prisma.session.update({
            where: { id: parseInt(id) },
            data: updates,
        });

        if (!updatedSession) {
            return res.status(404).json({ message: "session non trouver" });
        }

        res.status(200).json(updatedSession);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteSession = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteSession = await prisma.session.delete({
            where: { id: parseInt(id) },
        });

        if (!deleteSession) {
            return res.status(404).json({ message: "session not found" });
        }

        res.status(200).json({ message: "session supprimmer avec success!!" }); // Informative message
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
