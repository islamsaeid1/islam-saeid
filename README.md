# Islam Saeid Portfolio Website

This is a modern, creative, and interactive personal portfolio website for Islam Saeid, a Media Buyer & Social Media Strategist. It showcases his expertise, services, case studies, and contact information.

## Project Structure

This project was built using React.js with Vite as the build tool and Tailwind CSS for styling. It includes:

*   `public/`: Static assets.
*   `src/`: Source code, including components, assets, and main application files.
    *   `src/assets/`: Contains all images and icons used in the project.
    *   `src/components/`: Reusable React components for different sections of the website.
*   `package.json`: Project dependencies and scripts.
*   `vite.config.js`: Vite build configuration.

## How to Run Locally

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <your-github-repo-url>
    cd islam-saeid-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```
    (If you don't have pnpm, you can install it via `npm install -g pnpm`)

3.  **Start the development server:**
    ```bash
    pnpm run dev
    ```

    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Steps to Deploy to Netlify

This project is ready for deployment on Netlify. Follow these steps:

1.  **Push your project to GitHub:** Ensure your entire project, including the `dist` folder (which will be generated during the build process), is pushed to a GitHub repository.

2.  **Connect Netlify to your GitHub repository:**
    *   Log in to your Netlify account (or sign up if you don't have one).
    *   Click on "Add new site" -> "Import an existing project".
    *   Connect to your Git provider (GitHub, GitLab, Bitbucket).
    *   Select the repository where you pushed this project.

3.  **Configure deploy settings:**
    *   **Owner:** Your GitHub username/organization.
    *   **Branch to deploy:** `main` (or your preferred branch).
    *   **Build command:** `pnpm run build`
    *   **Publish directory:** `dist`

4.  **Deploy your site:** Click the "Deploy site" button. Netlify will automatically build and deploy your project. Once deployed, you will get a unique URL for your live website.



