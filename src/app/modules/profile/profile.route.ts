import express from 'express';
import { ProfileCtrl } from './profile.controller';
const router = express.Router();

router.get('/', ProfileCtrl.getProfile);

export const ProfileRoutes = router;
