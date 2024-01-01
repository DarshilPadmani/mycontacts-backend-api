const asyncHandler = require("express-async-handler");
const Contact = require("../modles/contactModel");
//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContact = asyncHandler(async(req, res)=>{
    const contacts = await Contact.find();
    res.status(200).json({message: "Get all contacts"});
});

//@desc Create new contact
//@route Create /api/contact
//@access public

const createContact = asyncHandler(async(req, res)=>{
    console.log("The request body is: ",req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({message: "Create contacts"});
});

//@desc Get new contact
//@route GET /api/contact/:id
//@access public

const getContacts = asyncHandler(async(req, res)=>{
    res.status(200).json({message: `Get contacts for ${req.params.id}`});
});

//@desc update new contact
//@route PUT /api/contact/:id
//@access public

const updateContact = asyncHandler(async(req, res)=>{
    res.status(200).json({message: `Update contacts for ${req.params.id}`});
});

//@desc Delete new contact
//@route DELETE /api/contact/:id
//@access public

const deleteContact = asyncHandler(async(req, res)=>{
    res.status(200).json({message: `Delete contacts for ${req.params.id}`});
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};