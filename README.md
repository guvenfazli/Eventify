# Eventify

**Eventify** is a full-stack event management platform that allows users to explore, filter, and register for events while enabling admins to create and manage events efficiently.

# Tech Stack
**Frontend**

- React.js

- Next.js

- TypeScript

- Redux & Redux Persist

- Tailwind CSS

- Day.js

- ShadCN Components

**Backend**

- Node.js & Express.js

- PostgreSQL & Sequelize ORM

- Session-based authentication (stored in Database)

- Redis (for caching and optimization)

- Cache patterns: Write-through & Cache-aside

- Express Session

- 3rd Party API: Restcountries (for country listings)

## Key Features

### Authentication & Authorization
- **Session-based authentication**: Stored securely in the database.
- Users can explore events, while admins can create and manage them..

### Event Management
- Admins can create events using a multi-step form (Redux Persist ensures data persistence).
- Image upload support for event thumbnails.
- Event categories & types (Free or Ticketed events).
- Event preview before publishing.

### Event Discovery & Filtering
##### Users can filter events by:
- Date & Time
- Number of Interested Users
- Price
- Event Category
- Redis caching optimizes performance and reduces database queries.
- Interested Events: Users can mark events as "interested," stored efficiently using a write-through caching strategy.

### Ticket System & QR Code Invoice
- Users can purchase tickets for events.
- Form submission for ticket purchase (Name, Email, Phone).
- Invoices with QR Code Generation:
- Invoice includes event details & number of tickets purchased.
- QR Code directs to the event page.

### Event Validation & Security
- Past events are hidden from users.
- Backend date validation prevents users from accessing or modifying expired events.

### Authentication and Security
- **Session Management**: Secured with Express Session for reliable user authentication.
- **Input Validation**: Ensures secure and valid data submissions.

### Future Enhancements
- Payment Integration for ticket purchases.
- User Profiles & Dashboard to manage purchased tickets & interests.
- More Advanced Filtering & Search Features.

