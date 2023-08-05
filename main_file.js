const fs = require("fs");

const tokenData = fs.readFileSync("Token_file.txt", "utf8");

const data = JSON.parse(tokenData);

const { sourceOwner, sourceRepo, targetOwner, targetRepo, personalAccessToken } = data;

//
// posting the data to the repository
async function createIssue(owner, repo, title, body, token) {
  const url = `https://api.github.com/repos/${owner}/${repo}/issues`;
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  const issueData = {
    title: title,
    body: body,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(issueData),
    });

    if (response.ok) {
      const issue = await response.json();
      console.log(`Issue created successfully. Issue number: ${issue.number}`);
    } else {
      console.error("Failed to create issue:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// createIssue(issueReceiver, issueNewRepo, title, body, token);
// console.log(Token);

// getting  issue labels#

async function fetchingLabels(issue_number) {
  try {
    const response = await fetch(`https://api.github.com/repos/CodeYourFuture/Module-Databases/issues/${issue_number}/labels`);
    da = await response.json();
    console.log("------------------ fetching label functions ----------------");
    console.log(da);
    return da;
    // return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function fetchIssues() {
  try {
    const response = await fetch("https://api.github.com/repos/CodeYourFuture/Module-Databases/issues");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

// Main logic
async function run() {
  try {
    const issues = await fetchIssues();
    for (let issue of issues) {
      console.log("    -----------------------   issues labels -----------------------");
      // fetchingLabels(issue.number);
      let da = fetchingLabels(28);
      createIssue(owner, repo, title, body, token);
      //   console.log(da);

      // const newIssue = await createIssue(targetOwner, targetRepo, title, body, labels, personalAccessToken);

      // Add labels (if needed)
      // trying for one issue for now
      break;
    }

    console.log("Script complete!");
  } catch (err) {
    console.error(err);
  }
}

run();
