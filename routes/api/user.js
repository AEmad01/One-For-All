const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../../models/User')
const Admin = require('../../models/Admin')
const Lifecoach = require('../../models/lifecoach')
const Partner = require('../../models/Partner')
const Member = require('../../models/Member')
const tokenKey = require('../../config/keys').secretOrKey
const validator = require('../../validations/userValidations')


router.get("/", async (req, res) => {
    const users = await User.find();
    res.json({ data: users });
  })

  router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body
      const user = await User.findOne({ username })
      const isValidated = validator.createValidation(req.body)
      if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
      if (!user) return res.status(404).json({ username: 'Username does not exist' })
      match = password == user.password ? true : false
      if (match) {
        if(user.type === 'admin') {
          const payload = {
            id: user._id,
            name: user.name,
            username: user.username
          }
          const result =  await Admin.find({ _id: user.id })
          const name = result[0].name
          const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
          return res.json({token: `A ${token}`,userid: user.id,name: name})
        } else if( user.type === 'partner') {
            const payload = {
              id: user._id,
              name: user.name,
              username: user.username
            }
            const result = await Partner.find({_id: user.id})
            const name = result[0].name
            const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
            return res.json({token: `P ${token}`,userid: user.id,name: name})
        } else if( user.type === 'lifecoach') {
            const payload = {
              id: user._id,
              name: user.name,
              username: user.username
            }
            const result = await Lifecoach.find({_id: user.id})
            const name = result[0].name
            const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
            return res.json({token: `L ${token}`,userid: user.id,name: name})
        } else if( user.type === 'member') {
            const payload = {
              id: user._id,
              name: user.name,
              username: user.username
            }
            const result = await Member.find({_id: user.id})
            const name = result[0].name
            const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
            return res.json({token: `M ${token}`,userid: user.id, name: name})
        }
      }
      else return res.status(400).send({ password: 'Wrong password' });
    } catch (e) {
      console.log(e)
    }
  });

  router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deleteuser = await User.findByIdAndDelete(id)
     res.json({msg:'user was deleted successfully', data: deleteuser})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 });

module.exports = router;