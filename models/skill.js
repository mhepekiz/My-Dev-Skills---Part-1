const skills = [
  {id: 1001, skill: 'PHP', icon: 'devicon-php-plain', years: 7, project: 'Yes', lastUsed: '2019', sample: 'http://www.hepekiz.com'},
  {id: 1002, skill: 'MySQL', icon: 'devicon-mysql-plain', years: 7, project: 'Yes', lastUsed: '2020', sample: 'http://www.doughnroll.com'},
  {id: 1003, skill: 'HTML5',icon: 'devicon-html5-plain', years: 7, project: 'Yes', lastUsed: '2020', sample: 'http://www.goncahepekiz.com'},
  {id: 1004, skill: 'Linux', icon: 'devicon-linux-plain', years: 3, project: 'Yes', lastUsed: '2015', sample: 'http://213.142.152.109:8880/'},
  {id: 1005, skill: 'Hosting Management', icon: 'devicon-amazonwebservices-original', lastUsed: '2020', project: 'Yes', years: 10, sample: 'http://213.142.152.109:8880/'},
  {id: 1006, skill: 'SSL',icon: 'devicon-yunohost-', years: 10, project: 'Yes', lastUsed: '2019', sample: 'http://www.doughnroll.com'},
  {id: 1007, skill: 'JS', icon: 'devicon-javascript-plain', years: 1, project: 'No', lastUsed: '2020', sample: 'https://github.com/mhepekiz/tic-tac-toe'},
  {id: 1008, skill: 'Node.js', icon: 'devicon-nodejs-plain', years: '<1', project: 'No', lastUsed: '2020', sample: 'Not Ready'},
  {id: 1009, skill: 'Express.js', icon: 'devicon-express-original', years: '<1', project: 'No', lastUsed: '2020', sample: 'Not Ready'},
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, updatedSkill) {
  const skill = skills.find(t => t.id === parseInt(id));
  Object.assign(skill, updatedSkill);
}



function getAll() {
  return skills;
}

function deleteOne(skillId) {
  const idx = skills.findIndex(skill => skill.id === parseInt(skillId));
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 10000;
  skills.push(skill);
}


function getOne(id) {
  return skills.find(skill => skill.id === parseInt(id));
}

