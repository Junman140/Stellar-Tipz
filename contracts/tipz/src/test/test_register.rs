//! Tests for profile registration.
//!
//! TODO: Implement in issues #24-25
//!
//! Test cases to cover:
//! - Successful profile registration
//! - Duplicate registration (same address) → AlreadyRegistered
//! - Duplicate username → UsernameTaken
//! - Invalid username formats → InvalidUsername
//! - Empty display name → InvalidDisplayName
//! - Display name too long → InvalidDisplayName
//! - Bio too long (>280 chars)
//! - Username case normalization
//! - Profile data stored correctly

#![cfg(test)]
