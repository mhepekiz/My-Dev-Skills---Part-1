var Skill = require('../models/skill');



 module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}


function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  console.log("req.body", req.body);
  // The model is responsible for CRUD'ing data
  Skill.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new');
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

  
