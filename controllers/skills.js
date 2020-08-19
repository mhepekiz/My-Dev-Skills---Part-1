var express = require('express');
const router = express.Router();
 // require the Todo model
 const Skill = require('../models/skill');


 module.exports = {
    index,
    show
}
  
  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }


  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id), skillNum: req.params.id
    });
  }

  
