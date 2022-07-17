FROM golang:1.18-alpine as builder

WORKDIR /app

COPY hello.go /app/

RUN go mod init hello && go build


FROM scratch

WORKDIR /app

COPY --from=builder /app/hello .
CMD ["/app/hello"]
