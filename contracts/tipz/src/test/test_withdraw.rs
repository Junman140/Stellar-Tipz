//! Tests for withdraw_tips functionality.
//!
//! TODO: Implement in issue #28
//!
//! Test cases to cover:
//! - Successful withdrawal (correct amounts, fee deducted)
//! - Withdraw more than balance → InsufficientBalance
//! - Withdraw zero → InvalidAmount
//! - Fee sent to fee collector
//! - Balance updated after withdrawal
//! - Partial withdrawal (remaining balance correct)

#![cfg(test)]
