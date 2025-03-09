mod model;
mod schema;
mod handler;

use actix_cors::Cors;
use actix_web::middleware::Logger;
use actix_web::{get, web, App, HttpResponse, HttpServer, Responder};
use serde_json::json;
use sqlx::postgres::PgPoolOptions;
use sqlx::{Pool, Postgres};
use dotenv::dotenv;

pub struct AppState {
    db: Pool<Postgres>,
}

#[get("/api/healthchecker")]
async fn healthchecker() -> impl Responder{
    const MESSAGE: &str = "I am alive!";
    HttpResponse::Ok().json(json!({ "message": MESSAGE }))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    if std::env::var_os("RUST_LOG").is_none() {
        std::env::set_var("RUST_LOG", "actix_web=info");
    }
    env_logger::init();
    dotenv().ok();

    let database_url = std::env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    let pool = match PgPoolOptions::new()
        .max_connections(10)
        .connect(&database_url)
        .await
    {
        Ok(pool) => {
            println!("✅Connection to the database is successful!");
            pool
        }
        Err(err) => {
            println!("🔥 Failed to connect to the database: {:?}", err);
            std::process::exit(1);
        }
    };
    println!("Server Started Successfully!");
    HttpServer::new( move || {
        let cors = Cors::default()
            .allow_any_origin()
            .allow_any_method()
            .allow_any_header();
        App::new()
            .app_data(web::Data::new(AppState { db: pool.clone() }))
            .configure(handler::config)
            .wrap(Logger::default())
            .wrap(cors)
            .service(healthchecker)
    })
        .bind(("127.0.0.1", 8000))?
        .run()
        .await
}
