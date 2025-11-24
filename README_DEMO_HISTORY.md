# demo/synthetic-history — synthetic demo history

This branch contains synthetic commits created for demonstration purposes only. The commits are intentionally simple and human-readable. They are NOT intended to misrepresent the true provenance of the `main` branch or the repository.

How it was created
- The branch `demo/synthetic-history` was created locally and contains small, human-like commit messages to show what a readable history might look like.
- Dates on commits are the dates they were actually created and were not falsified.

If you want to push the demo branch to the remote repository:

```
git push origin demo/synthetic-history
```

If you want to enable the sample commit hook locally:

```
ln -s ../../.githooks/prepare-commit-msg .git/hooks/prepare-commit-msg
chmod +x .git/hooks/prepare-commit-msg
```
