# Durasic - GitHub Pages Deployment Guide

## Overview

This application has been configured for automatic deployment to GitHub Pages using GitHub Actions. The workflow builds the React application and deploys it to the `gh-pages` branch.

## Prerequisites

- Supabase Account (for backend)
- GitHub Account with repository access
- Node.js and npm installed locally

## Setup Instructions

### 1. Configure GitHub Secrets

The GitHub Actions workflow requires the following secrets to be set in your repository settings:

#### Steps:
1. Go to your repository on GitHub
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Click **New repository secret** for each of the following:

#### Required Secrets:

**REACT_APP_SUPABASE_URL**
- Description: Your Supabase project URL
- Value: `https://your-project-id.supabase.co`
- Where to find: Supabase Dashboard > Project Settings > API

**REACT_APP_SUPABASE_ANON_KEY**
- Description: Your Supabase anonymous public key
- Value: Your anonumous key from Supabase
- Where to find: Supabase Dashboard > Project Settings > API > anon public key

**GITHUB_TOKEN**
- This is automatically provided by GitHub Actions
- No manual configuration needed

### 2. Deploy the Application

#### Automatic Deployment

Once you push code to the `main` branch, the GitHub Actions workflow will automatically:
1. Trigger the build process
2. Run `npm run build` to create the production build
3. Deploy the built files to the `gh-pages` branch
4. Update the live site at: `https://desichillbeats.github.io/Durasic/`

#### Manual Deployment (if needed)

If you need to trigger a deployment manually:
1. Go to your repository
2. Click on **Actions** tab
3. Select **Deploy to GitHub Pages** workflow
4. Click **Run workflow** > **Run workflow** button

### 3. Monitor the Deployment

1. Navigate to the **Actions** tab in your repository
2. Click on the latest workflow run ("Deploy to GitHub Pages")
3. Check the status and logs
4. Once completed, your site will be live

## Accessing Your Deployed Site

Your Durasic Music app will be available at:
```
https://desichillbeats.github.io/Durasic/
```

## Troubleshooting

### Workflow Fails

If the GitHub Actions workflow fails:

1. **Check Secrets**: Verify all required secrets are correctly set
   - Go to Settings > Secrets and variables > Actions
   - Ensure REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY are correct

2. **View Logs**: Click on the failed workflow run in the Actions tab to see detailed error messages

3. **Local Build Test**: Test the build locally:
   ```bash
   npm run build
   ```
   This ensures there are no build errors before pushing

### Site Not Loading

If the site loads but looks broken:

1. Check browser console for errors
2. Verify the homepage field in package.json is set correctly
3. Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
4. Check GitHub Pages settings (Settings > Pages) to ensure it's publishing from gh-pages branch

## Local Development

To run the app locally during development:

```bash
# Install dependencies
npm install

# Create a .env.local file with your Supabase credentials
echo "REACT_APP_SUPABASE_URL=your_supabase_url" > .env.local
echo "REACT_APP_SUPABASE_ANON_KEY=your_anon_key" >> .env.local

# Start development server
npm start
```

## Production Build

To create a production build locally:

```bash
npm run build
```

This creates an optimized build in the `build/` folder.

## More Information

- [GitHub Pages Documentation](https://docs.github.com/pages)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Supabase Documentation](https://supabase.com/docs)
- [React Documentation](https://react.dev)

## Support

For issues or questions:
1. Check the GitHub Actions logs for error messages
2. Verify all environment variables are correctly set
3. Review the workflow file at `.github/workflows/deploy.yml`
4. Check GitHub Pages settings in repository Settings
