# How To Contribute
Thank you for your interest in contributing to **github-apiv4**!! :tada:

## Getting Code
1. Fork and clone forked repository

```bash
git clone *forked repository url*
# git clone https://github.com/ioedeveloper/github-apiv4
cd github-apiv4
```

2. Install dependencies

```bash
npm install
```

3. Run github-apiv4 tests locally.

```bash
npm run test
```

## Code reviews

All submissions, including submissions by project members, require review. We
use GitHub pull requests for this purpose. Consult
[GitHub Help](https://help.github.com/articles/about-pull-requests/) for more
information on using pull requests.

## Code Style

- Coding style is fully defined in [tslint.json](https://github.com/ioedeveloper/github-apiv4/blob/master/tslint.json)
- Comments should be generally avoided. If the code would not be understood without comments, consider re-writing the code to make it self-explanatory.

To run code linter, use:

```bash
npm run lint
```
## Commit Messages

Commit messages should follow this format:

```
label(title): description
```

1. *label* is one of the following:
    - `fix` - github-apiv4 bug fixes.
    - `feat` - github-apiv4 features.
    - `docs` - changes to documentation.
    - `test` - changes to github-apiv4 tests.
    - `style` - changes to style (tslint.json).
2. *title* is a brief summary of changes.
3. *description* is **optional**, elaborate changes.

Example:

```
fix(Viewer Type): fix viewer type due to ... error.
```
## Writing Documentation
To update documentation with changes made use:

```bash
npm run docs
```

## Adding New Dependencies

For all dependencies (both installation and development):
- **Do not add** a dependency if the desired functionality is easily implementable.
- If adding a dependency, it should be extremely necessary to the development of the feature and all dependencies should be well-maintained and trustworthy.

## Running & Writing Tests

- Every feature should have a corresponding test.

Github-Apiv4 tests are located in [`src/test`](https://github.com/ioedeveloper/github-apiv4/blob/master/src/test/)

- To run all tests:

```bash
npm run test
```