import { User } from "./User";
import { Links } from "./Links";
import { Commit } from "./Commit";
import { Label } from "./Label";

export interface PullRequest {
        url: string,
        id: number,
        node_id: string,
        html_url: string,
        diff_url: string,
        patch_url: string,
        issue_url: string,
        number: number,
        state: string,
        locked: boolean,
        title: string,
        user: User,
        body: string,
        created_at: string,
        updated_at: string,
        closed_at: string,
        merged_at: string,
        merge_commit_sha: string,
        assignee: User,
        assignees: User[],
        requested_reviewers: User[],
        requested_teams: any,
        labels: Label[],
        milestone: string,
        commits_url: string,
        review_comments_url: string,
        review_comment_url: string,
        comments_url: string,
        statuses_url: string,
        head: Commit,
        base: Commit,
        _links: Links,
        author_association: string,
}