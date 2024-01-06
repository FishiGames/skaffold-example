FROM rust:1.75.0 as builder

WORKDIR /workdir
COPY . .
RUN cargo install --path .
RUN cargo clean

FROM debian:12.4-slim
RUN apt-get update && \
  apt-get clean -y && \
  rm -rf /var/lib/apt/lists/*

COPY --from=builder /usr/local/cargo/bin/backend /usr/local/bin/backend

EXPOSE 3000

CMD ["backend"]