const router = require('express').Router();
const { Student, Behavior } = require('../models');

router.get('/', async (req, res) => {
    const studentData = await Student.findAll().catch((err) => { 
        res.json(err);
      });
      // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it. 
      const students = studentData.map((student) => student.get({ plain: true }));
      // We render the template, 'all', passing in dishes, a new array of serialized objects.
      res.render('students', { students });
      });
//     try {
//         const studentData = await Student.findAll();
//         res.status(200).json(studentData)
//         // console.log(studentData)
//         const students = studentData.map((student) => student.get({ plain: true }));

//         // res.sendFile(path.join(__dirname, '../views/layouts/main.handlebars'));
//         res.render('students', {
//             students});

//     } catch (err) {
//     res.status(500).json(err);
//     }

// });

// router.get('/student/:id', async (req, res) => {
//     try {
//         const studentData = await Student.findByPk(req.params.id);
//         const student = studentData.get({ plain: true });

//         res.render('students', {
//         ...student,
//         })
//     } catch {
//         res.status(500).json(err);  
//     }
// });

module.exports = router;
