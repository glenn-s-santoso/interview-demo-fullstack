# Changelog

## [1.1.0] - 2025-05-09

### Added
- `authService`: bcrypt password hashing and comparison helpers
- Rate-limiter middleware on login endpoint (5 req / 15 min)

### Fixed
- Login controller: sanitize inputs, stop leaking stack traces to client

### Chore
- Documented dependency update policy

---

## [1.0.0] - 2025-05-01
- Initial project scaffold (React + Node.js)
