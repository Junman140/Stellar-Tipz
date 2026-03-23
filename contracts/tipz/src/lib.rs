//! # Stellar Tipz Contract
//!
//! Decentralized tipping platform on Stellar (Soroban).
//!
//! ## Features
//! - Creator profile registration
//! - XLM tipping with optional messages
//! - Withdrawal with configurable fee (default 2%)
//! - Credit score based on X (Twitter) metrics
//! - On-chain leaderboard
//!
//! See docs/CONTRACT_SPEC.md for the full specification.

#![no_std]

mod admin;
mod credit;
mod errors;
mod events;
mod leaderboard;
mod storage;
mod tips;
mod types;

#[cfg(test)]
mod test;

use soroban_sdk::{contract, contractimpl, Address, Env, String, Vec};

use crate::errors::ContractError;
use crate::types::{ContractStats, LeaderboardEntry, Profile};

#[contract]
pub struct TipzContract;

#[contractimpl]
impl TipzContract {
    // ──────────────────────────────────────────────
    // Initialization
    // ──────────────────────────────────────────────

    /// Initialize the contract with admin, fee collector, and fee percentage.
    /// Can only be called once.
    pub fn initialize(
        env: Env,
        admin: Address,
        fee_collector: Address,
        fee_bps: u32,
    ) -> Result<(), ContractError> {
        admin::initialize(&env, &admin, &fee_collector, fee_bps)
    }

    // ──────────────────────────────────────────────
    // Profile Management
    // ──────────────────────────────────────────────

    /// Register a new creator profile.
    pub fn register_profile(
        env: Env,
        caller: Address,
        username: String,
        display_name: String,
        bio: String,
        image_url: String,
        x_handle: String,
    ) -> Result<Profile, ContractError> {
        // TODO: Implement in issue #1 - Profile Registration
        Err(ContractError::NotInitialized)
    }

    /// Update an existing profile (owner only).
    pub fn update_profile(
        env: Env,
        caller: Address,
        display_name: Option<String>,
        bio: Option<String>,
        image_url: Option<String>,
        x_handle: Option<String>,
    ) -> Result<(), ContractError> {
        // TODO: Implement in issue #3 - Profile Update
        Err(ContractError::NotInitialized)
    }

    /// Update X (Twitter) metrics for a creator (admin only).
    pub fn update_x_metrics(
        env: Env,
        caller: Address,
        target: Address,
        followers: u32,
        posts: u32,
        replies: u32,
    ) -> Result<(), ContractError> {
        // TODO: Implement in issue #15 - X Metrics Update
        Err(ContractError::NotInitialized)
    }

    /// Get a profile by address.
    pub fn get_profile(env: Env, address: Address) -> Result<Profile, ContractError> {
        // TODO: Implement in issue #4 - Profile Queries
        Err(ContractError::NotInitialized)
    }

    /// Get a profile by username.
    pub fn get_profile_by_username(env: Env, username: String) -> Result<Profile, ContractError> {
        // TODO: Implement in issue #5 - Username Lookup
        Err(ContractError::NotInitialized)
    }

    // ──────────────────────────────────────────────
    // Tipping
    // ──────────────────────────────────────────────

    /// Send an XLM tip to a registered creator.
    pub fn send_tip(
        env: Env,
        tipper: Address,
        creator: Address,
        amount: i128,
        message: String,
    ) -> Result<(), ContractError> {
        // TODO: Implement in issue #7 - Send Tip
        Err(ContractError::NotInitialized)
    }

    /// Withdraw accumulated tips (fee deducted).
    pub fn withdraw_tips(
        env: Env,
        caller: Address,
        amount: i128,
    ) -> Result<(), ContractError> {
        // TODO: Implement in issue #10 - Withdraw Tips
        Err(ContractError::NotInitialized)
    }

    // ──────────────────────────────────────────────
    // Credit Score
    // ──────────────────────────────────────────────

    /// Calculate and return the credit score for a profile.
    pub fn calculate_credit_score(
        env: Env,
        address: Address,
    ) -> Result<u32, ContractError> {
        // TODO: Implement in issue #13 - Credit Score Calculation
        Err(ContractError::NotInitialized)
    }

    // ──────────────────────────────────────────────
    // Leaderboard
    // ──────────────────────────────────────────────

    /// Get the top creators by total tips received.
    pub fn get_leaderboard(
        env: Env,
        limit: u32,
    ) -> Result<Vec<LeaderboardEntry>, ContractError> {
        // TODO: Implement in issue #17 - Leaderboard
        Err(ContractError::NotInitialized)
    }

    // ──────────────────────────────────────────────
    // Admin
    // ──────────────────────────────────────────────

    /// Update the withdrawal fee (admin only).
    pub fn set_fee(
        env: Env,
        caller: Address,
        fee_bps: u32,
    ) -> Result<(), ContractError> {
        // TODO: Implement in issue #20 - Admin Fee Management
        Err(ContractError::NotInitialized)
    }

    /// Update the fee collector address (admin only).
    pub fn set_fee_collector(
        env: Env,
        caller: Address,
        new_collector: Address,
    ) -> Result<(), ContractError> {
        // TODO: Implement in issue #21 - Fee Collector Update
        Err(ContractError::NotInitialized)
    }

    /// Transfer admin role (admin only).
    pub fn set_admin(
        env: Env,
        caller: Address,
        new_admin: Address,
    ) -> Result<(), ContractError> {
        // TODO: Implement in issue #22 - Admin Transfer
        Err(ContractError::NotInitialized)
    }

    /// Get global contract statistics.
    pub fn get_stats(env: Env) -> Result<ContractStats, ContractError> {
        // TODO: Implement in issue #23 - Contract Stats
        Err(ContractError::NotInitialized)
    }
}
