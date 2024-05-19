# Learn - Next.js

This application is built using Next.js, leveraging the practical insights and tutorials from [The Net Ninja’s Next.js playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw).

![Application Demo](/demo.gif)


## Instructions to run the application
Follow these instructions to get the application running:
1. Install Node.js version 14.21.3:
   - `nvm install v14.21.3`
   - `nvm use v14.21.3`
2. Install necessary packages:
   - `npm install`
3. Start the application:
   - To run the project : `npm run dev`


## CSS Styling Options in Next.js
There are several methods to handle CSS in your Next.js projects:
- **Global Stylesheet**: Standard CSS files that affect all components globally.
- **Styled JSX**: Enables scoped CSS support in React components. More details can be found on the [Next.js blog](https://nextjs.org/blog/styling-next-with-styled-jsx).
- **CSS Modules**: CSS files in which all class names and animation names are scoped locally by default.


## Next.js inbuilt dependencies and features
- **next/link**: Simplifies navigation between pages (`<Link href="/path"><a>Link Text</a></Link>`).
- **next/router**: Facilitates programmatic navigation (`useRouter`, `Router.push()`).
- **next/image**: Optimized image component (`<Image src="/path/to/image" alt="description" />`).
- **next/head**: Allows you to manipulate the `<head>` of a page (`<Head><title>Page Title</title></Head>`).
- **getStaticProps**: Fetches data at build time to pass as props to your page.
- **getStaticPaths**: Determines dynamic paths based on the data fetched.
- **_error.js**: Handles custom rendering of error pages, like 404 Not Found.


## Common Commands
- `npx create-next-app appname`: Creates a new Next.js project.
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Runs the application in production mode.


## Technologies used
`html` `css` `nextjs` `css modules`