import { Skill } from '../model/skill.js'

function index(req, res) {
  Skill.find({})
  .then(skills => { 
    res.render('skills/index', {
      skills: skills,
      time: req.time
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  req.body.done = false
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.skillId)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function edit(req, res) {
  Skill.findById(req.params.todoId)
  .then(skill => {
    res.render('skills/edit', {
      skill: skill
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function update(req, res) {
  req.body.done = !!req.body.done
  Skill.findByIdAndUpdate(req.params.todoId, req.body, {new: true})
  .then(skill => {
    res.redirect(`/skills/${skill._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  newSkill as new,
  create, 
  show, 
  deleteSkill as delete,
  edit, 
  update
}