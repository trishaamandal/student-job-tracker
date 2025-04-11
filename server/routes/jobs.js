// import express from 'express';
// import Job from '../Models/job.js'; // Adjust the import path as necessary

// const router = express.Router();

// // CREATE
// router.post('/', async (req, res) => {
//     try {
//         const job = await Job.create(req.body);
//         res.status(201).json(job);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });

// // READ
// router.get('/', async (req, res) => {
//     try {
//         const jobs = await Job.find();
//         res.json(jobs);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // UPDATE
// router.put('/:id', async (req, res) => {
//     try {
//         const updated = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.json(updated);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });

// // DELETE
// // router.delete('/:id', async (req, res) => {
// //     try {
// //         await Job.findByIdAndDelete(req.params.id);
// //         res.status(200).json({ message: 'Job deleted successfully' });
// //     } catch (err) {
// //         res.status(500).json({ error: err.message });
// //     }
// // });
// router.delete('/:id', async (req, res) => {
//     console.log('Delete request for ID:', req.params.id); // ✅ Add this
//     try {
//         const deletedJob = await Job.findByIdAndDelete(req.params.id);
//         if (!deletedJob) {
//             return res.status(404).json({ message: 'Job not found' });
//         }
//         res.status(200).json({ message: 'Job deleted successfully' });
//     } catch (err) {
//         console.error('Delete error:', err.message); // ✅ Add this
//         res.status(500).json({ error: err.message });
//     }
// });
import express from 'express';
import Job from '../Models/job.js'; // ✅ FIXED: this points to your Job schema

export const router = express.Router(); // ✅ Use named export

// CREATE
router.post('/', async (req, res) => {
    try {
        const job = await Job.create(req.body);
        res.status(201).json(job);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// READ
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updated = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    console.log('Delete request for ID:', req.params.id); // ✅ Logging for debug
    try {
        const deletedJob = await Job.findByIdAndDelete(req.params.id);
        if (!deletedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (err) {
        console.error('Delete error:', err.message); // ✅ Logging for debug
        res.status(500).json({ error: err.message });
    }
});
