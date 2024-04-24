const bcrypt = require('bcrypt')
const adminRouter = require('express').Router()
const Admin = require('../models/admin')

adminRouter.post('/', async (request, response) => {
  const body = request.body

  if (body.password.length < 3) {
    return response.status(400).json({ error: `Admin validation failed: adminname: Path password is shorter than the minimum allowed length (3)` })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const admin = new Admin({
    adminname: body.adminname,
    passwordHash,
  })

  const savedAdmin = await admin.save()

  response.json(savedAdmin)
})

adminRouter.get('/', async (request, response) => {
    const admin = await Admin.find({}).populate('notice', { url: 1, title: 1})
    response.json(admin.map(admin => admin.toJSON()))
  })

module.exports = adminRouter