![Screenshot 2025-05-01 at 2 26 35 PM](https://github.com/user-attachments/assets/651816f1-4037-4e17-8119-934d83671a57)
# 🎬 Movie Cards Application

A responsive React application that displays a collection of movie cards with details using Bootstrap for styling. Features include real-time search, detailed movie views, movie management capabilities, and theme switching.

![Movie Cards Screenshot](![Uploading Screenshot 2025-05-01 at 2.26.35 PM.png…])


## ✨ Features

- **Responsive Design**: Works seamlessly on all device sizes
- **Movie Cards**: Displays movie information in attractive card format
- **Real-time Search**: Search movies as you type
- **Detailed Movie Views**: Dedicated pages for each movie's full details
- **Movie Management**: Remove movies from your collection
- **Bootstrap Styling**: Modern UI with React Bootstrap components
- **Dark/Light Mode**: Toggle between dark and light themes
- **Live API Integration**: Fetches real movie data from TMDB API
- **Category Filtering**: Filter movies by genre categories
- **Interactive Elements**: 
  - Hover effects on cards
  - Navigation buttons
  - Search functionality
  - Delete capabilities
  - Theme toggle

## 🚀 Technologies Used

- React.js
- React Router DOM
- React Bootstrap
- Bootstrap 5
- CSS3
- JavaScript (ES6+)
- Context API for state management
- TMDB API for movie data

## 🛠 Installation & Setup

1. Clone the repository:
   ```bash
   git clone [https://github.com/mahmoudadel810/MoviesFromApi.git]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 📱 Responsive Design

The application is fully responsive and works on:
- 📱 Mobile devices
- 💻 Tablets
- 🖥️ Desktop computers

## 🧩 Components

### Navbar
- Application title
- Real-time search functionality
- Theme toggle (🌙/☀️)
- Responsive design

### MovieCard
Displays individual movie information including:
- Movie title
- Movie poster image
- Release date
- Rating
- Movie description
- View Details button
- Remove button

### MoviesList
- Arranges multiple MovieCard components in a responsive grid layout
- Handles movie filtering based on search
- Manages movie deletion
- Displays loading state while fetching data

### MovieDetails
Dedicated page showing comprehensive movie information:
- Full-size movie poster
- Complete movie details
- Rating information
- Release date
- Category badge
- Navigation back to main list

### CategoryFilter
- Displays all available movie categories
- Allows filtering movies by category
- Highlights the currently selected category

## 📊 Data Structure

Each movie object contains:

```javascript
{
  id: 550,
  title: "Fight Club",
  details: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club...",
  date: "1999-10-15",
  image: "https://image.tmdb.org/t/p/w500/path/to/poster.jpg",
  rating: 8.8,
  category: "Drama"
}
```

## 🔍 Features In Detail

### API Integration
- Fetches movie data from The Movie Database (TMDB) API
- Transforms API data to match application structure
- Handles loading and error states

### Theme Switching
- Toggle between light and dark themes
- Theme preference is saved in local storage
- Default theme based on system preference

### Search Functionality
- Real-time character-by-character search
- Instant results display
- Searches within movie titles

### Category Filtering
- Dynamic category list based on available movie genres
- One-click filtering
- Combined with search for refined results

### Movie Management
- View detailed information for each movie
- Remove movies from the collection
- Navigate between views

### Routing
- Dynamic routing for movie details
- Clean URLs with React Router
- Smooth navigation between pages

## 🔄 Future Enhancements

- Add movie creation functionality
- Implement filtering by year or rating
- Add user authentication
- Integrate with additional movie APIs
- Add favorite movies feature
- Implement user reviews and ratings
- Add trailer playback functionality
- Implement infinite scroll for movie list

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🤝 Support

For support, email [ma.adel.810@gmail.com] or open an issue in the repository.
