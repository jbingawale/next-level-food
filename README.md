🍔 NextLevel Food
NextLevel Food is a modern web application built with Next.js where users can discover and share their favorite recipes with a community of foodies.

🚀 Getting Started
Follow these steps to get the project running on your local machine:

1. Clone the Repository
Open your terminal and run the following command to clone the project:
```bash
git clone git@github.com:jbingawale/next-level-food.git
cd next-level-food
```

2. Install Dependencies
Install the required packages using npm:
```bash
npm install
```

3. Initialize the Database
The project uses better-sqlite3. You need to run the initialization script to create the local database file and seed it with initial data:
```bash
node initdb.js
```

4. Run the Development Server
Start the Next.js development server:
```bash
npm run dev
```

5. Environment Setup
To enable image uploads to AWS S3, you need to configure your environment variables:

  1. Rename the .env.local.example file to .env.local:
     ```bash
     mv .env.local.example .env.local
     ```
  2. Open .env.local and provide the values for the following keys:
     ```bash
     # AWS Credentials
      AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID
      AWS_SECRET_ACCESS_KEY=YOUR_SECRET_ACCESS_KEY
      
      # S3 Configuration
      AWS_S3_BUCKET_NAME=your-bucket-name
      AWS_S3_BUCKET_REGION=your-bucket-region-name eg-ap-south-1
      
      # Derived URLs (Used for next.config.js and Image components)
      AWS_S3_BUCKET_NAME_WITH_SERVER_REGION=your-bucket-name.s3.ap-south-1.amazonaws.com
      AWS_S3_BUCKET_IMAGE_URL=https://your-bucket-name.s3.ap-south-1.amazonaws.com
     ```

Open http://localhost:3000 in your browser to see the result.

🛠️ Tech Stack
* Framework: Next.js 14 (App Router)
* Database: better-sqlite3
* Styling: CSS Modules
* Form Handling: React Server Actions with useFormState (React 18)
* Security: xss for input sanitization and slugify for URL management

📁 Project Structure
* /app: Contains all routes, layouts, and pages.
* /components: Reusable UI components (Meals, Image Picker, etc.).
* /lib: Core logic including database queries and Server Actions.
* /public: Static assets like images.
* initdb.js: Database schema and seeding script.

📝 Key Features
* Server-Side Rendering (SSR): Optimized performance and SEO.
* Server Actions: Securely handle form submissions directly on the server.
* Image Uploads: Custom image picker for sharing meal photos.(In future thinking of moving upload images to s3 bucket as in build of this project uploaded images are not shown)
* XSS Protection: Built-in sanitization for user-generated content.

Happy Cooking! 👨‍🍳 If you have any questions, feel free to open an issue or reach out.
