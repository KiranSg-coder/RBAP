
import UserModel from "../models/user.js"
const Getuser = async (req, res) => {
    try {
        const users = await UserModel.find()
        res.status(200).json({ users })
    } catch (error) {
        res.status(500).json({ message: "intenral server error" })
        console.log(error)
    }
}

const deletUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const userToDelete = await UserModel.findById(userId);

        // Prevent admin from deleting themselves
        if (req.user.role === 'admin' && userId === req.user._id.toString()) {
            return res.status(409).json({ message: "Admins cannot delete themselves" });
        }

        // Prevent deletion of a superadmin by an admin
        if (userToDelete.role === 'superadmin') {
            return res.status(403).json({ message: "Admins cannot delete a SuperAdmin" });
        }

        const deletedUser = await UserModel.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully", deletedUser });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.log(error);
    }
};

export { Getuser, deletUser }