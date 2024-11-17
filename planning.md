# Movie Search Website

## Overview
The Movie Search App is a React application that allows users to search for movies using the OMDb API database. Making it easy to look up valuable info about any movie. It features a user-friendly interface, secure API integration, and responsive design.

---

## Routes and Component Map

### Front-End Routes
| Route          | Component        | Description                                         |
|----------------|------------------|-----------------------------------------------------|
| `/`            | `App`           | Main entry point of the application. Renders `MovieSearch` and `MovieList`. |

---

### Back-End API Routes
| Route                | Method | Description                                    | Request Parameters      | Response                           |
|----------------------|--------|------------------------------------------------|-------------------------|------------------------------------|
| `/api/movies`        | `GET`  | Fetches movies matching the search query.      | `q` (string) - query    | JSON object of search results.    |

---

## Components

### 1. **App**
- **Description**: The root component. Manages state for search query and movie results.
- **Props**: None.
- **State**:
  - `movies` (array): Stores the fetched movies.
  - `query` (string): Stores the current search query.
- **Children**:
  - `MovieSearch`
  - `MovieList`

---

### 2. **MovieSearch**
- **Description**: Input form for users to search for movies.
- **Props**:
  - `onSearch` (function): Handles form submission to pass the query up to the `App` component.
- **State**:
  - `query` (string): Tracks input value.
- **Key Functionality**:
  - Calls the `onSearch` prop with the entered query.

---

### 3. **MovieList**
- **Description**: Displays a grid of `MovieCard` components based on the fetched movies.
- **Props**:
  - `movies` (array): Array of movie objects to display.
- **Children**:
  - `MovieCard`

---

### 4. **MovieCard**
- **Description**: Renders details of a single movie.
- **Props**:
  - `title` (string): Movie title.
  - `poster` (string): URL of the movie poster.
  - `year` (string): Year of release.

---

## Data Flow
1. **User Interaction**:
   - User types a movie title in the `MovieSearch` form and submits it.
   - `MovieSearch` calls the `onSearch` function in `App` with the search query.

2. **API Request**:
   - `App` uses the query to call the backend endpoint (`/api/movies?q=<query>`).
   - The backend forwards the request to the OMDb API and returns results.

3. **Rendering Results**:
   - `App` stores the results in the `movies` state.
   - The `MovieList` component renders a `MovieCard` for each movie in the `movies` array.

---

## API Plan

### Back-End Endpoint (Example, not final)
1. **`GET /api/movies`**
   - **Request**:
     - Query string: `q=<search-term>`
   - **Response**:
     ```json
     {
       "Search": [
         {
           "Title": "Inception",
           "Year": "2010",
           "imdbID": "tt1375666",
           "Type": "movie",
           "Poster": "https://example.com/poster.jpg"
         },
         ...
       ],
       "totalResults": "100",
       "Response": "True"
     }
     ```
   - **Error Response**:
     ```json
     {
       "Response": "False",
       "Error": "Movie not found!"
     }
     ```

---

## State and Props Diagram

| Component        | State                              | Props                   | Notes                           |
|------------------|------------------------------------|-------------------------|---------------------------------|
| `App`            | `movies`, `query`                 | None                    | Parent of all components.       |
| `MovieSearch`    | `query`                           | `onSearch`              | Handles user input.             |
| `MovieList`      | None                              | `movies`                | Renders movie cards.            |
| `MovieCard`      | None                              | `title`, `poster`, `year` | Displays individual movie data. |

---



