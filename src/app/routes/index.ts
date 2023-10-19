import express from 'express';
import { BookingRoutes } from '../modules/Booking/booking.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { EventRoutes } from '../modules/event/event.route';
import { FeedbackRoutes } from '../modules/feedback/feedback.route';
import { ReviewAndRatingRoutes } from '../modules/reviewAndRating/reviewAndRating.route';
import { SpeakerRoutes } from '../modules/speaker/speaker.route';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/events',
    route: EventRoutes,
  },
  {
    path: '/bookings',
    route: BookingRoutes,
  },
  {
    path: '/review_rating',
    route: ReviewAndRatingRoutes,
  },
  {
    path: '/speakers',
    route: SpeakerRoutes,
  },
  {
    path: '/carts',
    route: SpeakerRoutes,
  },
  {
    path: '/feedbacks',
    route: FeedbackRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
