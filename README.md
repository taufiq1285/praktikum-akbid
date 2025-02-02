# Praktikum AKBID Web Application

## 📋 Overview
Aplikasi web untuk manajemen praktikum AKBID dengan fitur pembelajaran online, upload tugas, dan penilaian. Dibangun menggunakan React.js, Firebase, dan Cloudinary.

## 🚀 Features
- 🔐 Autentikasi multi-role (Admin, Dosen, Mahasiswa)
- 📚 Manajemen modul pembelajaran
- 📝 Sistem upload dan manajemen tugas
- 📊 Penilaian dan laporan hasil belajar
- 📱 Progressive Web App (PWA) support
- 🔄 Mode offline dan sinkronisasi data

## 🏗️ Project Structure
```
praktikum-akbid/
├── public/                  # Static files
├── src/
│   ├── assets/             # Images, styles, etc.
│   ├── components/         # Reusable components
│   │   ├── shared/         # Shared UI components
│   │   └── features/       # Feature-specific components
│   ├── config/             # App configurations
│   ├── contexts/           # React contexts
│   ├── features/           # Main feature modules
│   ├── hooks/              # Custom React hooks
│   ├── layouts/            # Page layouts
│   ├── lib/               # Core libraries
│   ├── pages/             # Page components
│   ├── pwa/               # PWA configurations
│   ├── services/          # API services
│   └── utils/             # Utility functions
└── ...
```

## 🛠️ Technology Stack
- **Frontend:** React.js, TailwindCSS
- **Backend:** Firebase (Authentication, Firestore)
- **File Storage:** Cloudinary
- **PWA:** Workbox
- **State Management:** React Context
- **Testing:** Jest, React Testing Library

## 🔧 Setup & Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- Cloudinary account

### Environment Variables
Create `.env` file in root directory:
```env
# Firebase Configuration
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Cloudinary Configuration
REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
REACT_APP_CLOUDINARY_API_KEY=your_api_key
```

### Installation Steps
1. Clone repository:
   ```bash
   git clone https://github.com/yourusername/praktikum-akbid.git
   ```

2. Install dependencies:
   ```bash
   cd praktikum-akbid
   npm install
   ```

3. Start development server:
   ```bash
   npm start
   ```

### Production Build
```bash
npm run build
```

## 🌐 PWA Support
- Offline-first architecture
- Installable on mobile devices
- Background sync for offline actions
- Asset caching strategies

## 👥 User Roles
1. **Admin**
   - User management
   - System settings
   - Reports generation

2. **Dosen**
   - Course management
   - Assignment creation
   - Grading

3. **Mahasiswa**
   - Access learning materials
   - Submit assignments
   - View grades

## 📝 Development Guidelines
- Follow consistent naming conventions
- Component-based architecture
- Write unit tests for critical features
- Use TypeScript for type safety
- Follow ESLint and Prettier configurations

## 🔒 Security
- Firebase Authentication
- Role-based access control
- Secure file uploads
- Data validation
- Environment variable protection

## 🤝 Contributing
1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License
MIT License - see LICENSE.md

## 👤 Authors
- Your Name
- Contributors

## 🙏 Acknowledgments
- Firebase
- Cloudinary
- React.js Community
- TailwindCSS Team