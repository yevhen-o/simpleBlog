export default function Home() {
  return (
    <div>
      <br />
      It started as a simple blog app to practice SSR (server-side rendering),
      deployment to Vercel and Firebase. <br />
      Practicing caching and revalidation. Later, when I was discouraged by the
      low performance of Next.js at times, I wanted to check how other
      frameworks work with the exact same data and the exact same number of
      components to render via SSR. So, this version implement SSR on Next.js
      15, by design :) Soon, I will place links to different versions right
      below.
      <br></br>
      Using Playwright for simple tests, just for fun. Using Husky to run tests
      automatically before each push.
      <br />
      Using simple email and password authentication with Supabase. I will add
      more features later.
    </div>
  );
}
