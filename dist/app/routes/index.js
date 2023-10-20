"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const booking_route_1 = require("../modules/Booking/booking.route");
const auth_route_1 = require("../modules/auth/auth.route");
const category_route_1 = require("../modules/category/category.route");
const event_route_1 = require("../modules/event/event.route");
const feedback_route_1 = require("../modules/feedback/feedback.route");
const reviewAndRating_route_1 = require("../modules/reviewAndRating/reviewAndRating.route");
const speaker_route_1 = require("../modules/speaker/speaker.route");
const user_route_1 = require("../modules/user/user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/categories',
        route: category_route_1.CategoryRoutes,
    },
    {
        path: '/events',
        route: event_route_1.EventRoutes,
    },
    {
        path: '/bookings',
        route: booking_route_1.BookingRoutes,
    },
    {
        path: '/review_rating',
        route: reviewAndRating_route_1.ReviewAndRatingRoutes,
    },
    {
        path: '/speakers',
        route: speaker_route_1.SpeakerRoutes,
    },
    {
        path: '/carts',
        route: speaker_route_1.SpeakerRoutes,
    },
    {
        path: '/feedbacks',
        route: feedback_route_1.FeedbackRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
