use axum::{Json, Router, routing::get, serve};
use serde::{Deserialize, Serialize};
use sysinfo::System;
use tokio::net::TcpListener;
use tracing_subscriber::fmt::init;

#[tokio::main]
async fn main() {
    init();

    let app = Router::new()
        .route("/text", get(text));

    let listener = TcpListener::bind("0.0.0.0:3000").await.unwrap();
    serve(listener, app).await.unwrap();
}

#[derive(Serialize, Deserialize)]
struct Message {
    pub answer: String
}

async fn text() -> Json<Message> {
    println!("Received request for text");
    Json(Message {
        answer: format!("Hello from {}!", System::host_name().unwrap())
    })
}