# Testing Configuration

## GitHub Secrets Setup

To run the unit tests in GitHub Actions, you need to configure the following secrets in your repository:

### Required Secrets

1. **CLOCKIFY_API_TOKEN**
   - Your Clockify API token
   - Get it from: https://app.clockify.me/manage-api-keys
   - Path: Repository Settings → Secrets and variables → Actions → New repository secret

2. **TEST_WORKSPACE_ID**
   - The workspace ID to use for testing
   - Get it from Clockify API or workspace URL

3. **TEST_USER_ID**
   - The user ID to use for testing
   - Get it from Clockify API

4. **TEST_PROJECT_ID**
   - The project ID to use for testing
   - Get it from Clockify API or project URL

### How to Add Secrets

1. Go to your GitHub repository
2. Click on **Settings**
3. Navigate to **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add each secret with its name and value
6. Click **Add secret**

## Running Tests Locally

To run tests locally, create a `.env` file in the root directory:

```bash
CLOCKIFY_API_TOKEN=your_token_here
CLOCKIFY_API_URL=https://api.clockify.me/api/v1
TEST_WORKSPACE_ID=your_workspace_id
TEST_USER_ID=your_user_id
TEST_PROJECT_ID=your_project_id
```

Then run:

```bash
npm test
```

## CI/CD Workflow

The unit tests workflow runs on:
- Every pull request to `main` branch
- Every push to `main` branch

### Features

- ✅ Automatic test execution
- ✅ PR status checks (pass/fail)
- ✅ Detailed test results in PR comments
- ✅ Failed test details in PR summary
- ✅ Badge in README showing test status
