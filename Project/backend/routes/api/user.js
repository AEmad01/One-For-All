const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../../models/User')
const tokenKey = require('../../config/keys').secretOrKey
const validator = require('../../validations/userValidations')


// Get all Admins
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
          const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
          return res.json({token: `A ${token}`})
        } else if( user.type === 'partner') {
            const payload = {
              id: user._id,
              name: user.name,
              username: user.username
            }
            const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
            return res.json({token: `P ${token}`})
        } else if( user.type === 'lifecoach') {
            const payload = {
              id: user._id,
              name: user.name,
              username: user.username
            }
            const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
            return res.json({token: `L ${token}`})
        } else if( user.type === 'member') {
            const payload = {
              id: user._id,
              name: user.name,
              username: user.username
            }
            const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
            return res.json({token: `M ${token}`})
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