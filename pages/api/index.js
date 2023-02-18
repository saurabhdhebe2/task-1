import User from '../../Models/userModel';
import dbConnect from '../../utils/dbConnect';

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const user = await User.find({});
        res.status(200).json({ succesful: true, data: user });
      } catch (error) {
        res.status(400).json({ succesful: false });
      }
      break;
    case 'POST':
      try {
        if (!req.body.name) {
          res.status(400).json({
            succesful: false,
            data: `Please Put the Name, Name field cannot be empty`,
          });
        } else if (!req.body.email) {
          res.status(400).json({
            succesful: false,
            data: `Please Put the E-mail, E-mail field cannot be empty`,
          });
        } else if (!req.body.email.includes('@' && '.')) {
          res.status(400).json({
            succesful: false,
            data: `Please Put Valid email`,
          });
        } else if (!req.body.phone) {
          res.status(400).json({
            succesful: false,
            data: `Please Put the Phone Number, Phone number field cannot be empty`,
          });
        }
        const user = await User.create(req.body);

        res.status(200).json({ succesful: true, data: user });
      } catch (error) {
        res.status(400).json({ succesful: false, data: error.message });
      }
      break;

    default:
      res.status(400).json({ successful: false });
      break;
  }
}
