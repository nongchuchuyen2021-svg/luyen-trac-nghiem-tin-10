declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    MIDTERM_ADMIN_PASSWORD?: string;
    MIDTERM_SESSION_SECRET?: string;
    BUCKET?: R2Bucket;
  }
}
