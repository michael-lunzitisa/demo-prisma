const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createApprenant = async (req, res) => {
    const {
        matricule,
        prenom,
        sexe,
        nom,
        postnom,
        date_de_naissance,
        adresse,
        email,
        telephone,
        machineId,
        sessionId,
        cohorteId,
    } = req.body;
    try {
        const apprenant = await prisma.apprenant.create({
            data: {
                matricule,
                prenom,
                sexe,
                nom,
                postnom,
                date_de_naissance,
                adresse,
                email,
                telephone,
                machineId,
                sessionId,
                cohorteId,
            },
        });
        res.status(201).json(apprenant);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllApprenant = async (req, res) => {
    try {
        const apprenant = await prisma.apprenant.findMany();
        res.status(200).json(apprenant);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getApprenantId = async (req, res) => {
    const { id } = req.params;

    try {
        const apprenant = await prisma.apprenant.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (!apprenant) {
            return res.status(404).json({ message: "apprenant non trouvé" });
        }

        res.status(200).json(apprenant);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateApprenant = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updateApprenant = await prisma.apprenant.update({
            where: { id: parseInt(id) },
            data: updates,
        });

        if (!updateApprenant) {
            return res.status(404).json({ message: "apprenant non trouver" });
        }

        res.status(200).json(updateApprenant);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteApprenant = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteApprenant = await prisma.apprenant.delete({
            where: { id: parseInt(id) },
        });

        if (!deleteApprenant) {
            return res.status(404).json({ message: "apprenant not found" });
        }

        res.status(200).json({
            message: "apprenant supprimmer avec success!!",
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
