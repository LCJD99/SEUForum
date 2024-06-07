const noticeRouter = require('express').Router()
const logger = require('../utils/logger')
const jwt = require('jsonwebtoken')
const Notice = require('../models/notice')
const Admin = require('../models/admin')

noticeRouter.get('/', async (request, response) => {
    const notice = await Notice.find({}).populate('admin', { adminname: 1 })
    response.json(notice.map(notice => notice.toJSON()))
  })

noticeRouter.post('/', async (request, response, next) => {
    const body = request.body

    const token = request.token
    const decodedToken = jwt.verify(token, process.env.SECRET)

    const admin = await Admin.findById(decodedToken.id)

    const notice = new Notice({
        title: body.title,
        url: body.url,
        admin: admin._id
    })

    try {
        const savedNotice = await Notice.save()
        logger.info(`added ${notice.title} to the notice list`)
        admin.notice = admin.notice.concat(savedNotice._id)
        await admin.save()
        logger.info(`notice linked to admin ${admin.adminname}`)
        response.json(savedAdmin.toJSON())
    } catch(exception) {
        next(exception)
    }
})

noticeRouter.delete('/:id', async (request, response, next) => {
    const token = request.token
    const decodedToken = jwt.verify(token, process.env.SECRET)

    const admin = await Admin.findById(decodedToken.id)

    const noticeToDelete = await Notice.findById(request.params.id)

    if ( noticeToDelete.admin._id.toString() === admin._id.toString() ) {
        try {
            await Admin.findByIdAndRemove(request.params.id)
            response.status(204).end()
          } catch (exception) {
            next(exception)
          }
    } else {
        return response.status(401).json({ error: `Unauthorized` })
    }
  })

noticeRouter.put('/:id', async (request, response, next) => {
    const body = request.body

    const token = request.token
    const decodedToken = jwt.verify(token, process.env.SECRET)
    const admin = await Admin.findById(decodedToken.id)

    const noticeToUpdate = await Notice.findById(request.params.id)

    if ( noticeToUpdate.admin._id.toString() === admin._id.toString() ) {
        const notice = {
            title: body.title,
            url: body.url,
        }

        try {
            const updatedNotice = await Notice.findByIdAndUpdate(request.params.id, notice, { new: true })
            logger.info(`notice ${notice.title} successfully updated`)
            response.json(updatedNotice.toJSON())
        } catch (exception) {
            next(exception)
        }
    } else {
        return response.status(401).json({ error: `Unauthorized` })
    }
})

module.exports = noticeRouter