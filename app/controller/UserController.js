
module.exports = {
    readUsers : async (req, res) => {
        res.json({ message: req.get('host') });
    },
    readUser : async (req, res) => {
        res.json({ message: req.get('host') });
    },
    createUser : async (req, res) => {
        res.json({ message: req.get('host') });
    },
    updateUser : async (req, res) => {
        res.json({ message: req.get('host') });
    },
    deleteUser : async (req, res) => {
        res.json({ message: req.get('host') });
    }

}