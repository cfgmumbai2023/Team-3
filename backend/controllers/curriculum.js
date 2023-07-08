const Curriculum = require('../models/Curriculum')

// Get courses by curriculum
const getCurriculums = async (req, res) => {
    const { cId } = req.params
    console.log('in get courses', cId)
    const curriculum = await Curriculum.findById(cId).populate('courses')
    console.log('curriculum', curriculum)
    res.status(200).send({
        data: curriculum
    });
}

/*
* Let curriculum be empty for now and append courses later
* {
*   name: string
* } 
*/
const postCurriculum = async (req, res) => {
    const { name } = req.body;
    const curriculum = await Curriculum.create({
        name,
        courses: []
    })
    res.status(201).send({
        curriculum
    })
};

const appendCourse = async (req, res) => {
    const { curId } = req.params;
    const { cId } = req.body;

    const curriculum = await Curriculum.findById(curId);
    curriculum.courses.push(cId);
    await curriculum.save();

    res.status(201).send({
        status: true
    })
}

module.exports = { getCurriculums, postCurriculum, appendCourse }