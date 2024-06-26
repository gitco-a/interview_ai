/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai_mock_owner:xnw7XmdKySG5@ep-cold-darkness-a1msgunh.ap-southeast-1.aws.neon.tech/ai_mock?sslmode=require',
    }
  };