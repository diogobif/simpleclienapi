import express from 'express';
import {getBlocks, getInfoByHash} from '../controllers/block';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await getBlocks();
        res.status(200).json({response});
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
    }
});


router.get('/detail/:blockHash', async (req, res) => {
    try {
        const blockHash = req.params.blockHash;
        if (blockHash) {
            const response = await getInfoByHash(blockHash);
            res.status(200).json({response});
        } else {
            res.status(404).json({error: {
                message: 'Invalid params.'
            }});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
    }
});

export default router;