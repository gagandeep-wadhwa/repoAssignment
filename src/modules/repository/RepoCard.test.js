import { render, screen } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import React from 'react';
import RepoCard from './RepoCard';

const handleButtonClick = jest.fn();

const repo = { 
  "id": 494567206,
  "node_id": "R_kgDOHXp_Jg",
  "name": "bionic-reading",
  "full_name": "ansh/bionic-reading",
  "private": false,
  "owner": {
      "login": "ansh",
      "id": 8207733,
      "node_id": "MDQ6VXNlcjgyMDc3MzM=",
      "avatar_url": "https://avatars.githubusercontent.com/u/8207733?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ansh",
      "html_url": "https://github.com/ansh",
      "followers_url": "https://api.github.com/users/ansh/followers",
      "following_url": "https://api.github.com/users/ansh/following{/other_user}",
      "gists_url": "https://api.github.com/users/ansh/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ansh/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ansh/subscriptions",
      "organizations_url": "https://api.github.com/users/ansh/orgs",
      "repos_url": "https://api.github.com/users/ansh/repos",
      "events_url": "https://api.github.com/users/ansh/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ansh/received_events",
      "type": "User",
      "site_admin": false
  },
  "html_url": "https://github.com/ansh/bionic-reading",
  "description": "A Chrome Extension for Bionic Reading on ANY website!",
  "fork": false,
  "url": "https://api.github.com/repos/ansh/bionic-reading",
  "forks_url": "https://api.github.com/repos/ansh/bionic-reading/forks",
  "keys_url": "https://api.github.com/repos/ansh/bionic-reading/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/ansh/bionic-reading/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/ansh/bionic-reading/teams",
  "hooks_url": "https://api.github.com/repos/ansh/bionic-reading/hooks",
  "issue_events_url": "https://api.github.com/repos/ansh/bionic-reading/issues/events{/number}",
  "events_url": "https://api.github.com/repos/ansh/bionic-reading/events",
  "assignees_url": "https://api.github.com/repos/ansh/bionic-reading/assignees{/user}",
  "branches_url": "https://api.github.com/repos/ansh/bionic-reading/branches{/branch}",
  "tags_url": "https://api.github.com/repos/ansh/bionic-reading/tags",
  "blobs_url": "https://api.github.com/repos/ansh/bionic-reading/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/ansh/bionic-reading/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/ansh/bionic-reading/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/ansh/bionic-reading/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/ansh/bionic-reading/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/ansh/bionic-reading/languages",
  "stargazers_url": "https://api.github.com/repos/ansh/bionic-reading/stargazers",
  "contributors_url": "https://api.github.com/repos/ansh/bionic-reading/contributors",
  "subscribers_url": "https://api.github.com/repos/ansh/bionic-reading/subscribers",
  "subscription_url": "https://api.github.com/repos/ansh/bionic-reading/subscription",
  "commits_url": "https://api.github.com/repos/ansh/bionic-reading/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/ansh/bionic-reading/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/ansh/bionic-reading/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/ansh/bionic-reading/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/ansh/bionic-reading/contents/{+path}",
  "compare_url": "https://api.github.com/repos/ansh/bionic-reading/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/ansh/bionic-reading/merges",
  "archive_url": "https://api.github.com/repos/ansh/bionic-reading/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/ansh/bionic-reading/downloads",
  "issues_url": "https://api.github.com/repos/ansh/bionic-reading/issues{/number}",
  "pulls_url": "https://api.github.com/repos/ansh/bionic-reading/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/ansh/bionic-reading/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/ansh/bionic-reading/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/ansh/bionic-reading/labels{/name}",
  "releases_url": "https://api.github.com/repos/ansh/bionic-reading/releases{/id}",
  "deployments_url": "https://api.github.com/repos/ansh/bionic-reading/deployments",
  "created_at": "2022-05-20T18:20:29Z",
  "updated_at": "2022-05-27T11:08:36Z",
  "pushed_at": "2022-05-27T10:59:06Z",
  "git_url": "git://github.com/ansh/bionic-reading.git",
  "ssh_url": "git@github.com:ansh/bionic-reading.git",
  "clone_url": "https://github.com/ansh/bionic-reading.git",
  "svn_url": "https://github.com/ansh/bionic-reading",
  "homepage": "https://www.jiffyreader.com/",
  "size": 202,
  "stargazers_count": 1820,
  "watchers_count": 1820,
  "language": "JavaScript",
  "has_issues": true,
  "has_projects": true,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": false,
  "forks_count": 115,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 34,
  "license": {
      "key": "gpl-3.0",
      "name": "GNU General Public License v3.0",
      "spdx_id": "GPL-3.0",
      "url": "https://api.github.com/licenses/gpl-3.0",
      "node_id": "MDc6TGljZW5zZTk="
  },
  "allow_forking": true,
  "is_template": false,
  "topics": [
      "bionic-reading",
      "chrome-extension",
      "reading",
      "web-extension"
  ],
  "visibility": "public",
  "forks": 115,
  "open_issues": 34,
  "watchers": 1820,
  "default_branch": "master",
  "score": 1,
  "isStarred": true
}

describe('Repo', () => {
  test('Verify repo card information', () => {
    render(
      <RepoCard
        {...repo}
        handleButtonClick={handleButtonClick}
        isChecked={false}
        disabled={false}
      />
    );
    expect(screen.getByText('bionic-reading')).toBeInTheDocument();
    expect(screen.getByText('A Chrome Extension for Bionic Reading on ANY website!')).toBeInTheDocument();
    expect(screen.getByText('Star Me')).toBeInTheDocument();
  });

  test('Verify button to be disabled', () => {
    render(
      <RepoCard
      {...repo}
      handleButtonClick={handleButtonClick}
      isChecked={false}
      disabled={true}
    />
    );
    expect(screen.getByTestId('btn-star')).toBeDisabled();
  });

  test('Verify button to be enabled', () => {
    render(
      <RepoCard
      {...repo}
      handleButtonClick={handleButtonClick}
      disabled={false}
      isChecked={false}
    />
    );
    expect(screen.getByTestId('btn-star')).not.toBeDisabled();
  });

  test('Verify star click button to be clicked',  () => {
    render(
        <RepoCard
        {...repo}
        handleButtonClick={handleButtonClick}
        disabled={false}
        isChecked={false}
      />
      );
    const starMeButton = screen.getByTestId('btn-star');
    fireEvent.click(starMeButton);
    expect(handleButtonClick).toHaveBeenCalledWith(repo.id);
  });

});
