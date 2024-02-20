FROM rust:1.76.0 as builder

WORKDIR /workdir
COPY . .
RUN cargo install --path .
RUN cargo clean

FROM debian:12.4-slim
RUN apt-get update
RUN apt-get clean -y
RUN rm -rf /var/lib/apt/lists/*

COPY --from=builder /usr/local/cargo/bin/backend /usr/local/bin/backend

EXPOSE 3000

CMD ["backend"]