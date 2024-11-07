# OneNews

**OneNews** is a fully functional news application built with React. It is designed to deliver real-time news across multiple categories with an attractive and intuitive user interface. The app utilizes infinite scrolling for seamless reading and features a top loading bar for visual feedback on loading. News content is fetched dynamically from the **News API** to provide users with the latest updates in categories like Entertainment, Science, General, Technology, and more.

## Features

- **Infinite Scrolling**: This feature enables continuous article loading as the user scrolls, creating a smooth and uninterrupted reading experience.
- **Top Loading Bar**: This bar shows loading progress at the top of the page to improve user feedback while news articles are being fetched.
- **Dynamic Categories**: Allows users to browse news by category, including:
  - Entertainment
  - Science
  - General
  - Technology
  - And more
- **Attractive UI**: Provides a clean and engaging interface with responsive design.
- **Real-Time News**: Fetches the latest news articles from the News API, ensuring fresh content for users.

## Demo
<!-- Add a screenshot of your app here -->
![image1](https://github.com/user-attachments/assets/88c503da-c30d-42df-aa84-0cc834a91d95)

https://github.com/user-attachments/assets/92e7ce15-db00-494f-8d93-470249b90d26
#

## Prerequisites

- **News API Key**: Sign up at [News API](https://newsapi.org/) to obtain an API key. You'll need this key to fetch news data from the API.

## Installation

1. **Clone the repository** to your local machine:

   ```bash
   git clone https://github.com/AmanSahu13/OneNews.git
   cd OneNews
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory of the project.
   - Add your News API key to the `.env` file like this:

     ```plaintext
     REACT_APP_NEWS_API_KEY=your_news_api_key
     ```

4. **Start the development server**:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Usage

1. **Browse News by Category**:
   - Use the navigation bar to select different news categories, such as Entertainment, Science, General, and Technology.

2. **Infinite Scrolling**:
   - As you scroll through articles, additional content loads automatically, so you can keep reading without needing to click "Next".

3. **Top Loading Bar**:
   - A loading bar at the top of the screen shows the loading progress as new articles are fetched.

## Technologies Used

- **React** - For building the user interface and handling component logic.
- **CSS** - For styling the application.
- **JavaScript** - For functionality and data fetching.
- **News API** - To fetch real-time news content.

## Contributing

Contributions are welcome! If you'd like to suggest an improvement or report an issue, feel free to submit a pull request or open an issue in this repository.

## License

This project is licensed under the MIT License.

