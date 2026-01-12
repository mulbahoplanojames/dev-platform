# Team Monorepo Structure

This directory follows a monorepo structure where each team member has their own self-contained workspace with the following structure:

```
/team/
  /member1/
    /data/      # Data files and mock data
    /js/        # JavaScript/TypeScript source files
    /apis/      # API integrations and services
    /sections/  # Reusable UI components
    /pages/     # Page components
    /utils/     # Utility functions and helpers
  ...
```

## Adding a New Team Member

1. Create a new directory with the team member's name (e.g., `member3`)
2. Run the setup script to create the standard directory structure:
   ```bash
   mkdir -p src/team/newmember/{data,js,apis,sections,pages,utils}
   ```
3. Add a `.gitkeep` file in each directory to maintain the structure in version control:
   ```bash
   touch src/team/newmember/{data,js,apis,sections,pages,utils}/.gitkeep
   ```
