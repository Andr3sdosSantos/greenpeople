import User from '../models/User';

class UserController {
  async create(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, name, email, boss } = await User.create(req.body);

    return res.json({
      user: {
        id,
        name,
        email,
        boss,
      },
    });
  }
}

export default new UserController();
