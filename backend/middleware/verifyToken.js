import jwt from 'jsonwebtoken'
import UserModel from '../models/user.js'

const isAdmin = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({ messsage: "'Unauthorized: No token provided'" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await UserModel.findById(decoded.userId)
        if (!user) {
            return res.status(401).json({ messsage: "'user not found'" })
        }

        if (user.role !== 'admin' && user.role !== 'superadmin') {
            return res.status(403).json({ message: 'Unauthorized: User is not an admin' });
        }
        req.user = user
        next()

    } catch (error) {
        console.log(error)
    }
}

const isSuperAdmin = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        if (user.role !== 'superadmin') {
            return res.status(403).json({ message: 'Unauthorized: User is not a super admin' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const isManager = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        if (user.role !== 'manager') {
            return res.status(403).json({ message: 'Unauthorized: User is not a manager' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};



const IsUser = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({ messsage: "'Unauthorized: No token provided'" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await UserModel.findById(decoded.userId)
        if (!user) {
            return res.status(401).json({ messsage: "'user not found'" })
        }
        req.user = user
        next()
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


export { isAdmin, isSuperAdmin, isManager, IsUser }