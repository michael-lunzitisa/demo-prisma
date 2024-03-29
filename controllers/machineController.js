const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createMachine = async (req, res) => {
    const { type, fabriquant, modele, numero_serie } = req.body;
    try {
        const machine = await prisma.machine.create({
            data: {
                type,
                fabriquant,
                modele,
                numero_serie,
            },
        });
        res.status(201).json(machine);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllMachine = async (req, res) => {
    try {
        const machine = await prisma.machine.findMany();
        res.status(200).json(machine);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getMachineById = async (req, res) => {
    const { id } = req.params;

    try {
        const machine = await prisma.machine.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (!machine) {
            return res.status(404).json({ message: "Machine non trouvé" });
        }

        res.status(200).json(machine);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateMachine = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedMachine = await prisma.machine.update({
            where: { id: parseInt(id) },
            data: updates,
        });

        if (!updatedMachine) {
            return res.status(404).json({ message: "Machine non trouver" });
        }

        res.status(200).json(updatedMachine);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteMachine = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedMachine = await prisma.machine.delete({
            where: { id: parseInt(id) },
        });

        if (!deletedMachine) {
            return res.status(404).json({ message: "Machine not found" });
        }

        res.status(200).json({ message: "Machine supprimmer avec success!!" }); // Informative message
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
