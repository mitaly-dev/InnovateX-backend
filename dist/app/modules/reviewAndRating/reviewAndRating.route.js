"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewAndRatingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const reviewAndRating_controller_1 = require("./reviewAndRating.controller");
const reviewAndRating_validation_1 = require("./reviewAndRating.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(reviewAndRating_validation_1.ReviewAndRatingValidation.create), reviewAndRating_controller_1.ReviewAndRatingCtrl.insertIntoDB);
router.get('/:id', reviewAndRating_controller_1.ReviewAndRatingCtrl.getAllData);
router.get('/:id', reviewAndRating_controller_1.ReviewAndRatingCtrl.getData);
router.patch('/:id', (0, validateRequest_1.default)(reviewAndRating_validation_1.ReviewAndRatingValidation.update), reviewAndRating_controller_1.ReviewAndRatingCtrl.updateData);
router.delete('/:id', reviewAndRating_controller_1.ReviewAndRatingCtrl.deleteData);
exports.ReviewAndRatingRoutes = router;
