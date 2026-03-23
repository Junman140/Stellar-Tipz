//! Credit score calculation for the Tipz contract.
//!
//! Formula:
//!   follower_score = min(followers / 10, 500) × 50%
//!   activity_score = min((posts + replies × 1.5) / 5, 300) × 30%
//!   base_score     = 200 × 20%
//!   total          = min(follower_score + activity_score + base_score, 1000)
//!
//! See docs/CREDIT_SCORE.md for the full algorithm specification.

// TODO: Implement credit score calculation in issue #13
//
// pub fn calculate_score(followers: u32, posts: u32, replies: u32) -> u32 { ... }
// pub fn get_tier(score: u32) -> &str { ... }
