# Next JS (Net Ninja)
This is an application created using NEXT JS.

## Ways to write CSS in your next JS project
- global styles Sheet
- [styles jsx](https://nextjs.org/blog/styling-next-with-styled-jsx): helps you write css in react components
- css modules

## Dependencies Used
- next/link: `<Link href={}><a> LINK </a></Link>`
- next/router: `useRouter` `Router.push()`
- next/image: `<Image />`
- next/head: `<Head />`

## Flow of the Application
- `getStaticProps`: to get the data for the component in the form of props
- `getStaticPaths`: when using dynamic data extract all possible paths
- `_error.js`: to handle 404 pages

## Some Important Commands
- `npx create-next-app appname`: to create a boiler plate for next js applications
- `npm run dev` : Starts the development server.
- `npm run build` : Builds the app for production.
- `npm start` : Runs the built app in production mode.