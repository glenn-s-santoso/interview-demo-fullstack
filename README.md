# interview-demo-fullstack

A simple full-stack demo project used to illustrate engineering practices.

## Structure
```
client/   → React frontend (Vite)
server/   → Node.js + Express backend
```

## Branching Strategy
```
main          ← production-ready, protected
  └─ develop  ← integration branch (PRs merge here first)
       ├─ feature/<ticket-id>-<short-slug>
       ├─ fix/<ticket-id>-<short-slug>
       └─ chore/<short-slug>
```

## Branch Naming Convention
| Type      | Pattern                        | Example                        |
|-----------|-------------------------------|-------------------------------|
| Feature   | `feature/<id>-<slug>`         | `feature/ITV-12-user-auth`    |
| Bug fix   | `fix/<id>-<slug>`             | `fix/ITV-34-login-crash`      |
| Chore     | `chore/<slug>`                | `chore/update-deps`           |
| Hotfix    | `hotfix/<id>-<slug>`          | `hotfix/ITV-99-prod-down`     |
| Release   | `release/<semver>`            | `release/1.2.0`               |

## PR Title Convention (Conventional Commits)
```
feat(auth): add JWT login endpoint         ← new feature
fix(ui): correct button alignment on mobile
chore(deps): bump axios to 1.7.0
docs(readme): update branching guide
refactor(api): extract validation middleware
```

## Merge Strategy
- **feature → develop**: Squash and Merge (clean, single commit per feature)
- **develop → main**: Merge Commit (preserves full history of the release)
- **hotfix → main**: Merge Commit (then back-merge into develop)

## Versioning (Semantic Versioning)
`MAJOR.MINOR.PATCH`
- MAJOR → breaking change
- MINOR → new feature, backward-compatible
- PATCH → bug fix

## Environment Variables
Copy `.env.example` to `.env` — never commit `.env`.

## API Docs
See `server/README.md` and import `server/postman_collection.json` into Postman.

<!-- develop branch marker — integration branch -->

## Dependency Policy
- All deps pinned to minor version (`^1.x.x`) — patch updates via Dependabot
- Security patches applied within 48h of advisory
