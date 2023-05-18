use async_imap::{Client, Session};
use async_native_tls::TlsStream;
use dotenv::dotenv;
use tokio::net::TcpStream;

#[tokio::main]
async fn main() {
    dotenv().ok();

    let session = get_imap_session().await.unwrap();
    println!(
        "mailboxes: {:?}",
        session.list(None, Some("*")).await.unwrap()
    );
}

async fn get_imap_session() -> anyhow::Result<Session<TlsStream<TcpStream>>> {
    // get env variables
    let imap_host = std::env::var("IMAP_HOST").expect("IMAP_HOST not set");
    let imap_username = std::env::var("IMAP_USERNAME").expect("IMAP_USERNAME not set");
    let imap_password = std::env::var("IMAP_PASSWORD").expect("IMAP_PASSWORD not set");

    let tcp_stream = TcpStream::connect((imap_host.as_str(), 993)).await?;
    let tls_stream = async_native_tls::connect(imap_host.as_str(), tcp_stream).await?;
    let client = Client::new(tls_stream);
    let session = client
        .login(imap_username.as_str(), imap_password.as_str())
        .await
        .map_err(|(err, _client)| err)?;

    Ok(session)
}
