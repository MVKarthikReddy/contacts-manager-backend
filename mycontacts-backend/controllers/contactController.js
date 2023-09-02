
const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel')

// @desc get all contacts
// @route GET /api/contacts/
// @access private
const getContacts = asyncHandler(async(req,res) => {
    console.log('body : ',req.body)
    const contacts = await Contact.find({user_id: req.user.id})
    res.status(200).json(contacts)
})


// @desc get a particular contact
// @route GET /api/contacts/:id
// @access private
const getContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact)
    {
        res.status(404)
        throw new Error("No Contacts found")
    }
    res.status(200).json(contact)
})



// @desc create a contact
// @route POST /api/contacts/
// @access private
const createContact = asyncHandler(async(req,res) => {
    const {name, email, phone} = req.body
    console.log(req.body)
    const contacts = await Contact.find({user_id: req.user.id})
    if(!name || !email || !phone)
    {
        res.status(400)
        throw new Error("All fields are mandatory!")

    }

    const contact = await Contact.create(
        {
            name,
            email,
            phone,
            user_id: req.user.id
        }
    )
    res.status(201).json(contact)
})


// @desc update a contact
// @route PUT /api/contacts/:id
// @access private
const updateContact = asyncHandler(async(req,res) => {

    const contact = await Contact.findById(req.params.id)
    if(!contact)
    {
        res.status(404)
        throw new Error("Contact not found")
    }

    if(contact.user_id.toString() !== req.user.id)
    {
        res.status(403)
        throw new Error("User don't have a permission to update the contact")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.status(200).json(updatedContact)
})


// @desc delete a contact
// @route DELETE /api/contacts/:id
// @access private
const deleteContact = asyncHandler(async (req,res) => {

    const contact = await Contact.findById(req.params.id)
    // console.log(contact)
    if(!contact)
    {
        res.status(404)
        throw new Error("Contact not found")
    }
    if(contact.user_id.toString() !== req.user.id)
    {
        res.status(403)
        throw new Error("User don't have a permission to delete the contact")
    }
    // console.log("hai")
    await Contact.findByIdAndDelete(
        req.params.id,
        req.body,
        { new:true }
    )
    console.log("hai")
    res.status(200).json(contact)
})

module.exports = {getContacts, getContact, createContact, updateContact, deleteContact}