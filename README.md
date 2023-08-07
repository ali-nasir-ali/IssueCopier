# IssueCopier

IssueCopier is a versatile repository tool that simplifies the process of cloning and duplicating issues within GitHub. With IssueCopier, you can effortlessly transfer issues from one repository to another, allowing for efficient issue management across different projects. This tool eliminates the need for manual recreation of issue details and ensures that the entire issue history, including comments and labels, is preserved during the copying process. Streamline your workflow and enhance collaboration with IssueCopier.
Note: IssueCopier is an independent tool developed by the community to enhance issue management capabilities within GitHub. It is not affiliated with GitHub itself.

# what we want of it

1- It should first read the second repo and store it locally
2- It then reads the first repo
3- compare them and if the first repo is done to have the issue only then post it there with labels and details


Here are some improvements to the readme file for the IssueCopier repository:


IssueCopier is a tool that helps copy issues from one GitHub repository to another while retaining all the issue details like comments, labels, assignees etc. 

## Features

- Copies issues from source repository to destination repository
- Retains all issue details like title, description, comments, labels, milestones, assignees etc.
- Handles pagination of issues seamlessly
- Easy-to-use command line interface

## Usage

```
issuecopier copy <source_repo> <destination_repo>
```

This will copy all open issues from `<source_repo>` to `<destination_repo>`. 

To copy specific issues:

```
issuecopier copy <source_repo> <destination_repo> --issues=1234,5678
```

This will only copy issues 1234 and 5678 from `<source_repo>`.

## Authentication

IssueCopier needs a GitHub personal access token to access the API. The token should have `repo` scope. 

The token can be passed as:

```
issuecopier --token=<token> ...
```

Or by setting the `GITHUB_TOKEN` environment variable.

## Dependencies

-  js
-  node
maybe:
- next
  

## Installation

```
pip install issuecopier
```
