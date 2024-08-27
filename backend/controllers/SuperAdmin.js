
import UserModel from "../models/user.js";

const Getuser = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: "internal server error" });
        console.log(error);
    }
};

const deletUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const checkAdmin = await UserModel.findById(userId);

        if (checkAdmin.role === 'superadmin') {
            return res.status(409).json({ message: "You cannot delete another SuperAdmin." });
        }
        const user = await UserModel.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully", user });
    } catch (error) {
        res.status(500).json({ message: "internal server error" });
        console.log(error);
    }
};

const updateUserRole = async (req, res) => {
    try {
        const userId = req.params.id;
        const { role } = req.body;

        // Validating role
        if (!['admin', 'user'].includes(role)) {
            return res.status(400).json({ message: "Invalid role" });
        }

        const user = await UserModel.findByIdAndUpdate(userId, { role }, { new: true });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User role updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.log(error);
    }
};

export { Getuser, deletUser, updateUserRole };
