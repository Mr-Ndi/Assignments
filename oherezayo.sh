#!/bin/bash

# Prompt for the commit message
read -p "Enter commit message: " commit_message

# Check if a filename argument is provided
if [ "$#" -eq 1 ]; then
    # Add the specified file
    git add "$1"
else
    # Add all changes
    git add .
fi

# Commit with the provided message
git commit -m "$commit_message"

# Pull the latest changes from the remote repository
git pull origin $(git rev-parse --abbrev-ref HEAD)

# Push to the current branch
git push origin $(git rev-parse --abbrev-ref HEAD)

