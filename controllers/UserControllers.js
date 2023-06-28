import User from "../Models/Users.js";

//login API
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all fields" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.password !== password) {
      res.status(401).json({ message: "Invalid password" });
      return;
    }
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
};

//Get API
const getUsers = async (req, res) => {
  const { role } = req.params;
  try {
    const users = await User.find({ role });
    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({ error });
  }
};

//Get One user API
const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
};

//Add API
const addUser = async (req, res) => {
  try {
    const { email, password, name, address, gender, role, phoneNumber } =
      req.body;
    if (
      !email ||
      !password ||
      !name ||
      !address ||
      !gender ||
      !role ||
      !phoneNumber
    ) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const user = await User.create({
      email,
      password,
      name,
      address,
      gender,
      role,
      phoneNumber,
    });
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
};

//Delete API
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
};

//Update API
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, name, address, gender, role, phoneNumber } = req.body;
  if (!email || !name || !address || !gender || !role || !phoneNumber) {
    return res.status(400).json({ message: "Please fill all fields" });
  }
  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export { loginUser, addUser, deleteUser, updateUser, getUsers, getUser };
