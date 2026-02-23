const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '../data/data.json');

exports.renderDashboard = (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
    res.render('dashboard', { tasks: data.tasks });
};

exports.addTask = (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));

    const newTask = {
        id: Date.now(),
        title: req.body.taskTitle,
        status: "To Do"
    };

    data.tasks.push(newTask);
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
    res.redirect('/dashboard');
};