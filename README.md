# Property Finder Web Application

## Overview
This project is a **Property Finder Web Application** built using **React.js** and other modern web technologies. The application allows users to search for properties based on various criteria, view detailed property information, and manage a favorites list. This project was inspired by popular property listing websites and aims to provide an intuitive and visually appealing user experience.

## Features
- **Search Properties**:
  - Search by type, price, bedrooms, date added, and postcode.
  - Dynamic filtering with responsive results.
- **Property Details**:
  - High-quality main image and gallery with thumbnails.
  - Detailed information including price, type, bedrooms, bathrooms, and more.
  - Interactive tabs for description, floor plan, and Google Maps integration.
- **Favorites List**:
  - Add/remove properties to/from a favorites list.
  - View saved properties on the main search page.
  - Persistent favorites stored in the browser's local storage.
- **Responsive Design**:
  - Mobile-friendly layouts with media queries and grid/flexbox.
  - Tailored designs for large screens and smaller devices.
- **Security**:
  - Basic protection against client-side vulnerabilities using CSP and input sanitization.

## Tech Stack
- **Frontend**:
  - React.js
  - React Router DOM
  - React DnD (Drag and Drop functionality)
- **Styling**:
  - Tailwind CSS
  - Custom media queries for responsiveness
- **Data Management**:
  - JSON for property data
  - Local storage for persistent favorites

## Project Structure
```
src/
├── components/
│   ├── FavoritesList.jsx
│   ├── PropertyCard.jsx
│   ├── PropertyDetail.jsx
│   ├── PropertyList.jsx
│   ├── SearchForm.jsx
├── constants/
│   ├── DragTypes.js
├── data/
│   ├── properties.json
├── App.jsx
├── index.css
├── main.jsx
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/property-finder.git
   ```

2. Navigate to the project directory:
   ```bash
   cd property-finder
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

## Usage
1. **Search for Properties**:
   - Enter search criteria in the form on the main page.
   - View the filtered results dynamically.

2. **View Property Details**:
   - Click on a property card to view detailed information, a gallery of images, and additional tabs for floor plans and maps.

3. **Manage Favorites**:
   - Drag properties to the favorites section or click the favorite button.
   - Remove properties from favorites or clear all saved items.

## JSON Data Format
The property data is stored in a JSON file (`properties.json`) with the following structure:
```json
{
  "properties": [
    {
      "id": 1,
      "title": "Modern 3-Bed House with Garden",
      "price": 450000,
      "type": "house",
      "bedrooms": 3,
      "bathrooms": 2,
      "postcode": "SW1A 1AA",
      "image": "<main-image-url>",
      "dateAdded": "2024-12-15",
      "description": "<property-description>",
      "features": [
        "Feature 1",
        "Feature 2"
      ],
      "additionalFeatures": {
        "squareFootage": 1800,
        "plotSize": "0.25 acres"
      }
    }
  ]
}
```

## Future Enhancements
- Integration with a backend API for dynamic property data.
- Advanced filtering options, such as location-based search.
- User authentication for saving searches and managing favorites.
- Improved security measures and accessibility features.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
- Inspired by popular real estate platforms like Rightmove and Zillow.
- Special thanks to the contributors and testers of this project.

---
**Happy Coding!**
