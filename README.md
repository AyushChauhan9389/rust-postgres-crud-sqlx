# 📝 Full-Stack Notes Management Application

A modern, full-stack notes management application built with Rust and Next.js. Features a robust REST API backend and an elegant, responsive frontend interface.

## 🏗️ Tech Stack

### Backend
- **Rust** - Systems programming language
- **Actix-web** - Fast, pragmatic web framework
- **SQLx** - Async PostgreSQL toolkit
- **PostgreSQL** - Open source database

### Frontend
- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautifully designed components
- **TypeScript** - Type-safe JavaScript

## ✨ Features

- **RESTful API** with CRUD operations
- **Real-time updates**
- **Responsive UI** with dark/light mode
- **Category-based organization**
- **Pagination support**
- **Error handling**
- **Input validation**

## 🚀 API Endpoints

```
GET     /api/healthchecker     - Health check endpoint
GET     /api/notes            - List all notes (with pagination)
POST    /api/notes/           - Create a new note
GET     /api/notes/{id}       - Get a specific note
PATCH   /api/notes/{id}       - Update a note
DELETE  /api/notes/{id}       - Delete a note
```

## 📦 Backend Setup

1. Install Rust and PostgreSQL
2. Clone the repository
3. Create a `.env` file based on `.env.example`
4. Set up the database:
```bash
# Create the database
createdb your_database_name

# Run migrations
sqlx migrate run
```

5. Start the server:
```bash
cargo run
```

The server will start on `http://localhost:8000`

## 💻 Frontend Setup

1. Navigate to the frontend directory:
```bash
cd notesmanager
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The frontend will be available at `http://localhost:3000`

## 🗄️ Database Schema

```sql
CREATE TABLE notes (
    id UUID PRIMARY KEY NOT NULL DEFAULT (uuid_generate_v4()),
    title VARCHAR(255) NOT NULL UNIQUE,
    content TEXT NOT NULL,
    category VARCHAR(100),
    published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 📱 Frontend Features

- **Modern UI/UX**: Clean and intuitive interface
- **Theme Support**: Built-in dark and light mode
- **Responsive Design**: Works on all device sizes
- **Component Library**: Uses shadcn/ui for consistent design
- **App Directory**: Leverages Next.js 14's app router
- **Type Safety**: Full TypeScript integration

## 🔐 Environment Variables

### Backend (.env)
```
DATABASE_URL=postgresql://username:password@localhost:5432/dbname
```

### Frontend (.env)
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

## 🛠️ Development

The project uses modern development tools and practices:

- **Error Handling**: Comprehensive error handling with custom error types
- **CORS**: Configured for development and production
- **Logging**: Built-in request logging
- **Connection Pooling**: Efficient database connection management
- **Type Safety**: Strong typing throughout the application

## 🎯 Future Enhancements

- [ ] User authentication
- [ ] Note sharing capabilities
- [ ] Rich text editor
- [ ] Tags system
- [ ] Search functionality
- [ ] Export/Import features

## 📄 License

MIT License - feel free to use this project for your own purposes.
