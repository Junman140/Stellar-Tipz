.PHONY: build test fmt clippy wasm clean

# Build the contract
build:
	cargo build

# Run all tests
test:
	cargo test

# Check formatting
fmt:
	cargo fmt -- --check

# Run clippy linter
clippy:
	cargo clippy -- -D warnings

# Build optimized Wasm binary
wasm:
	cargo build --target wasm32-unknown-unknown --release

# Run all checks (CI equivalent)
check: fmt clippy test

# Clean build artifacts
clean:
	cargo clean
