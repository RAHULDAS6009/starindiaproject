# Star India Entertainment

Production-grade web platform with Web App, Admin Panel, and Backend API.

## 🏗️ Architecture

- **Web App**: Next.js 14 (App Router) - Port 3000
- **Admin Panel**: Next.js 14 (App Router) - Port 3002
- **Backend API**: Node.js + Express + TypeScript - Port 3001
- **Database**: PostgreSQL + Prisma ORM
- **Architecture**: Strict MVC (Routes → Controllers → Services → Models)

## 🎨 Design Tokens

### Colors
- **Primary**: `#C4161C` (Royal Red)
- **Secondary**: `#D4AF37` (Gold)
- **Dark Base**: `#0E0E0E`
- **Background**: `#161616`
- **Text White**: `#FFFFFF`
- **Text Muted**: `#9A9A9A`
- **CTA Hover**: `#FFD700` (Gold Glow)

### Typography
- **Headings**: Playfair Display / Cinzel
- **Body**: Inter / Poppins
- **Buttons**: Poppins SemiBold

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- PostgreSQL 15+
- Docker & Docker Compose (optional)

### Setup

1. **Clone and install dependencies:**

```bash
npm install
```

2. **Set up environment variables:**

```bash
# API
cp apps/api/.env.example apps/api/.env
# Edit apps/api/.env with your values
```

3. **Set up database:**

```bash
# Generate Prisma Client
npm run db:generate

# Run migrations
npm run db:migrate

# Seed database
npm run db:seed
```

4. **Start development servers:**

```bash
# Start all apps
npm run dev

# Or start individually:
cd apps/api && npm run dev    # API on :3001
cd apps/web && npm run dev    # Web on :3000
cd apps/admin && npm run dev  # Admin on :3002
```

## 🐳 Docker Setup

```bash
# Start PostgreSQL and API
docker-compose up -d

# Run migrations
docker-compose exec api npm run db:migrate

# Seed database
docker-compose exec api npm run db:seed
```

## 📁 Project Structure

```
star-india-entertainment/
├── apps/
│   ├── api/              # Backend API
│   │   ├── src/
│   │   │   ├── routes/   # Route definitions
│   │   │   ├── controllers/  # Request handlers
│   │   │   ├── services/     # Business logic
│   │   │   ├── models/       # Database access
│   │   │   ├── middlewares/  # Auth, RBAC, validation
│   │   │   └── utils/        # Helpers
│   │   └── prisma/       # Prisma schema & migrations
│   ├── web/              # Web App (Next.js)
│   └── admin/            # Admin Panel (Next.js)
├── docker-compose.yml
└── package.json
```

## 🔐 Authentication

JWT-based authentication with refresh tokens.

### Demo Credentials (after seeding):

- **Super Admin**: `admin@starindia.com` / `Admin@123`
- **Sub Admin**: `subadmin@starindia.com` / `SubAdmin@123`
- **Artist**: `artist@demo.com` / `Artist@123`
- **Production**: `production@demo.com` / `Production@123`
- **User**: `user@demo.com` / `User@123`

## 🛡️ RBAC Roles

- `GENERAL_USER` - Post, comment, like, follow, view OTT
- `ARTIST` - Portfolio, apply for casting, verified badge, chat
- `PRODUCTION` / `CASTING` - Post castings, shortlist artists, payments
- `ADMIN` - Sub admin (permission-based)
- `SUPER_ADMIN` - Full access

## 📡 API Endpoints

### Auth
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `POST /api/auth/refresh` - Refresh access token

### User
- `GET /api/user/profile/:id` - Get user profile
- `PUT /api/user/profile/update` - Update profile
- `POST /api/user/follow/:userId` - Follow user
- `POST /api/user/unfollow/:userId` - Unfollow user

### Admin
- `GET /api/admin/dashboard` - Dashboard KPIs
- `GET /api/admin/users` - List users
- `POST /api/admin/content/approve` - Approve/reject content
- `POST /api/admin/payments/approve` - Approve/reject payment
- `GET /api/admin/audit` - Get audit logs (supports date range filters)

## 🔧 Environment Variables

### API (`apps/api/.env`)

```env
NODE_ENV=development
PORT=3001
DATABASE_URL=postgresql://user:password@localhost:5432/star_india_db
JWT_SECRET=your-secret-key-minimum-32-characters
JWT_REFRESH_SECRET=your-refresh-secret-minimum-32-characters
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:3000,http://localhost:3002
CDN_BASE_URL=https://cdn.starindia.com
FIREBASE_SERVER_KEY=your-firebase-key
ONESIGNAL_APP_ID=your-onesignal-app-id
ONESIGNAL_API_KEY=your-onesignal-api-key
```

## 📊 Database Schema

Key models:
- `User` - Users with roles
- `Post` / `Reel` - Content posts
- `Comment` - Post comments
- `Like` - Likes on posts/comments
- `Follow` - User follows
- `Casting` - Casting opportunities
- `CastingApplicant` - Applications
- `Payment` - Payment transactions
- `AuditLog` - Immutable admin audit trail

See `apps/api/prisma/schema.prisma` for full schema.

## 🧪 Development

```bash
# Generate Prisma Client
npm run db:generate

# Create migration
cd apps/api && npx prisma migrate dev --name migration_name

# Open Prisma Studio
npm run db:studio
```

## 📝 Notes

- All admin actions create immutable audit logs
- CDN URLs are stored, not files (S3-compatible)
- Notification services (Firebase/OneSignal) are design hooks only
- Socket.IO ready for realtime chat (to be implemented)
- Rate limiting on auth, uploads, and interactions

## 🚢 Deployment

1. Build all apps: `npm run build`
2. Set production environment variables
3. Run database migrations
4. Start services

## 📄 License

Private - Star India Entertainment

