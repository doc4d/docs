/**
 * Toolbar of page actions shown in the doc footer:
 *  - Copy link: copies the current page URL to the clipboard
 *  - Comment:   opens a GitHub issue (the swizzled editUrl), icon-only with tooltip
 *  - Ask AI:    dropdown to view the page as raw markdown or open it in ChatGPT / Claude
 */
import React, {useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './pageActions.module.css';

function LinkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10.5 13.5a3.5 3.5 0 0 0 5 0l3-3a3.536 3.536 0 0 0-5-5l-1.6 1.6M13.5 10.5a3.5 3.5 0 0 0-5 0l-3 3a3.536 3.536 0 0 0 5 5l1.6-1.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3zM18.5 14l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.08"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PageActions({editUrl, source, placement = 'footer'}) {
  const {siteConfig} = useDocusaurusContext();
  const [copied, setCopied] = useState(false);

  const repo = siteConfig.customFields?.githubDocsRepo ?? '4d/docs';
  const branch = siteConfig.customFields?.githubDocsBranch ?? 'main';
  const sourcePath = source ? source.replace(/^@site\//, '') : null;
  const markdownUrl = sourcePath
    ? `https://raw.githubusercontent.com/${repo}/${branch}/${sourcePath}`
    : null;

  const aiPrompt = markdownUrl
    ? `Read from ${markdownUrl} so I can ask questions about it`
    : null;
  const chatGptUrl = aiPrompt
    ? `https://chatgpt.com/?prompt=${encodeURIComponent(aiPrompt)}`
    : null;
  const claudeUrl = aiPrompt
    ? `https://claude.ai/new?q=${encodeURIComponent(aiPrompt)}`
    : null;

  const commentLabel = translate({
    id: 'theme.common.editThisPage',
    message: 'Comment on this page',
    description: 'The link label to comment on the current page',
  });
  const copyLabel = translate({
    id: 'theme.docs.pageActions.copyLink',
    message: 'Copy link',
    description: 'Tooltip for the copy-link button in the doc footer',
  });
  const copiedLabel = translate({
    id: 'theme.docs.pageActions.copied',
    message: 'Copied!',
    description: 'Tooltip shown after the link has been copied',
  });

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable (e.g. non-secure context); silently ignore.
    }
  }

  return (
    <div
      className={clsx(
        styles.actions,
        placement === 'floating' ? styles.placementFloating : styles.placementFooter,
      )}>
      <button
        type="button"
        className={clsx(styles.action, styles.tooltip)}
        data-tooltip={copied ? copiedLabel : copyLabel}
        aria-label={copyLabel}
        onClick={handleCopy}>
        {copied ? <CheckIcon /> : <LinkIcon />}
      </button>

      {editUrl && (
        <Link
          to={editUrl}
          className={clsx(styles.action, styles.tooltip)}
          data-tooltip={commentLabel}
          aria-label={commentLabel}>
          <CommentIcon />
        </Link>
      )}

      {markdownUrl && (
        <div
          className={clsx(
            styles.menu,
            'dropdown dropdown--hoverable',
          )}>
          <button
            type="button"
            className={clsx(styles.action, styles.aiButton)}
            aria-label={translate({
              id: 'theme.docs.pageActions.askAi',
              message: 'Ask AI',
              description: 'Label for the AI actions dropdown in the doc footer',
            })}>
            <AiIcon />
            <span className={styles.aiLabel}>
              {translate({
                id: 'theme.docs.pageActions.askAi',
                message: 'Ask AI',
              })}
            </span>
            <ChevronIcon />
          </button>
          <ul className="dropdown__menu">
            <li>
              <Link
                className="dropdown__link"
                to={markdownUrl}
                target="_blank"
                rel="noopener noreferrer">
                {translate({
                  id: 'theme.docs.pageActions.viewMarkdown',
                  message: 'View as markdown',
                })}
              </Link>
            </li>
            <li>
              <Link
                className="dropdown__link"
                to={chatGptUrl}
                target="_blank"
                rel="noopener noreferrer">
                {translate({
                  id: 'theme.docs.pageActions.askChatGpt',
                  message: 'Ask ChatGPT',
                })}
              </Link>
            </li>
            <li>
              <Link
                className="dropdown__link"
                to={claudeUrl}
                target="_blank"
                rel="noopener noreferrer">
                {translate({
                  id: 'theme.docs.pageActions.askClaude',
                  message: 'Ask Claude',
                })}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
