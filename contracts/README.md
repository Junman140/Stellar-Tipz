# Stellar Tipz — Smart Contracts

> Soroban smart contracts for the Stellar Tipz decentralized tipping platform.

## Structure

```
contracts/
├── Cargo.toml              # Workspace manifest
├── Makefile                 # Build/test shortcuts
└── tipz/                    # Main contract crate
    ├── Cargo.toml
    └── src/
        ├── lib.rs           # Contract entry point (public interface)
        ├── types.rs         # Data structures (Profile, Tip, etc.)
        ├── storage.rs       # Storage keys & helpers
        ├── errors.rs        # ContractError enum
        ├── admin.rs         # Initialization & admin ops
        ├── credit.rs        # Credit score algorithm
        ├── tips.rs          # Tipping & withdrawal logic
        ├── events.rs        # Event emission helpers
        ├── leaderboard.rs   # Leaderboard tracking
        └── test/            # Test modules
            ├── mod.rs
            ├── test_register.rs
            ├── test_tips.rs
            ├── test_withdraw.rs
            ├── test_credit.rs
            ├── test_leaderboard.rs
            ├── test_admin.rs
            └── test_events.rs
```

## Quick Start

```bash
# Build
cargo build

# Test
cargo test

# Format check
cargo fmt -- --check

# Lint
cargo clippy -- -D warnings

# Build optimized Wasm
cargo build --target wasm32-unknown-unknown --release
```

## Contract Overview

See [docs/CONTRACT_SPEC.md](../docs/CONTRACT_SPEC.md) for the full specification.

### Public Functions

| Function | Description |
|----------|-------------|
| `initialize` | Set admin, fee collector, and fee percentage |
| `register_profile` | Create a new creator profile |
| `update_profile` | Update profile information |
| `update_x_metrics` | Update X (Twitter) metrics (admin only) |
| `get_profile` | Fetch profile by address |
| `get_profile_by_username` | Fetch profile by username |
| `send_tip` | Send XLM tip to a creator |
| `withdraw_tips` | Withdraw accumulated tips |
| `calculate_credit_score` | Calculate credit score for a profile |
| `get_leaderboard` | Get top creators |
| `set_fee` | Update withdrawal fee (admin) |
| `set_fee_collector` | Update fee collector (admin) |
| `set_admin` | Transfer admin role (admin) |
| `get_stats` | Get global contract statistics |

## Contributing

Each module has TODO comments referencing specific GitHub issues. Pick an issue, implement the functionality, write tests, and submit a PR.

See [docs/CONTRIBUTING.md](../docs/CONTRIBUTING.md) for the full contributor workflow.
